import { useEffect, useState } from "react";
import "./App.css";
import heroImage from "./assets/hero.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const pages = {
  home: {
    eyebrow: "React practice website",
    title: "Build cleaner pages with reusable components.",
    description:
      "A redesigned dummy app with navigation pages, a theme toggle, and a polished responsive layout.",
    primary: "Explore services",
    secondary: "See projects",
    featureTitle: "Today's focus",
    features: ["Component design", "Theme state", "Responsive layout"],
    stats: [
      { value: "5", label: "Pages" },
      { value: "2", label: "Themes" },
      { value: "100%", label: "React" },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "A small team page for a modern React learning app.",
    description:
      "This page explains the purpose of the app and shows how one layout can display different content from navigation.",
    primary: "View projects",
    secondary: "Contact us",
    featureTitle: "What we care about",
    features: ["Clean structure", "Readable CSS", "Beginner friendly code"],
    stats: [
      { value: "3", label: "Core sections" },
      { value: "0", label: "Extra libraries" },
      { value: "Fast", label: "Vite powered" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Simple sections for learning real website patterns.",
    description:
      "Use this page as a base for cards, service lists, feature sections, and call-to-action areas.",
    primary: "Start a project",
    secondary: "Learn more",
    featureTitle: "Services included",
    features: ["Website layout", "Navigation design", "Dark mode setup"],
    stats: [
      { value: "UI", label: "Design" },
      { value: "UX", label: "Flow" },
      { value: "CSS", label: "Styling" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "A showcase page ready for future class assignments.",
    description:
      "The projects page gives you a place to add cards for apps, practice tasks, and portfolio work.",
    primary: "Add project",
    secondary: "Go home",
    featureTitle: "Project ideas",
    features: ["Weather app", "Todo dashboard", "Product landing page"],
    stats: [
      { value: "12", label: "Ideas" },
      { value: "4", label: "Layouts" },
      { value: "1", label: "Reusable shell" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "A contact page that feels connected to the rest of the app.",
    description:
      "This section can later become a form, address block, or support page without changing the navigation logic.",
    primary: "Send message",
    secondary: "Back to home",
    featureTitle: "Contact options",
    features: ["Email support", "Class updates", "Project feedback"],
    stats: [
      { value: "24h", label: "Reply goal" },
      { value: "3", label: "Channels" },
      { value: "Easy", label: "Next step" },
    ],
  },
};

function getInitialTheme() {
  const savedTheme = localStorage.getItem("dummy-app-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);
  const page = pages[activePage];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dummy-app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const goToPrimaryPage = () => {
    if (activePage === "home") {
      setActivePage("services");
      return;
    }

    if (activePage === "contact") {
      setActivePage("home");
      return;
    }

    setActivePage("projects");
  };

  const goToSecondaryPage = () => {
    if (activePage === "projects" || activePage === "contact") {
      setActivePage("home");
      return;
    }

    setActivePage("contact");
  };

  return (
    <div className="app-shell">
      <Navbar
        activePage={activePage}
        navItems={navItems}
        onNavigate={setActivePage}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="main-content">
        <section className="hero-section" aria-labelledby="page-title">
          <div className="hero-copy">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1 id="page-title">{page.title}</h1>
            <p>{page.description}</p>

            <div className="hero-actions">
              <button className="primary-action" type="button" onClick={goToPrimaryPage}>
                {page.primary}
              </button>
              <button className="secondary-action" type="button" onClick={goToSecondaryPage}>
                {page.secondary}
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src={heroImage} alt="" />
          </div>
        </section>

        <section className="content-grid" aria-label={`${page.eyebrow} details`}>
          <article className="feature-panel">
            <span className="panel-label">Overview</span>
            <h2>{page.featureTitle}</h2>
            <ul>
              {page.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <div className="stats-panel">
            {page.stats.map((stat) => (
              <article className="stat-card" key={`${stat.value}-${stat.label}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
