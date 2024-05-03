import {
  PlateEditor,
  TDescendant,
  TElement,
  TReactEditor,
  TText
} from "@udecode/plate-core";

// const MARK_UNDERLINE = 'underline' as string;
export const MARK_BOLD = "bold" as string;
export const MARK_ITALIC = "italic" as string;
export const MARK_STRIKETHROUGH = "strikethrough" as string;
export const MARK_CODE = "code" as string;

export const ELEMENT_LINK = "link" as string;
export const ELEMENT_PARAGRAPH = "paragraph" as string;
export const ELEMENT_BLOCKQUOTE = "blockquote" as string;
export const ELEMENT_HEADING = "heading" as string;
const ELEMENT_MENTION = "mention" as string;

// List elements
export const ELEMENT_LIST_ITEM = "list-item" as string;
export const ELEMENT_BULLETEDLIST = "bulleted-list" as string;
export const ELEMENT_NUMBEREDLIST = "numbered-list" as string;

export interface BulletedListElement extends TElement {
  type: typeof ELEMENT_BULLETEDLIST;
  children: TDescendant[];
}

export interface NumberedListElement extends TElement {
  type: typeof ELEMENT_NUMBEREDLIST;
  children: TDescendant[];
}

export interface LinkElement extends TElement {
  type: typeof ELEMENT_LINK;
  url: string;
  children: TDescendant[];
}
export interface ListItemElement extends TElement {
  type: typeof ELEMENT_LIST_ITEM;
  children: TDescendant[];
}
interface ParagraphElement extends TElement {
  type: typeof ELEMENT_PARAGRAPH;
  children: TDescendant[];
}
interface BlockquoteElement extends TElement {
  type: typeof ELEMENT_BLOCKQUOTE;
  children: TDescendant[];
}

interface HeadingElement extends TElement {
  type: typeof ELEMENT_HEADING;
  level: number;
  children: TDescendant[];
}

export interface MentionElement extends TElement {
  type: typeof ELEMENT_MENTION;
  userId: string;
  value: string;
  children: TDescendant[];
}

export type CustomElement =
  | BulletedListElement
  | HeadingElement
  | LinkElement
  | ListItemElement
  | NumberedListElement
  | ParagraphElement
  | MentionElement
  | BlockquoteElement;

export interface CustomText extends TText {
  bold?: boolean;
  underlined?: boolean;
  italic?: boolean;
  code?: boolean;
  strikethough?: boolean;
}

export type TextFormattingOption = "bold" | "underlined" | "italic";

export type EmptyText = {
  text: string;
};

export type CustomValue = CustomElement[];

type CustomReactEditor = TReactEditor<CustomValue>;

export type CustomEditor = PlateEditor<CustomValue> & {
  typescript: boolean;
} & CustomReactEditor;
