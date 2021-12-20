import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Brightness4Icon /> : <Brightness5Icon />}
    </div>
  );
};
