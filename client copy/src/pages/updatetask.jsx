import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateTask = ({ setToDos }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state || {}; // Access the task passed from the navigate state

  // Initialize form fields with the passed task data
  const [taskTitle, setTaskTitle] = useState(task?.taskTitle || "");
  const [category, setCategory] = useState(task?.category || "Work");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [priority, setPriority] = useState(task?.priority || "Low");
  const [taskDescription, setTaskDescription] = useState(
    task?.taskDescription || ""
  );
  const [subtasks, setSubTasks] = useState(task?.subtasks || []);
  const [tags, setTags] = useState(task?.tags?.join(", ") || "");

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
      tags: tags.split(",").map((tag) => tag.trim()), // Convert tags to array
    };

    // Update the task in the toDos array
    setToDos((prevToDos) =>
      prevToDos.map((todo) => (todo.id === task.id ? updatedTask : todo))
    );

    // Redirect to home page after update
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
                  value={subtasks.join(", ")} // Display subtasks as comma-separated
                  onChange={(e) => setSubTasks(e.target.value.split(", "))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subtasks"
                />
              </div>
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
              onClick={() => navigate("/")} // Cancel button redirects to home
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
