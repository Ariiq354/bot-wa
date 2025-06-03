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
📈 *Struktur Gaji Pokok*

1️⃣ *Pangkat*
2️⃣ *Golongan*
3️⃣ *Masa Kerja*

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const secondRes = `
💰 *Jenis-Jenis Tunjangan*

1️⃣ Tunjangan Istri/Suami
2️⃣ Tunjangan Anak
3️⃣ Tunjangan Pangan/Beras
4️⃣ Tunjangan Papua
5️⃣ Tunjangan Umum
6️⃣ Tunjangan POLWAN
7️⃣ Tunjangan BABINKAM / POTPFKBUL
8️⃣ Tunjangan WIL.TPCL/LUAR
9️⃣ Tunjangan PPH 21
🔟 Tunjangan ULP
1️⃣1️⃣ Tunjangan Keterampilan
1️⃣2️⃣ Tunjangan Sandi
1️⃣3️⃣ Tunjangan Jabatan

↩️ *Ketik 9 untuk kembali ke menu sebelumnya.*
`;

export const thirdRes = `
📄 *Cara upload excel ADK*

1️⃣ Kunjungi portal aplikasi Polri di https://app.puskeu.polri.go.id/
2️⃣ Masukkan username dan password akun satker Anda
3️⃣ Setelah berhasil login, cari menu "Upload Excell ADK"
4️⃣ Unduh template excell ADK POLRI/ASN
5️⃣ Upload data menggunakan template yang sudah disediakan

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
