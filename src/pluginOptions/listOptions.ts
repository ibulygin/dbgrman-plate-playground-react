import NumberedListElement from "../Lists/NumberedListElement";
import BulletedListElement from "../Lists/BulletedListElement";
import ListItemElement from "../Lists/ListItemElement";
import {
  ELEMENT_NUMBEREDLIST,
  ELEMENT_BULLETEDLIST,
  ELEMENT_LIST_ITEM
} from "../types";

const PLATE_UNORDERED_LIST_KEY = "ul";
const PLATE_NUMBERED_LIST_KEY = "ol";
const PLATE_LIST_ITEM_KEY = "li";

const listOptions = {
  overrideByKey: {
    [PLATE_UNORDERED_LIST_KEY]: {
      type: ELEMENT_BULLETEDLIST,
      component: BulletedListElement
    },
    [PLATE_LIST_ITEM_KEY]: {
      type: ELEMENT_LIST_ITEM,
      component: ListItemElement
    },
    [PLATE_NUMBERED_LIST_KEY]: {
      type: ELEMENT_NUMBEREDLIST,
      component: NumberedListElement
    }
  }
};

export default listOptions;
