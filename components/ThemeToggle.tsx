import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const setThemeColorMeta = (color: string) => {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", color);
  }
};

const setDark = () => {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
  setThemeColorMeta("#111827");
};
const setLight = () => {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
  setThemeColorMeta("#f3f4f6");
};

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    globalThis?.localStorage?.theme !== "light"
  );

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      aria-label="dark mode toggle"
      role="switch"
      aria-checked={isDark}
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-2 mr-1 hover:transition-none cursor-pointer"
      onClick={() => {
        isDark ? setLight() : setDark();
        setIsDark(!isDark);
      }}
    >
      {isDark ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </button>
  );
}
