import React from "react";
import { BaseNode } from "./Basenode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
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
          Wait
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#667085",
          }}
        >
          Pause execution (milliseconds)
        </div>
      </div>
    </BaseNode>
  );
};
