import { mainText } from "./main.js";

export const sdmText = `Pertanyaan:
  1. Bagaimana Memasukkan Data Anggota?
  2. Bagaimana Membentuk Susunan Organisasi dan Tata Kerja?

  9. Kembali`;

const firstRes = `1. Buka Menu Anggota
2. Klik Tombol Tambah Untuk Tambah Anggota

9. Kembali`;

const secondRes = `1. Buka Menu SOTK
2. Scroll Ke Bawah
3. Pilih Anggota Untuk Tambah Personel Ke SOTK

9. Kembali`;

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
