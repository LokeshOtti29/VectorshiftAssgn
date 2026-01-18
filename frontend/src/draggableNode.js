// draggableNode.js

export const DraggableNode = ({ type, label, Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`draggable-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "center",
        flexDirection: "column",
        margin: "5px 0px",
        boxShadow: "0 0 0 1px rgba(0,0,0,18%), 0 6px 16px rgba(0,0,0,0.06)",
      }}
      draggable
    >
      {Icon && <Icon size={20} className="node-icon" />}
      <span>{label}</span>
    </div>
  );
};
