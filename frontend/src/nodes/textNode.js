import { useEffect, useRef, useState } from "react";
import { BaseNode } from "./Basenode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);
  const [size, setSize] = useState({ width: 240, height: 250 });
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;

    textarea.style.height = "auto";

    const textHeight = textarea.scrollHeight;
    const lines = currText.split("\n");
    let maxCharsInLine = 0;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length > maxCharsInLine) {
        maxCharsInLine = lines[i].length;
      }
    }
    let calculatedWidth = maxCharsInLine * 7 + 60;

    if (calculatedWidth < 260) calculatedWidth = 260;
    if (calculatedWidth > 600) calculatedWidth = 600;

    const extraHeightForHandles = variables.length > 0 ? 80 : 40;

    const calculatedHeight = Math.max(
      250,
      textHeight + extraHeightForHandles + 100,
    );

    setSize({
      width: calculatedWidth,
      height: calculatedHeight,
    });
    textareaRef.current.style.height = `${textHeight}px`;
  }, [currText, variables.length]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const foundVars = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      foundVars.add(match[1]);
    }

    setVariables(Array.from(foundVars));
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      width={size.width}
      height={size.height}
      outputs={[{ id: `${id}-output` }]}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
        label: variable,
      }))}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#344054",
          }}
        >
          Text
        </div>

        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          placeholder="Enter text with {{variables}}..."
          style={{
            width: "90%",
            resize: "none",
            overflow: "hidden",
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            padding: "8px",
            fontSize: "13px",
            outline: "none",
            minHeight: "60px",
            lineHeight: "1.5",
            fontFamily: "inherit",
          }}
        />

        {variables.length > 0 && (
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: "11px",
                color: "#64748b",
                marginBottom: "6px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Detected Variables: ({variables.length})
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {variables.map((variable) => (
                <span
                  key={variable}
                  style={{
                    fontSize: "11px",
                    padding: "4px 10px",
                    background: "#eff6ff",
                    color: "#3b82f6",
                    borderRadius: "6px",
                    fontFamily: "ui-monospace, monospace",
                    fontWeight: "600",
                    border: "1px solid #dbeafe",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#3b82f6",
                    }}
                  />
                  {variable}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseNode>
  );
};
