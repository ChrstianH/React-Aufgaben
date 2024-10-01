import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <header>
        <h3>My Blog</h3>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </header>
      {props.children}
      <footer></footer>
    </div>
  );
}
