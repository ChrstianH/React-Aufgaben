import { createContext, useContext, useState } from "react";

interface ThemeContext {
  theme: "light" | "blue" | "dark";
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>(null!);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<"light" | "blue" | "dark">("light");

  const changeTheme = () => {
    switch (theme) {
      case "light":
        setTheme("blue");
        break;
      case "blue":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
