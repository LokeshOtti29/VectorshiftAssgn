import { useState } from "react";
import { BaseNode } from "./Basenode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode title="Input" outputs={[{ id: `${id}-value` }]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#444",
            }}
          >
            Name
          </label>
          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            placeholder="Enter input name"
            style={{
              padding: "8px 10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#444",
            }}
          >
            Type
          </label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{
              padding: "8px 10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "13px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
