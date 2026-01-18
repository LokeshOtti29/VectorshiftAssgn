import { useState } from "react";
import { BaseNode } from "./Basenode";

export const PromptNode = ({ id }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <BaseNode
      title="Prompt"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-prompt` }]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          fontSize: "13px",
          color: "#344054",
        }}
      >
        <label style={{ fontWeight: 600 }}>Prompt</label>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt..."
          style={{
            width: "90%",
            minHeight: "70px",
            resize: "none",
            padding: "8px 10px",
            fontSize: "13px",
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #7B61FF")}
          onBlur={(e) => (e.target.style.border = "1px solid #D0D5DD")}
        />
      </div>
    </BaseNode>
  );
};
