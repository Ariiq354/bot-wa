import { mainText } from "./main.js";

export const telakText = `
📌 *Menu Telak - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana cara membuat RAB?*
2️⃣  *Bagaimana melihat status kegiatan?*
3️⃣  *Apa saja jenis Dukungan Operasi?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, contoh: *1* untuk melihat cara membuat RAB._
`;

export const firstRes = `
📝 *Menu Telak - Cara Membuat RAB*

- Masuk ke *Menu Nama Kegiatan*
- Isi data *Kegiatan*
- Masukkan *Nilai RAB*
- Upload dokumen RAB
- Klik *Simpan* untuk menyimpan data

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
📊 *Menu Telak - Melihat Status Kegiatan*

- Buka *Menu Laporan Status Kegiatan*
- Klik tombol *Detail* untuk melihat informasi lengkap

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
🎯 *Menu Telak - Jenis Dukungan Operasi*

- *Dukungan Operasi POLRI*
- *Direktif Kapolri*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function telakCommand(command, sock, sender, map) {
  switch (command) {
    case "1":
      await sock.sendMessage(sender, { text: firstRes });
      break;
    case "2":
      await sock.sendMessage(sender, { text: secondRes });
      break;
    case "3":
      await sock.sendMessage(sender, { text: thirdRes });
      break;
    case "9":
      map.set(sender, "main");
      await sock.sendMessage(sender, { text: mainText });
      break;
    default:
      await sock.sendMessage(sender, { text: telakText });
      break;
  }
}
