import { AutoformatRule } from "@udecode/plate-autoformat";
import { clearBlockFormat, formatList } from "./utils";

import {
  ELEMENT_NUMBEREDLIST,
  ELEMENT_BULLETEDLIST,
  ELEMENT_LIST_ITEM
} from "../types";

const autoformatListRules: AutoformatRule[] = [
  {
    mode: "block",
    type: ELEMENT_LIST_ITEM,
    match: ["* ", "- "],
    preFormat: clearBlockFormat,
    format: (editor) => formatList(editor, ELEMENT_BULLETEDLIST)
  },
  {
    mode: "block",
    type: ELEMENT_LIST_ITEM,
    match: ["1. ", "1) "],
    preFormat: clearBlockFormat,
    format: (editor) => formatList(editor, ELEMENT_NUMBEREDLIST)
  }
];

const autoformatOptions = {
  rules: [...autoformatListRules]
};

export default autoformatOptions;
