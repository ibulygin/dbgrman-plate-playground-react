import { Plate } from "@udecode/plate-core";
import "./styles.css";
import platePlugins from "./plugins";
import { useCallback, useState } from "react";
import { JSONTree } from "react-json-tree";
import jsonTreeTheme from "./jsonTreeConfig";
import plateEditableStyle from "./plateStyle";
import { ELEMENT_PARAGRAPH } from "./types";
import { usePlateSelectors } from "@udecode/plate";

export default function App() {
  const editableProps = {
    placeholder: "Type here...",
    style: plateEditableStyle
  };

  const [contentJson, setContentJson] = useState({});
  const [selectionJson, setSelectionJson] = useState({});
  const [operationsJson, setOperationsJson] = useState({});
  const emptyElement = { type: ELEMENT_PARAGRAPH, children: [{ text: "" }] };
  const initialValue = [emptyElement];
  const editor = usePlateSelectors("core-editor").editor();

  const onEditorChange = useCallback(
    (value) => {
      setContentJson(value);
      if (editor) {
        setSelectionJson(editor.selection);
        setOperationsJson(editor.operations);
      }
    },
    [editor]
  );

  return (
    <div className="App">
      <div className="page-wrapper">
        <h1 className="row">A playground for Plate</h1>
        <div className="editor-surface row">
          <Plate
            id="core-editor"
            editor={editor}
            plugins={platePlugins}
            editableProps={editableProps}
            onChange={onEditorChange}
            initialValue={initialValue}
          />
          <div>
            <h4>Editor Selection</h4>
            <JSONTree
              data={selectionJson}
              className="json-tree column"
              theme={jsonTreeTheme}
              labelRenderer={([key]) => <strong>{key}</strong>}
              valueRenderer={(raw) => <em>{raw}</em>}
              shouldExpandNode={() => true}
            />
            <h4>Editor Ops</h4>
            <JSONTree
              data={operationsJson}
              className="json-tree column"
              theme={jsonTreeTheme}
              labelRenderer={([key]) => <strong>{key}</strong>}
              valueRenderer={(raw) => <em>{raw}</em>}
              shouldExpandNode={() => true}
            />
            <h2>Slate children</h2>
            <JSONTree
              data={contentJson}
              className="json-tree column"
              theme={jsonTreeTheme}
              labelRenderer={([key]) => <strong>{key}</strong>}
              valueRenderer={(raw) => <em>{raw}</em>}
              shouldExpandNode={() => true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
