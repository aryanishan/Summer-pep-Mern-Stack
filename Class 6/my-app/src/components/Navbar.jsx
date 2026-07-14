function Navbar({ activePage, navItems, onNavigate, onToggleTheme, theme }) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <aside className="dashboard-sidebar">
      <button className="brand-block" type="button" onClick={() => onNavigate("dashboard")}>
        <span className="brand-logo">D</span>
        <span>
          <strong>DashBoard</strong>
          <small>Class Manager</small>
        </span>
      </button>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <button
            aria-current={activePage === item.id ? "page" : undefined}
            className={activePage === item.id ? "active" : ""}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            <span>{item.shortLabel}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          aria-label={`Switch to ${nextTheme} theme`}
          className="theme-toggle"
          onClick={onToggleTheme}
          type="button"
        >
          <span className="toggle-track" aria-hidden="true">
            <span className="toggle-thumb" />
          </span>
          <span>{theme === "light" ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>
    </aside>
  );
}

export default Navbar;
