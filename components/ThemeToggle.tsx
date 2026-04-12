"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

    return (
        <button
            
            onClick={() => {
                console.log("Current theme:", theme);
                setTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            Toggle Theme
        </button>
    );
}