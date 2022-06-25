import { useEffect, useState } from "react";

interface useDarkSideProps {
  onSetIconsColor?: (color: string) => void;
}

export function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    console.log("useDarkSide theme", theme);
    console.log("useDarkSide colorTheme", colorTheme);

    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
