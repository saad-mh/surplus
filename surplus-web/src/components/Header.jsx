import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-buttons">
          <li>
            <button href="#our-vision">Our Vision</button>
          </li>
          <li>
            <button href="#get-involved">Get Involved</button>
          </li>
          <li>
            <button href="#contact-us">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 