import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    //TODO:check this drop shadow
    <div className="relative">
      <img
        src="/website/light-mode-button.png"
        alt="Light Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="\website\dark-mode-button.png"
        alt="Dark Mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
