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
📈 *Melihat IKPA Capaian Satker*

1️⃣ Buka *Menu IKPA*
2️⃣ Pilih *Sub Menu Capaian Satker*
3️⃣ Data Penilaian IKPA Satker akan ditampilkan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
💰 *Melihat Pagu Minus Belanja Realisasi*

1️⃣ Buka *Menu Pagu Minus*
2️⃣ Pilih salah satu *Sub Menu Belanja*
3️⃣ Data Satker dengan Pagu Minus akan ditampilkan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📊 *Melihat Realisasi Belanja*

1️⃣ Buka *Menu Realisasi Belanja*
2️⃣ Pilih *Sub Menu Realisasi*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const fourthRes = `
📄 *Melihat Data Kontrak*

1️⃣ Buka *Menu Lainnya*
2️⃣ Pilih *Sub Menu Daftar Kontrak*
3️⃣ Gunakan filter untuk melihat data sesuai kebutuhan
4️⃣ Data kontrak akan ditampilkan

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
