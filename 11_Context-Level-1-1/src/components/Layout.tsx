import Header from "./Header";
import Main from "./Main";
import { useThemeContext } from "../contexts/themeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({}: LayoutProps) {
  const { theme } = useThemeContext();
  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Main />
    </div>
  );
}
