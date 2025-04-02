import React from "react";

export default function AddTask() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        {/* Title Section */}
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
          Add New Task
        </h2>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="form-group">
              <label
                htmlFor="task-title"
                className="block text-gray-700 font-medium mb-1"
              >
                Task Title
              </label>
              <input
                type="text"
                id="task-title"
                placeholder="Enter task title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="task-category"
                className="block text-gray-700 font-medium mb-1"
              >
                Category
              </label>
              <select
                id="task-category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label
                htmlFor="task-due-date"
                className="block text-gray-700 font-medium mb-1"
              >
                Due Date
              </label>
              <input
                type="date"
                id="task-due-date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="task-priority"
                className="block text-gray-700 font-medium mb-1"
              >
                Priority
              </label>
              <select
                id="task-priority"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label
                htmlFor="task-description"
                className="block text-gray-700 font-medium mb-1"
              >
                Task Description
              </label>
              <textarea
                id="task-description"
                placeholder="Enter task description"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-1">
                Subtasks
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a subtask"
                />
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <span className="mr-1">+</span> Add another subtask
                </button>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="task-tags"
                className="block text-gray-700 font-medium mb-1"
              >
                Tags
              </label>
              <input
                type="text"
                id="task-tags"
                placeholder="Add tags (comma separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="col-span-2 flex justify-between mt-6 space-x-4">
            <button
              type="button"
              className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
