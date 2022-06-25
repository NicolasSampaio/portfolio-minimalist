import { useState } from "react";
import { DarkModeSwitch } from "../../node_modules/react-toggle-dark-mode/src/index";
import { useDarkSide } from "../hooks/useDarkSide";

export function Switcher() {
  const [colorTheme, setColorTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setColorTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
        {/* <h3>{colorTheme === "light" ? "Dark Mode" : "Light Mode"}</h3> */}
      </div>
    </>
  );
}
