import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/beers">All Beers</NavLink>{" "}
          <NavLink to="/beers/random">Random Beer</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}
