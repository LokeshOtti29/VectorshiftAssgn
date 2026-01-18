import React from "react";
import { BaseNode } from "./Basenode";

export const APICallNode = ({ id }) => {
  return (
    <BaseNode
      title="API Call"
      inputs={[{ id: `${id}-request` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
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
          REST API Request
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#667085",
          }}
        >
          Sends an HTTP request and returns the response
        </div>
      </div>
    </BaseNode>
  );
};
