import { useState } from "react";
import { BaseNode } from "./Basenode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode title="Output" inputs={[{ id: `${id}-value` }]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          fontSize: "13px",
          color: "#344054",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ fontWeight: 600 }}>Name</label>
          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              padding: "6px 8px",
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "13px",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #7B61FF")}
            onBlur={(e) => (e.target.style.border = "1px solid #D0D5DD")}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ fontWeight: 600 }}>Type</label>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{
              padding: "6px 8px",
              borderRadius: "6px",
              border: "1px solid #D0D5DD",
              fontSize: "13px",
              outline: "none",
              backgroundColor: "#fff",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #7B61FF")}
            onBlur={(e) => (e.target.style.border = "1px solid #D0D5DD")}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
