import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateTask = ({ setToDos, toDos }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state || {};

  const [taskTitle, setTaskTitle] = useState(task?.taskTitle || "");
  const [category, setCategory] = useState(task?.category || "Work");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [priority, setPriority] = useState(task?.priority || "Low");
  const [taskDescription, setTaskDescription] = useState(
    task?.taskDescription || ""
  );
  const [subtasks, setSubTasks] = useState(task?.subtasks || []);
  const [tags, setTags] = useState(task?.tags?.join(", ") || "");

  const [subtaskInput, setSubtaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      taskTitle,
      category,
      dueDate,
      priority,
      taskDescription,
      subtasks,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    // Update the state with the updated task
    setToDos((prevToDos) =>
      prevToDos.map((todo) => (todo.id === task.id ? updatedTask : todo))
    );

    // Save the updated tasks to localStorage
    localStorage.setItem(
      "tasks", // key
      JSON.stringify(
        toDos.map((todo) => (todo.id === task.id ? updatedTask : todo))
      ) // value
    );

    // Redirect the user after submitting
    navigate("/");
  };

  const handleAddSubtask = () => {
    if (subtaskInput.trim() === "") return;
    if (editIndex !== null) {
      const updated = [...subtasks];
      updated[editIndex] = subtaskInput.trim();
      setSubTasks(updated);
      setEditIndex(null);
    } else {
      setSubTasks([...subtasks, subtaskInput.trim()]);
    }
    setSubtaskInput("");
  };

  const handleDeleteSubtask = (index) => {
    setSubTasks(subtasks.filter((_, i) => i !== index));
  };

  const handleEditSubtask = (index) => {
    setSubtaskInput(subtasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
          Update Task
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
                placeholder="Enter task title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
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

            <div>
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

            <div>
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
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Task Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                rows="4"
                placeholder="Enter task description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subtasks
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={subtaskInput}
                  onChange={(e) => setSubtaskInput(e.target.value)}
                  placeholder="Enter subtask"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
              <ul className="mt-3 space-y-2">
                {subtasks.map((subtask, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
                  >
                    <span className="text-gray-700">{subtask}</span>
                    <div className="space-x-2 text-sm">
                      <button
                        type="button"
                        onClick={() => handleEditSubtask(index)}
                        className="text-blue-500 hover:text-blue-700"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSubtask(index)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
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
              onClick={() => navigate("/")}
              className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
