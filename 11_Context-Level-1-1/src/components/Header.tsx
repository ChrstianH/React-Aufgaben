import { useThemeContext } from "../contexts/themeContext";

export default function Header() {
  const { theme, changeTheme } = useThemeContext();
  return (
    <button type="button" onClick={changeTheme} className={`theme--${theme}`}>
      Switch Theme (current: {theme})
    </button>
  );
}
