"use client";

export default function Line({ currentStage }) {
  const stages = [
    { id: 1, label: "Сагс", icon: "🛒" }, 
    { id: 2, label: "Хайрцаг сонгох", icon: "🎁" }, 
    { id: 3, label: "Төлбөр", icon: "💳" },
    { id: 4, label: "Баталгаажсан", icon: "✅" },
  ];

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", background: "#eee" }}>
      {stages.map((stage, index) => (
        <div key={stage.id} style={{ display: "flex", alignItems: "center" }}>
          <span style={{
            fontSize: "16px",
            color: stage.id <= currentStage ? "#000" : "#aaa",
            fontWeight: stage.id === currentStage ? "bold" : "normal",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}>
            {stage.icon} {stage.label}
          </span>
          {index < stages.length - 1 && (
            <div style={{
              width: "50px",
              height: "2px",
              background: stage.id < currentStage ? "#000" : "#aaa",
              margin: "0 10px"
            }} />
          )}
        </div>
      ))}
    </nav>
  );
}
