import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const ToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return [theme, ToggleTheme];
};
