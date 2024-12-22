import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Document from "./pages/Document";
import ComposeMessage from "./pages/ComposeMessage";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/signup" element={<SignUp />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/forgetpassword" element={<ForgetPassword />} />
        <Route path="/pages/error" element={<Error />} />
        <Route path="/pages/dashboard" element={<Dashboard />} />
        <Route path="/pages/document" element={<Document />} />
        <Route path="/pages/composemessage" element={<ComposeMessage />} />
        <Route path="/pages/trash" element={<Trash />} />
        <Route path="/pages/settings" element={<Settings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
