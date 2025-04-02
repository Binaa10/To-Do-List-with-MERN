import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.5-4m-11 4H3l1.5-4m9 4a6 6 0 1 0-12 0m12 0H3m15 0h3m-9 4a3 3 0 0 0 6 0m-6 0H9"
    />
  </svg>
);

const LogOutIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H3m12-6l6 6m-6 6l6-6"
    />
  </svg>
);

const tasks = Array(4).fill({
  title: "Task Title",
  description: "Task description",
  category: "Category",
  priority: "Priority",
  dueDate: "March 25, 2025",
  subtasks: ["Subtask", "Subtask", "Subtask"],
});

export default function TodoDashboard() {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <div className="p-4">
        <div className="bg-blue-600 text-white shadow-md p-5 rounded-md flex justify-between items-center">
          <h1 className="text-xl text-slate-100 font-bold">🎰 To do List</h1>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-md w-full pl-10 text-black"
            />
            <div className="absolute left-3 top-3">
              <SearchIcon />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoIosNotifications className="size-6 self-center" />
            <button className="bg-red-500 text-white px-4 py-2 flex items-center rounded-md hover:bg-red-600">
              <LogOutIcon />
              <Link to={"/signin"}>
                <span className="ml-2">Sign Out</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
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
              <li className="flex justify-between items-center group hover:bg-gray-50 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium  text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Work
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  5
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-50 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium  text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Personal
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  3
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-50 px-2 py-1.5 rounded transition-colors">
                <span className="text-sm font-medium text-slate-100 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Shopping
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                  2
                </span>
              </li>
              <li className="flex justify-between items-center group hover:bg-gray-50 px-2 py-1.5 rounded transition-colors">
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
        <div className="flex-1 flex flex-col p-5 bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Today Task</h2>
            <Link to={"/addtask"}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                Add Task
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="shadow-md p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-500">{task.description}</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    {task.category}
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Due Date: {task.dueDate}
                </p>
                <p className="text-sm font-medium mt-2">Subtasks:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {task.subtasks.map((sub, i) => (
                    <li key={i} className="inline-block mr-2">
                      • {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
