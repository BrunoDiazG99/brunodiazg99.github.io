import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="navbar-wrapper">
          <nav className="nav-title">
            <Link href="/">{`Haruchon's portfolio`}</Link>
          </nav>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-list">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-list">
                <Link href="/projects">Projects</Link>
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
