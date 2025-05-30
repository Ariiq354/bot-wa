import { mainText } from "./main.js";

export const selarasText = `
📌 *Menu Selaras - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Bagaimana Membuat Surat Masuk?*
2️⃣  *Bagaimana Membuat Surat Keluar?*
3️⃣  *Bagaimana Membuat Jadwal Kegiatan?*
4️⃣  *Bagaimana Untuk Tanda Tangan Elektronik?*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, contoh: *1* untuk melihat cara membuat Surat Masuk._
`;

export const firstRes = `
📩 *Cara Membuat Surat Masuk*

1️⃣ Buka Menu *Surat Masuk*
2️⃣ Klik *Tambah Surat Masuk*
3️⃣ Masukkan *Nilai RAB*
4️⃣ Upload dokumen RAB

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
📤 *Cara Membuat Surat Keluar*

1️⃣ Buka *Menu Surat Keluar*
2️⃣ Klik *Tambah Surat Keluar*
3️⃣ Mengisi *Peruntukan Surat Keluar*
4️⃣ Klik *Simpan*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📅 *Cara Membuat Jadwal Kegiatan*

1️⃣ Buka *Menu Surat Masuk* atau *Surat Keluar*
2️⃣ Klik *Tambah Surat Masuk* atau *Surat Keluar*
3️⃣ Mengisi *Peruntukan Surat Masuk* atau *Surat Keluar*
4️⃣ Klik *Buat Kegiatan*
5️⃣ Mengisi *Kegiatan*
6️⃣ Klik *Simpan*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const fourthRes = `
✍️ *Tanda Tangan Elektronik*

1️⃣ Buka *Menu Surat Keluar*
2️⃣ Klik *Tambah Surat Keluar*
3️⃣ Mengisi *Peruntukan Surat Keluar* Termasuk *Unggah Dokumen Word*
4️⃣ Klik *Simpan*
5️⃣ Nama Surat Yang Dituju Ada Notifikasi
6️⃣ Masuk *Detail Surat Keluar*
7️⃣ Klik Button *Approval/Konfirmasi TTE*
8️⃣ Masukkan *Email dan Kata Sandi DIVTIK*
9️⃣ Masukkan *Email dan Kata Sandi BSRE*
🔟 *TTE Berhasil dan Dokumen TTE Sudah Siap*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function selarasCommand(command, sock, sender, map) {
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
      await sock.sendMessage(sender, { text: selarasText });
      break;
  }
}
