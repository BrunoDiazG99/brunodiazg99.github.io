import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="navbar-wrapper">
          <nav className="nav-title">
            <Link href="/">{`Bruno Diaz's portfolio`}</Link>
          </nav>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-list">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-list">
                <Link href="/#Projects">Projects</Link>
              </li>
              <li className="nav-list">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
