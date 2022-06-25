import { useEffect, useState } from "react";
import { DarkModeSwitch } from "../../node_modules/react-toggle-dark-mode/src/index";
import { useDarkSide } from "../hooks/useDarkSide";

interface SwitcherProps {
  onHandleChangeContactLogoColor: (color: string) => void;
}

export function Switcher({ onHandleChangeContactLogoColor }: SwitcherProps) {
  const [colorTheme, setColorTheme] = useDarkSide(
    onHandleChangeContactLogoColor
  );
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setColorTheme(colorTheme);
    setDarkSide(checked);
  };

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={isMobile ? 28 : 56}
        />
        {/* <h3>{colorTheme === "light" ? "Dark Mode" : "Light Mode"}</h3> */}
      </div>
    </>
  );
}
