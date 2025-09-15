import logo from "./logo.svg";
import "./App.css";
import heroImg from "./img/heroimg.png";

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <Header />
      <FeatureHighlights />
      <CallToAction />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }} // React will resolve the path
    >
      <div className="hero-content">
        <h1 className="main-header">DearResident</h1>
        <h2 className="hero-subtitle">Connecting Families, Enhancing Care</h2>
        <button>Learn More</button>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function FeatureHighlights() {
  return (
    <section className="features">
      <h3>Our Features</h3>
      <div className="feature-cards">{/* Map through features */}</div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta">
      <p>Ready to get started?</p>
      <button>Sign Up</button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Contact Us | Privacy Policy | Terms of Service</p>
    </footer>
  );
}

export default App;
