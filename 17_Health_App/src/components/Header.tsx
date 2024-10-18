export default function Header() {
  return (
    <header>
      <img
        src="../src/assets/img/logo.png"
        alt="Nutritionist Logo"
        className="logo"
      />
      <div className="nav">
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Process</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>
        <button type="button">Contact Us</button>
      </div>
    </header>
  );
}
