import React from "react";
import { Link } from "react-router-dom"; // Add this import
import TodoCard from "../components/cards.jsx";
import Navbar from "../components/navbar.jsx";
{
  /*
    const tasks = Array(4).fill({
      title: "Task Title",
      description: "Task description",
      category: "Category",
      priority: "Priority",
      dueDate: "March 25, 2025",
      subtasks: ["Subtask", "Subtask", "Subtask"],
    });
*/
}

export default function Dashboard({ toDos, setToDos }) {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Navbar />

      <div className="flex flex-1 p-4">
        <div className="w-64 bg-blue-600 text-white rounded-md shadow-md">
          <aside className="w-64 bg-blue-600 text-white p-6 mt-4 rounded-lg flex flex-col">
            <h2 className="mb-4 text-xl font-bold">Dashboard</h2>
            <p className="mb-6 text-sm">Manage your tasks efficiently.</p>

            <div className="mb-8 flex flex-col gap-2">
              <h3 className="mb-2 text-lg font-semibold">Filters</h3>
              <button className="w-full py-2  bg-[#215a8f] text-white rounded-md transition hover:bg-white hover:text-blue-500">
                Today
              </button>
              <button className="w-full py-2  bg-[#215a8f] text-white rounded-md transition hover:bg-white hover:text-blue-500">
                Scheduled
              </button>
              <button className="w-full py-2  bg-[#215a8f] text-white rounded-md transition hover:bg-white hover:text-blue-500">
                All Tasks
              </button>
              <button className="w-full py-2 bg-[#215a8f] text-white rounded-md transition hover:bg-white hover:text-blue-500">
                Completed
              </button>
            </div>

            {/* ////// catagories */}
            <div className="mb-8 flex flex-col gap-2">
              <h3 className="mb-2 text-lg font-semibold">Catagories</h3>
              <li className="flex justify-between items-center group hover:bg-gray-500 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium  text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Work
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  5
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-500 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium  text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Personal
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  3
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-500 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Shopping
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  2
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-500 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium  text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Health
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  4
                </span>
              </li>
            </div>

            {/* ///// */}
          </aside>
        </div>
        <div className="flex-1 flex flex-col p-5 bg-pink-200 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Today Task</h2>
            <Link to={"/addtask"}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                Add Task
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4">
            {toDos.map((elem) => (
              <TodoCard
                elem={elem}
                key={elem.id}
                setToDos={setToDos}
                title={elem.taskTitle}
                description={elem.taskDescription}
                time={elem.dueDate}
                priority={elem.priority}
                category={elem.category}
              />
            ))}

            {/*<TodoCard
              title="Meeting with Team"
              description="Discuss project updates and next steps."
              time="10:00 AM"
              priority="High"
              category="Work"
            />
            <TodoCard
              title="Meeting with Team"
              description="Discuss project updates and next steps."
              time="10:00 AM"
              priority="High"
              category="Work"
            />
            <TodoCard
              title="Meeting with Team"
              description="Discuss project updates and next steps."
              time="10:00 AM"
              priority="medium"
              category="Work"
            />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
