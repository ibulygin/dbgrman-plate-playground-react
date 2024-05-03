import { createListPlugin } from "@udecode/plate-list";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createSoftBreakPlugin } from "@udecode/plate-break";
import CONFIG from "./config";

const platePlugins = [
  createListPlugin(CONFIG.list),
  createAutoformatPlugin(CONFIG.autoformat),
  createSoftBreakPlugin({
    options: {
      rules: [{ hotkey: "shift+enter" }]
    }
  })
];

export default platePlugins;
