import { dipaText } from "./dipa.js";
import { perwabkeuText } from "./perwabkeu.js";
import { sdmText } from "./sdm.js";
import { telakText } from "./telak.js";

export const mainText = `
👋 *Selamat datang!*

Silakan pilih aplikasi yang ingin Anda akses:

1️⃣  *Perwabkeu* — Pelaporan Keuangan
2️⃣  *Telak* — Telaah Anggaran
3️⃣  *SDM* — Manajemen Sumber Daya Manusia
4️⃣  *DIPA* — Dokumen Isian Pelaksanaan Anggaran

🛑 Ketik */selesai* jika Anda sudah selesai memilih.

_Contoh: ketik angka *1* untuk memilih Perwabkeu._
`;

export async function mainCommand(command, sock, sender, map) {
  switch (command) {
    case "1":
      map.set(sender, "perwabkeu");
      await sock.sendMessage(sender, { text: perwabkeuText });
      break;
    case "2":
      map.set(sender, "telak");
      await sock.sendMessage(sender, { text: telakText });
      break;
    case "3":
      map.set(sender, "sdm");
      await sock.sendMessage(sender, { text: sdmText });
      break;
    case "4":
      map.set(sender, "dipa");
      await sock.sendMessage(sender, { text: dipaText });
      break;
    case "/selesai":
      map.set(sender, "idle");
      await sock.sendMessage(sender, {
        text: "🙏 *Terima kasih telah menggunakan bot kami!*",
      });
      break;
    default:
      await sock.sendMessage(sender, { text: mainText });
      break;
  }
}
