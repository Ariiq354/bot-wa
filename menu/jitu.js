import { mainText } from "./main.js";

export const jituText = `
📊 *Menu JITU - Pertanyaan Umum*

Silakan pilih pertanyaan yang ingin Anda ketahui jawabannya:

1️⃣  *Struktur Gaji Pokok (Golongan, Pangkat)*
2️⃣  *Jenis-jenis Tunjangan (Kinerja, Jabatan, Keluarga, dll.)*
3️⃣  *Cara upload excel ADK*

↩️ 9. *Kembali ke menu utama*

_Ketik angka sesuai pilihan Anda, contoh: *1* untuk melihat struktur gaji pokok._
`;

export const firstRes = `
📈 *Menu JITU - Struktur Gaji Pokok*

- *Pangkat*
- *Golongan*
- *Masa Kerja*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
💰 *Menu JITU - Jenis-Jenis Tunjangan*

- Tunjangan Istri/Suami
- Tunjangan Anak
- Tunjangan Pangan/Beras
- Tunjangan Papua
- Tunjangan Umum
- Tunjangan POLWAN
- Tunjangan BABINKAM / POTPFKBUL
- Tunjangan WIL.TPCL/LUAR
- Tunjangan PPH 2 Tunjangan ULP
- Tunjangan Keterampilan
- Tunjangan Sandi
- Tunjangan Jabatan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📄 *Menu JITU - Cara upload excel ADK*

- Kunjungi portal aplikasi Polri di https://app.puskeu.polri.go.id/
- Masukkan username dan password akun satker Anda
- Setelah berhasil login, cari menu "Upload Excell ADK"
- Unduh template excell ADK POLRI/ASN
- Upload data menggunakan template yang sudah disediakan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export async function jituCommand(command, sock, sender, map) {
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
      await sock.sendMessage(sender, { text: jituText });
      break;
  }
}
