import { useEffect, useState } from "react";
import "./App.css";
import { Home, CreatePost, Gallery, Contact } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
