import ReactDOM from "react-dom";

const Modal = ({ taskId, confirmDelete, cancelDelete, title }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={cancelDelete} // Close the modal when clicking the background
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-1/3"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4">Delete Task?</h2>
        <p>Are you sure you want to delete the task titled "{title}"?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            onClick={cancelDelete}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body // Render the modal into the body of the document
  );
};

export default Modal;
