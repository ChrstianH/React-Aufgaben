import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <header>
        <img src="../src/assets/img/Logo.png" alt="Woodies Logo" />
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/products">
            Products
          </NavLink>
        </nav>
      </header>
      {props.children}
      <footer></footer>
    </div>
  );
}
