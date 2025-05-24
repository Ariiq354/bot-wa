import { mainText } from "./main.js";

export const dipaText = `Pertanyaan:
  1. Bagaimana Melihat IKPA Capaian Satker?
  2. Bagaimana Melihat Pagu Minus Belanja Realisasi?
  3. Bagaimana Melihat Realisasi Belanja?
  4. Bagaimana Melihat Data Kontrak?

  9. Kembali`;

const firstRes = `1. Buka Menu IKPA
2. Pilih Sub Menu Capaian Satker
3. Tampil Data Penilaian IKPA Satker`;

const secondRes = `1. Buka Menu Pagu Minus
2. Pilih Salah Satu Sub Menu Belanja
3. Tampil Data Satker Dengan Pagu Minus`;

const thirdRes = `1. Buka Menu Realisasi Belanja
2. Pilih Sub Menu Realisasi`;

const fourthRes = `1. Buka Menu Lainnya
2. Pilih Sub Menu Daftar Kontrak
3. Filter Data Ingin Dilihat
4. Tampil Data Kontrak`;

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
