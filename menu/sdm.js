import { mainText } from "./main.js";

export const sdmText = `
👥 *Menu SDM - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana memasukkan data anggota?*
2️⃣  *Bagaimana membentuk Susunan Organisasi dan Tata Kerja (SOTK)?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, contoh: *1* untuk melihat cara input data anggota._
`;

export const firstRes = `
🧾 *Cara Memasukkan Data Anggota*

1️⃣ Buka *Menu Anggota*
2️⃣ Klik tombol *Tambah* untuk menambahkan anggota baru

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
🏛️ *Membentuk Susunan Organisasi dan Tata Kerja (SOTK)*

1️⃣ Buka *Menu SOTK*
2️⃣ Scroll ke bawah untuk melihat struktur
3️⃣ Pilih anggota untuk menambah personel ke dalam SOTK

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function sdmCommand(command, sock, sender, map) {
  switch (command) {
    case "1":
      await sock.sendMessage(sender, { text: firstRes });
      break;
    case "2":
      await sock.sendMessage(sender, { text: secondRes });
      break;
    case "9":
      map.set(sender, "main");
      await sock.sendMessage(sender, { text: mainText });
      break;
    default:
      await sock.sendMessage(sender, { text: sdmText });
      break;
  }
}
