import { dipaText } from "./dipa.js";
import { jituText } from "./jitu.js";
import { perwabkeuText } from "./perwabkeu.js";
import { sdmText } from "./sdm.js";
import { selarasText } from "./selaras.js";
import { telakText } from "./telak.js";

export const mainText = `
👋 *Selamat datang!*

Silakan pilih aplikasi yang ingin Anda akses:

1️⃣  *Perwabkeu* — Pertanggungjawab Keuangan
2️⃣  *Telak* — Tindak Pidana Terhadap Layanan Administrasi Kepolisian
3️⃣  *SDM* — Sumber Daya Manusia
4️⃣  *DIPA* — Dokumen Isian Pelaksanaan Anggaran
5️⃣  *Selaras* — Sistem Elektronik Layanan Anggaran dan Rencana Anggaran Satuan
6️⃣  *JITU* — Jaringan Integrasi Teknologi Utama

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
    case "5":
      map.set(sender, "selaras");
      await sock.sendMessage(sender, { text: selarasText });
      break;
    case "6":
      map.set(sender, "jitu");
      await sock.sendMessage(sender, { text: jituText });
      break;
    case "/selesai":
      map.delete(sender);
      await sock.sendMessage(sender, {
        text: "🙏 *Terima kasih telah menggunakan bot kami!*",
      });
      break;
    default:
      await sock.sendMessage(sender, { text: mainText });
      break;
  }
}
