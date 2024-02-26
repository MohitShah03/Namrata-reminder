import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter instead of BrowserRouter as Router
import Navbar from "./components/Navbar";
import Signup from "./components/accounts/Register/Signup";
import Login from "./components/accounts/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Use BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
