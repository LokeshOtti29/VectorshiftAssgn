// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  FolderInput,
  Puzzle,
  FolderOutput,
  Type,
  SquareTerminal,
  ReceiptText,
  Settings2,
  ClipboardClock,
  History,
} from "lucide-react";
export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          height: "17vh",
          alignItems: "flex-end",
          borderRadius: "5px",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "5px 30px",
          boxShadow: "0 0 0 1px rgba(0,0,0,18%), 0 6px 16px rgba(0,0,0,0.06)",
        }}
      >
        <DraggableNode type="customInput" label="Input" Icon={FolderInput} />
        <DraggableNode type="llm" label="LLM" Icon={Puzzle} />
        <DraggableNode type="customOutput" label="Output" Icon={FolderOutput} />
        <DraggableNode type="text" label="Text" Icon={Type} />
        <DraggableNode type="prompt" label="Prompt" Icon={SquareTerminal} />
        <DraggableNode type="condition" label="Condition" Icon={ReceiptText} />
        <DraggableNode type="apicall" label="API Call" Icon={Settings2} />
        <DraggableNode type="delay" label="Delay" Icon={ClipboardClock} />
        <DraggableNode type="logger" label="Logger" Icon={History} />
      </div>
    </div>
  );
};
