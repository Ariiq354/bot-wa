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
📩 *Menu Selaras - Cara Membuat Surat Masuk*

- Buka Menu *Surat Masuk*
- Klik *Tambah Surat Masuk*
- Masukkan *Nilai RAB*
- Upload dokumen RAB

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
📤 *Menu Selaras - Cara Membuat Surat Keluar*

- Buka *Menu Surat Keluar*
- Klik *Tambah Surat Keluar*
- Mengisi *Peruntukan Surat Keluar*
- Klik *Simpan*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📅 *Menu Selaras - Cara Membuat Jadwal Kegiatan*

- Buka *Menu Surat Masuk* atau *Surat Keluar*
- Klik *Tambah Surat Masuk* atau *Surat Keluar*
- Mengisi *Peruntukan Surat Masuk* atau *Surat Keluar*
- Klik *Buat Kegiatan*
- Mengisi *Kegiatan*
- Klik *Simpan*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const fourthRes = `
✍️ *Menu Selaras - Tanda Tangan Elektronik*

- Buka *Menu Surat Keluar*
- Klik *Tambah Surat Keluar*
- Mengisi *Peruntukan Surat Keluar* Termasuk *Unggah Dokumen Word*
- Klik *Simpan*
- Nama Surat Yang Dituju Ada Notifikasi
- Masuk *Detail Surat Keluar*
- Klik Button *Approval/Konfirmasi TTE*
- Masukkan *Email dan Kata Sandi DIVTIK*
- Masukkan *Email dan Kata Sandi BSRE*
- *TTE Berhasil dan Dokumen TTE Sudah Siap*

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
