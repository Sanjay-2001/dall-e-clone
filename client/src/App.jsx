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
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} theme={theme} />}
          />
          <Route path="/create-post" element={<CreatePost theme={theme} />} />
          <Route path="/gallery" element={<Gallery theme={theme} />} />
          <Route path="/about" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
