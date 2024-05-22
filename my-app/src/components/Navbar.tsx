// components/Navbar.tsx
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${styles.navbar}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="me-auto mb-2 mb-lg-0">
            <div className={styles.navbarNav}>
              <Button label="Home" href="/" />
              <Button label="About" href="/about" />
              <Button label="Stack" href="/stack" />
              <Button label="Porfolio" href="/portfolio" />
              <Button label="Contact" href="/contact" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
