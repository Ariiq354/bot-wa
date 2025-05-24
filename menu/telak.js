import { mainText } from "./main.js";

export const telakText = `Pertanyaan:
  1. Bagaimana Cara Membuat RAB?
  2. Bagaiman Melihat Status Kegiatan?
  3. Apa Saja Jenis Dukungan Operasi?

  9. Kembali`;

const firstRes = `1. Masuk Menu Nama Kegiatan
2. Mengisi Kegiatan
3. Mengisi Nilai RAB
4. Melakukan Upload Dokumen RAB
5. Klik Simpan

9. Kembali`;

const secondRes = `1. Buka Menu Laporan Status Kegiatan
2. Klik Tombol Detail

9. Kembali`;

const thirdRes = `1. Dukungan Operasi POLRI
2. Direktif Kapolri

9. Kembali`;

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
