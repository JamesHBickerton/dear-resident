import logo from "./logo.svg";
import "./App.css";
import heroImg from "./img/heroimg.jpg";
import logoImg from "./img/drLogo.png";

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
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-content">
        <div className="hero-branding">
          <img src={logoImg} alt="DearResident-Logo" className="hero-logo" />
          <h1 className="main-header">DearResident</h1>
          <h2 className="hero-subtitle">
            Connecting Families, Supporting Care
          </h2>
        </div>
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
  const features = [
    {
      title: "Resident Profiles",
      description: "View care notes and receive daily updates.",
    },
    {
      title: "Family Logs",
      description: "Leave messages and notes for your loved ones.",
    },
    {
      title: "Mobility Tracker",
      description: "Track physical activity and mobility progress.",
    },
    {
      title: "Visit Scheduler",
      description: "Schedule and receive reminders for family visits.",
    },
  ];

  return (
    <section className="features">
      <h3 className="features-header">Our Features</h3>
      <p>
        <span>DearResident</span> makes it easier to connect with your loved
        ones, supporting their activity and well-being, and helping you stay
        close and involved, even from a distance.
      </p>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
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
