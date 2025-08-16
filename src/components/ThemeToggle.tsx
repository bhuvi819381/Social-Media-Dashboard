import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-between border-t py-3 md:items-center md:justify-center md:space-x-3 md:border-t-0 md:text-sm">
      <span className="">
        {theme === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          type="checkbox"
          className="peer sr-only"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <div className="peer h-6 w-11 rounded-full bg-[var(--color-toggle)] after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] dark:bg-linear-[var(--color-toggle)] dark:after:translate-x-5"></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
