import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";

import SignUp from "./pages/signup.jsx";
import SignIn from "./pages/Signin.jsx";
import AddTask from "./pages/addtask.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/addtask" element={<AddTask />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
