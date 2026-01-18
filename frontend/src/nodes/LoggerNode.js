import { BaseNode } from "./Basenode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode title="Logger" inputs={[{ id: `${id}-log` }]}>
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
          Console Logger
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#667085",
            lineHeight: 1.4,
          }}
        >
          Logs incoming data to the console for debugging
        </div>
      </div>
    </BaseNode>
  );
};
