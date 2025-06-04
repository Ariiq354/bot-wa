import { mainText } from "./main.js";

export const dipaText = `
📊 *Menu DIPA - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana melihat IKPA Capaian Satker?*
2️⃣  *Bagaimana melihat Pagu Minus Belanja Realisasi?*
3️⃣  *Bagaimana melihat Realisasi Belanja?*
4️⃣  *Bagaimana melihat Data Kontrak?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, contoh: *1* untuk melihat IKPA Satker._
`;

export const firstRes = `
📈 *Menu DIPA - Melihat IKPA Capaian Satker*

- Buka *Menu IKPA*
- Pilih *Sub Menu Capaian Satker*
- Data Penilaian IKPA Satker akan ditampilkan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
💰 *Menu DIPA - Melihat Pagu Minus Belanja Realisasi*

- Buka *Menu Pagu Minus*
- Pilih salah satu *Sub Menu Belanja*
- Data Satker dengan Pagu Minus akan ditampilkan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📊 *Menu DIPA - Melihat Realisasi Belanja*

- Buka *Menu Realisasi Belanja*
- Pilih *Sub Menu Realisasi*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const fourthRes = `
📄 *Menu DIPA - Melihat Data Kontrak*

- Buka *Menu Lainnya*
- Pilih *Sub Menu Daftar Kontrak*
- Gunakan filter untuk melihat data sesuai kebutuhan
- Data kontrak akan ditampilkan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function dipaCommand(command, sock, sender, map) {
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
    case "4":
      await sock.sendMessage(sender, { text: fourthRes });
      break;
    case "9":
      map.set(sender, "main");
      await sock.sendMessage(sender, { text: mainText });
      break;
    default:
      await sock.sendMessage(sender, { text: dipaText });
      break;
  }
}
