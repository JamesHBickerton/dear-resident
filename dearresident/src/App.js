import "./App.css";
import heroImg from "./img/heroimg.jpg";
import logoImg from "./img/drLogo.png";
import { IonIcon } from "@ionic/react";
import {
  personCircleOutline,
  chatbubbleEllipsesOutline,
  fitnessOutline,
  calendarOutline,
} from "ionicons/icons";

import step1Img from "./img/step1-bg.png";
import step1Illustration from "./img/step1-illustration.png";
import step2Img from "./img/step2-bg.png";
import step2Illustration from "./img/step2-illustration.png";
import step3Img from "./img/step3-bg.png";
import step3Illustration from "./img/step3-illustration.png";
import arrowImg from "./img/arrow.png";
import notificationImg from "./img/notification.png";

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <Header />
      <FeatureHighlights />
      <HowItWorks />
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
        <a href="#sign-up" className="nav-btn">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

function FeatureHighlights() {
  const features = [
    {
      title: "Resident Profiles",
      description: "View resident care notes and receive daily updates.",
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

  const iconMap = {
    "Resident Profiles": personCircleOutline,
    "Family Logs": chatbubbleEllipsesOutline,
    "Mobility Tracker": fitnessOutline,
    "Visit Scheduler": calendarOutline,
  };

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
            <IonIcon icon={iconMap[feature.title]} className="feature-icon" />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      id: 1,
      bg: step1Img,
      illustration: step1Illustration,
      illustrationClass: "illustration-step1",
      arrowClass: "arrow-step1",
    },
    {
      id: 2,
      bg: step2Img,
      illustration: step2Illustration,
      illustrationClass: "illustration-step2",
      arrowClass: "arrow-step2",
    },
    {
      id: 3,
      bg: step3Img,
      illustration: step3Illustration,
      illustrationClass: "illustration-step3",
    },
  ];

  return (
    <section className="how-it-works">
      {steps.map((step) => (
        <div
          key={step.id}
          className="how-step"
          style={{ backgroundImage: `url(${step.bg})` }}
        >
          {step.arrowClass && (
            <img
              src={arrowImg}
              alt={`Arrow for step ${step.id}`}
              className={step.arrowClass}
            />
          )}
          <img
            src={step.illustration}
            alt={`Step ${step.id} Illustration`}
            className={step.illustrationClass}
          />
          {step.id === 3 && (
            <>
              <div className="notification-circle"></div>
              <img
                src={notificationImg}
                alt="App notification example"
                className="notification-popup"
              />
            </>
          )}
        </div>
      ))}
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
