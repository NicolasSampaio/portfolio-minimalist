import { useEffect, useState } from "react";

export function useDarkSide(changeContactLogoColor: (color: string) => void) {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    changeContactLogoColor(colorTheme);
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
