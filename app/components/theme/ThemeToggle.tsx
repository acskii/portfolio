import { useTheme } from "next-themes";

import { Sun, Moon } from "@deemlol/next-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md cursor-pointer border-2 border-yellow-500 dark:border-blue-600 bg-yellow-400 dark:bg-slate-900 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="text-white" size={20} />
      ) : (
        <Moon className="text-white" size={20} />
      )}
    </button>
  );
}