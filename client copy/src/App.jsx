import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";

import SignUp from "./pages/signup.jsx";
import SignIn from "./pages/Signin.jsx";
import AddTask from "./pages/addtask.jsx";
import UpdateTask from "./pages/updatetask.jsx";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtasks, setSubTasks] = useState([]);
  const [subtaskInput, setSubtaskInput] = useState("");
  const [tags, setTags] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home toDos={toDos} setToDos={setToDos} />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route
          path="/addtask"
          element={
            <AddTask
              taskTitle={taskTitle}
              onTask={setTaskTitle}
              category={category}
              onCatagory={setCategory}
              dueDate={dueDate}
              onDueDate={setDueDate}
              priority={priority}
              onPriority={setPriority}
              taskDescription={taskDescription}
              onTaskDescription={setTaskDescription}
              subtasks={subtasks}
              onSubTasks={setSubTasks}
              subtaskInput={subtaskInput}
              onSubTaskInput={setSubtaskInput}
              tags={tags}
              onTags={setTags}
              toDos={toDos}
              setToDos={setToDos}
            />
          }
        ></Route>
        <Route
          path="/updatetask/:elemId"
          element={
            <UpdateTask
              taskTitle={taskTitle}
              onTask={setTaskTitle}
              category={category}
              onCatagory={setCategory}
              dueDate={dueDate}
              onDueDate={setDueDate}
              priority={priority}
              onPriority={setPriority}
              taskDescription={taskDescription}
              onTaskDescription={setTaskDescription}
              subtasks={subtasks}
              onSubTasks={setSubTasks}
              subtaskInput={subtaskInput}
              onSubTaskInput={setSubtaskInput}
              tags={tags}
              onTags={setTags}
              toDos={toDos}
              setToDos={setToDos}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
