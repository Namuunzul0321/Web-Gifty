"use client";

export default function Line({ currentStage }) {
  const stages = [
    { id: 1, label: "Сагс", icon: "🛒" },
    { id: 2, label: "Хайрцаг сонгох", icon: "🎁" },
    { id: 3, label: "Төлбөр", icon: "💳" },
    { id: 4, label: "Баталгаажсан", icon: "✅" },
  ];

  return (
    <nav className="flex items-center justify-center px-4 py-3 bg-gray-200">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex items-center">
          <span
            className={`text-sm flex items-center gap-1 ${
              stage.id === currentStage ? "font-bold text-black" : stage.id < currentStage ? "text-black" : "text-gray-400"
            }`}
          >
            {stage.icon} {stage.label}
          </span>
          {index < stages.length - 1 && (
            <div
              className={`w-[50px] h-[2px] mx-2 ${
                stage.id < currentStage ? "bg-black" : "bg-gray-400"
              }`}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
