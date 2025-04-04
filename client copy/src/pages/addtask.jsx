import React, { useState } from "react";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtasks, setSubTasks] = useState([]);
  const [subtaskInput, setSubtaskInput] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      taskTitle,
      category,
      dueDate,
      priority,
      taskDescription,
      subtasks,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert to array
    };

    console.log(newTask);
    setTaskTitle("");
    setCategory("");
    setDueDate("");
    setPriority("");
    setTaskDescription("");
    setSubTasks([]);
    setTags("");
  }

  function handleAddSubtask() {
    if (subtaskInput.trim()) {
      setSubTasks([...subtasks, subtaskInput.trim()]);
      setSubtaskInput(""); // Clear input field after adding
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
          Add New Task
        </h2>

        {/* Only one <form> wrapper */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Task Description
              </label>
              <textarea
                placeholder="Enter task description"
                rows="4"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Subtasks
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={subtaskInput}
                  onChange={(e) => setSubtaskInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a subtask"
                />
                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <span className="mr-1">+</span> Add another subtask
                </button>
              </div>
              {/* Displaying subtasks */}
              <ul className="mt-2 space-y-1">
                {subtasks.map((subtask, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    - {subtask}
                  </li>
                ))}
              </ul>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Tags
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Add tags (comma separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="col-span-2 flex justify-between mt-6 space-x-4">
            <button
              type="button"
              className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
