import React from "react";
import Dashboard from "../components/dashboard.jsx";

export default function Home({ toDos, setToDos }) {
  return (
    <div className="bg-blue-500">
      <Dashboard toDos={toDos} setToDos={setToDos} />
    </div>
  );
}
