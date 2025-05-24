import { mainText } from "./main.js";

export const perwabkeuText = `Pertanyaan:
  1. Bagaimana Cara Upload Dokumen NHPW?
  2. Bagaimana Ubah Data SP2D?
  3. Jenis Perwabkeu Apa Saja?

  9. Kembali`;

const firstRes = `1. Masuk Menu Kontrak
2. Pilih Kontrak
3. Pilih Nilai Termin
4. Jika Sudah Mengisi SP2D, Maka Upload Dokumen Dengan Klik Upload
5. Jika Belum Mengisi SP2D, Maka Isi Data SP2D

9. Kembali`;

const secondRes = `1. Masuk Menu Kontrak
2. Pilih Kontrak
3. Pilih Nilai Termin
4. Klik Tombol Edit SP2D
5. Kirim Pesan Untuk Bidkeu Buka Ubah Data
6. Bidkeu Menyetujui
7. Silakan Ubah Data

9. Kembali`;

const thirdRes = `1. Dokumen Perwabkeu Diatas 200 Juta
2. Dokumen Perwabkeu 50 Juta Sampai 200 Juta
3. Dokumen Perwabkeu Kurang 50 Juta
4. Dokumen Perwabkeu Latihan Pra Operasi
5. Dokumen Perwabkeu Listrik, Telepon, Gas
6. Dokumen Perwabkeu Pelaksanaan Operasi

9. Kembali`;

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
