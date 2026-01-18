import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  width = 260,
  height = 250,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        background: "#fff",
        borderRadius: "10px",
        border: "1px solid #E4E7EC",
        boxShadow:
          "0 1px 2px rgba(16, 24, 40, 0.05), 0 4px 12px rgba(16, 24, 40, 0.08)",
        fontSize: "13px",
        position: "relative",
      }}
    >
      {inputs.map((input, index) => {
        const topPosition = ((index + 1) * 100) / (inputs.length + 1);

        return (
          <Handle
            key={input.id}
            type="target"
            position={Position.Left}
            id={input.id}
            style={{
              top: `${topPosition}%`,
              transform: "translateY(-50%)",
              background: "#7B61FF",
              width: 8,
              height: 8,
              border: "2px solid white",
            }}
          />
        );
      })}

      <div
        style={{
          padding: "8px 10px",
          background: "#F5F7FF",
          borderBottom: "1px solid #E4E7EC",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          fontWeight: 600,
          fontSize: "14px",
          color: "#344054",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {title}
      </div>

      <div style={{ padding: "10px" }}>{children}</div>

      {outputs.map((output, index) => {
        const topPosition = ((index + 1) * 100) / (outputs.length + 1);

        return (
          <Handle
            key={output.id}
            type="source"
            position={Position.Right}
            id={output.id}
            style={{
              top: `${topPosition}%`,
              transform: "translateY(-50%)",
              background: "#7B61FF",
              width: 8,
              height: 8,
              border: "2px solid white",
            }}
          />
        );
      })}
    </div>
  );
};
