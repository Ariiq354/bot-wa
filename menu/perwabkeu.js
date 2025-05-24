import { mainText } from "./main.js";

export const perwabkeuText = `
📂 *Menu Perwabkeu*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana cara upload dokumen NHPW?*
2️⃣  *Bagaimana cara mengubah data SP2D?*
3️⃣  *Apa saja jenis Perwabkeu?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, misalnya *1* untuk melihat cara upload dokumen NHPW._
`;

const firstRes = `
📤 *Cara Upload Dokumen NHPW*

1️⃣ Masuk ke *Menu Kontrak*
2️⃣ Pilih *Kontrak* yang sesuai
3️⃣ Pilih *Nilai Termin*
4️⃣ Jika sudah mengisi SP2D, klik *Upload* untuk mengunggah dokumen
5️⃣ Jika belum, isi dulu *Data SP2D*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

const secondRes = `
✏️ *Cara Mengubah Data SP2D*

1️⃣ Masuk ke *Menu Kontrak*
2️⃣ Pilih *Kontrak*
3️⃣ Pilih *Nilai Termin*
4️⃣ Klik tombol *Edit SP2D*
5️⃣ Kirim pesan ke *Bidkeu* untuk membuka akses edit
6️⃣ Setelah disetujui oleh Bidkeu
7️⃣ Anda bisa langsung mengubah data

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

const thirdRes = `
📑 *Jenis Dokumen Perwabkeu*

1️⃣ Di atas Rp200 juta
2️⃣ Rp50 juta – Rp200 juta
3️⃣ Di bawah Rp50 juta
4️⃣ Latihan Pra Operasi
5️⃣ Listrik, Telepon, Gas
6️⃣ Pelaksanaan Operasi

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
