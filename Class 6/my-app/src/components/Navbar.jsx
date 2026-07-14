function Navbar({ activePage, navItems, onNavigate, onToggleTheme, theme }) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="navbar">
      <button className="brand" type="button" onClick={() => onNavigate("home")}>
        <span className="brand-mark">DB</span>
        <span>DummyBrand</span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            aria-current={activePage === item.id ? "page" : undefined}
            className={activePage === item.id ? "active" : ""}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        aria-label={`Switch to ${nextTheme} theme`}
        className="theme-toggle"
        onClick={onToggleTheme}
        title={`Switch to ${nextTheme} theme`}
        type="button"
      >
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb" />
        </span>
        <span className="theme-label">{theme === "light" ? "Light" : "Dark"}</span>
      </button>
    </header>
  );
}

export default Navbar;
