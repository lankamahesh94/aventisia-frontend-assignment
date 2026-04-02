import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Knowledge Base"); 

  const menuItem = (name, icon) => (
    <div
      onClick={() => setActive(name)}
      className={`flex items-center gap-3 p-2 rounded cursor-pointer text-sm
        ${active === name ? "bg-indigo-100 text-indigo-600 font-medium" : "hover:bg-gray-200"}
      `}
    > 
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );

  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      
      <div className="text-xs text-gray-400 mb-3">MY PROJECTS</div>
      {menuItem("Agents", "📁")}
      {menuItem("AI Models", "🤖")}
      {menuItem("Library", "📚")}

      <div className="text-xs text-gray-400 mt-6 mb-3">ORCHESTRATOR</div>
      {menuItem("Published", "📦")}
      {menuItem("Machines", "💻")}
      {menuItem("Queues", "📊")}
      {menuItem("Triggers", "⚡")}
      {menuItem("Jobs", "🧾")}
      {menuItem("Executions", "▶️")}
      {menuItem("Vault", "🔐")}
      {menuItem("Knowledge Base", "📘")}
      {menuItem("Key Store", "🔑")}

      <div className="text-xs text-gray-400 mt-6 mb-3">ADMIN</div>
      {menuItem("Tenant", "🏢")}
      {menuItem("Integrations", "🔗")}

    </div>
  );
}
