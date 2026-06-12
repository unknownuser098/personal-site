import './globals.css';

export const metadata = {
  title: 'Rabin Aryal | Portfolio',
  description: 'Personal portfolio website of Rabin Aryal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <div className="nav-container">
              <h1>Rabin Aryal</h1>
              <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2026 Rabin Aryal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
