import { mainText } from "./main.js";

export const perwabkeuText = `
📂 *Menu Perwabkeu - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana cara upload dokumen NHPW?*
2️⃣  *Bagaimana cara mengubah data SP2D?*
3️⃣  *Apa saja jenis Perwabkeu?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, misalnya *1* untuk melihat cara upload dokumen NHPW._
`;

const firstRes = `
📤 *Menu Perwabkeu - Cara Upload Dokumen NHPW*

- Masuk ke *Menu Kontrak*
- Pilih *Kontrak* yang sesuai
- Pilih *Nilai Termin*
- Jika sudah mengisi SP2D, klik *Upload* untuk mengunggah dokumen
- Jika belum, isi dulu *Data SP2D*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

const secondRes = `
✏️ *Menu Perwabkeu - Cara Mengubah Data SP2D*

- Masuk ke *Menu Kontrak*
- Pilih *Kontrak*
- Pilih *Nilai Termin*
- Klik tombol *Edit SP2D*
- Kirim pesan ke *Bidkeu* untuk membuka akses edit
- Setelah disetujui oleh Bidkeu
- Anda bisa langsung mengubah data

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

const thirdRes = `
📑 *Menu Perwabkeu - Jenis Dokumen Perwabkeu*

- Di atas Rp200 juta
- Rp50 juta – Rp200 juta
- Di bawah Rp50 juta
- Latihan Pra Operasi
- Listrik, Telepon, Gas
- Pelaksanaan Operasi

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function perwabkeuCommand(command, sock, sender, map) {
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
      await sock.sendMessage(sender, { text: perwabkeuText });
      break;
  }
}
