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

export default function Navbar() {
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
    </div>
  );
}
