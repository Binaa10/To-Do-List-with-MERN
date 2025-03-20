import React from "react";
import { LuNotebookPen } from "react-icons/lu";

export default function Home() {
  return (
    <header className="headerr">
      <LuNotebookPen />
      <span className="black">
        <sup>Todo list</sup>
      </span>
      <input type="text" />
    </header>
  );
}
