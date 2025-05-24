import { dipaText } from "./dipa.js";
import { perwabkeuText } from "./perwabkeu.js";
import { sdmText } from "./sdm.js";
import { telakText } from "./telak.js";

export const mainText = `Pilih Aplikasi:
  1. Perwabkeu
  2. Telak
  3. SDM
  4. DIPA
`;

export async function mainCommand(command, sock, sender, map) {
  switch (command) {
    case "1":
      map.set(sender, "perwabkeu");
      await sock.sendMessage(sender, { text: perwabkeuText });
      break;
    case "2":
      map.set(sender, "telak");
      await sock.sendMessage(sender, { text: telakText });
      break;
    case "3":
      map.set(sender, "sdm");
      await sock.sendMessage(sender, { text: sdmText });
      break;
    case "4":
      map.set(sender, "dipa");
      await sock.sendMessage(sender, { text: dipaText });
      break;
    default:
      await sock.sendMessage(sender, { text: mainText });
      break;
  }
}
