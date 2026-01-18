import React from "react";
import { BaseNode } from "./Basenode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-value` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
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
          If / Else
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#667085",
          }}
        >
          Routes flow based on a condition
        </div>
      </div>
    </BaseNode>
  );
};
