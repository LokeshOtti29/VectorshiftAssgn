import { BaseNode } from "./Basenode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[{ id: `${id}-system` }, { id: `${id}-prompt` }]}
      outputs={[{ id: `${id}-response` }]}
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
        <div
          style={{
            fontWeight: 600,
            color: "#1D2939",
          }}
        >
          Language Model
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#667085",
            lineHeight: 1.4,
          }}
        >
          Generates a response based on system and user prompts
        </div>
      </div>
    </BaseNode>
  );
};
