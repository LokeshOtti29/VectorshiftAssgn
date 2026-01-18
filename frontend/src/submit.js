// submit.js
import { Send } from "lucide-react";
export const SubmitButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",

          padding: "8px 14px",
          borderRadius: "5px",
          border: "1px solid #6366f1",
          background: "#6366f1",
          color: "#ffffff",

          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",

          boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
          transition: "background 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#4f46e5";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#6366f1";
        }}
      >
        <Send size={16} />
        Submit
      </button>
    </div>
  );
};
