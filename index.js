import { makeWASocket, useMultiFileAuthState } from "baileys";
import qrcode from "qrcode-terminal";
import { dipaCommand } from "./menu/dipa.js";
import { mainCommand } from "./menu/main.js";
import { perwabkeuCommand } from "./menu/perwabkeu.js";
import { sdmCommand } from "./menu/sdm.js";
import { telakCommand } from "./menu/telak.js";
import { selarasCommand } from "./menu/selaras.js";

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  let sock = makeWASocket({
    auth: state,
    printQRInTerminal: true, // Show QR code in the terminal
  });

  // if (!sock.authState.creds.registered) {
  //   const code = await sock.requestPairingCode("6285172275956");
  //   console.log(`🎁  Pairing Code : ${code}`);
  // }

  const userState = new Map();
  const userTimeouts = new Map();
  function resetUserTimeout(sender) {
    // Clear existing timeout if any
    const existingTimeout = userTimeouts.get(sender);
    if (existingTimeout) clearTimeout(existingTimeout);

    // Set a new 5-minute timeout
    const timeoutId = setTimeout(() => {
      userState.delete(sender);
      userTimeouts.delete(sender);
      console.log(`User ${sender} state expired and was removed.`);
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    userTimeouts.set(sender, timeoutId);
  }

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;
    if (connection === "close") {
      console.log("❌  Koneksi Terputus, Mencoba Menyambung Ulang");
      connectToWhatsApp();
    } else if (connection === "open") {
      console.log("✔  Bot Berhasil Terhubung Ke WhatsApp");
    }
    if (qr) {
      console.log("📱  Scan this QR code to connect:");
      qrcode.generate(qr, { small: true });
    }
  });

  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0];

    if (!msg?.message || msg.key.fromMe) return;

    const body =
      msg.message.conversation || msg.message.extendedTextMessage?.text || "";
    const sender = msg.key.remoteJid;

    const args = body.trim().split(" ");
    const command = args.shift().toLowerCase();

    resetUserTimeout(sender);

    if (command === "/mulai") {
      userState.set(sender, "main");
    }

    const state = userState.get(sender) || "idle";
    console.log(state, command);
    if (state !== "idle") {
      switch (state) {
        case "main":
          await mainCommand(command, sock, sender, userState);
          break;
        case "perwabkeu":
          await perwabkeuCommand(command, sock, sender, userState);
          break;
        case "telak":
          await telakCommand(command, sock, sender, userState);
          break;
        case "sdm":
          await sdmCommand(command, sock, sender, userState);
          break;
        case "dipa":
          await dipaCommand(command, sock, sender, userState);
          break;
        case "selaras":
          await selarasCommand(command, sock, sender, userState);
          break;
      }
    }
  });
}

connectToWhatsApp();
