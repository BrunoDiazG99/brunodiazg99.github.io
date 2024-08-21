import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footbar-wrapper">
          <nav className="footbar-title">
            <Link href="/">{`by Haruchon`}</Link>
          </nav>

          {/* TODO: Maybe add socials? */}
        </div>
      </div>
    </footer>
  );
}
