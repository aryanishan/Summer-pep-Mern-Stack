import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const themeKey = "class-six-dashboard-theme";

const navItems = [
  { id: "dashboard", label: "Dashboard", shortLabel: "DB" },
  { id: "analytics", label: "Analytics", shortLabel: "AN" },
  { id: "students", label: "Students", shortLabel: "ST" },
  { id: "projects", label: "Projects", shortLabel: "PR" },
  { id: "messages", label: "Messages", shortLabel: "MS" },
  { id: "settings", label: "Settings", shortLabel: "SE" },
];

const pages = {
  dashboard: {
    kicker: "Class 6 dashboard",
    title: "Learning overview",
    subtitle: "Track students, lessons, tasks, and MERN stack project progress from one place.",
    spotlightTitle: "Summer MERN sprint",
    spotlightText: "React components, state practice, forms, and styling tasks are moving together.",
    progress: 78,
    chartLabel: "Weekly completion",
    metrics: [
      { label: "Students", value: "128", change: "+12%" },
      { label: "Assignments", value: "36", change: "+8" },
      { label: "Attendance", value: "94%", change: "+4%" },
      { label: "Open tasks", value: "18", change: "-6" },
    ],
    bars: [42, 58, 64, 76, 70, 88, 82],
  },
  analytics: {
    kicker: "Analytics",
    title: "Performance report",
    subtitle: "Review completion rates, activity, and class momentum across the current week.",
    spotlightTitle: "Strongest growth",
    spotlightText: "CSS layout confidence is improving fastest after the dashboard redesign practice.",
    progress: 86,
    chartLabel: "Skill growth",
    metrics: [
      { label: "Avg score", value: "87%", change: "+6%" },
      { label: "Submissions", value: "214", change: "+31" },
      { label: "Practice hrs", value: "52", change: "+9" },
      { label: "Review queue", value: "11", change: "-4" },
    ],
    bars: [50, 62, 72, 68, 82, 91, 86],
  },
  students: {
    kicker: "Students",
    title: "Student workspace",
    subtitle: "Manage learners, attendance notes, support needs, and recent classroom activity.",
    spotlightTitle: "Support priority",
    spotlightText: "A small group needs extra help with props, conditional rendering, and form state.",
    progress: 69,
    chartLabel: "Attendance trend",
    metrics: [
      { label: "Active", value: "118", change: "+5" },
      { label: "Need help", value: "14", change: "-3" },
      { label: "Present today", value: "109", change: "92%" },
      { label: "New joins", value: "7", change: "+2" },
    ],
    bars: [74, 80, 76, 88, 84, 92, 90],
  },
  projects: {
    kicker: "Projects",
    title: "Project tracker",
    subtitle: "Follow dashboard builds, React mini apps, styling work, and portfolio submissions.",
    spotlightTitle: "Next milestone",
    spotlightText: "Students are converting starter pages into custom dashboards with plain CSS.",
    progress: 64,
    chartLabel: "Project progress",
    metrics: [
      { label: "Live projects", value: "24", change: "+6" },
      { label: "Completed", value: "17", change: "+5" },
      { label: "Blocked", value: "4", change: "-2" },
      { label: "Reviews", value: "29", change: "+10" },
    ],
    bars: [36, 44, 52, 61, 67, 72, 76],
  },
  messages: {
    kicker: "Messages",
    title: "Class updates",
    subtitle: "View announcements, feedback notes, pending replies, and project discussion items.",
    spotlightTitle: "Latest announcement",
    spotlightText: "Dashboard submissions should use reusable React components and normal CSS files.",
    progress: 73,
    chartLabel: "Reply activity",
    metrics: [
      { label: "Inbox", value: "42", change: "+12" },
      { label: "Unread", value: "9", change: "-5" },
      { label: "Feedback", value: "31", change: "+8" },
      { label: "Resolved", value: "58", change: "+16" },
    ],
    bars: [48, 52, 66, 62, 78, 84, 73],
  },
  settings: {
    kicker: "Settings",
    title: "Dashboard settings",
    subtitle: "Adjust the dashboard view, theme preference, notification style, and account details.",
    spotlightTitle: "Interface preference",
    spotlightText: "Theme mode is saved locally, so the dashboard keeps the selected look after refresh.",
    progress: 92,
    chartLabel: "Setup status",
    metrics: [
      { label: "Profile", value: "100%", change: "Done" },
      { label: "Theme", value: "2", change: "Modes" },
      { label: "Alerts", value: "12", change: "Active" },
      { label: "Access", value: "Admin", change: "Owner" },
    ],
    bars: [70, 75, 84, 88, 91, 94, 92],
  },
};

const tasks = [
  { title: "Review React component homework", meta: "Today", done: false },
  { title: "Publish CSS dashboard checklist", meta: "Tomorrow", done: false },
  { title: "Check navigation page states", meta: "Done", done: true },
  { title: "Prepare props practice examples", meta: "Friday", done: false },
];

const activity = [
  { name: "Aarav", text: "submitted the dashboard layout", time: "10 min ago" },
  { name: "Diya", text: "updated project cards", time: "32 min ago" },
  { name: "Kabir", text: "asked about theme state", time: "1 hr ago" },
  { name: "Mira", text: "completed CSS fixes", time: "2 hrs ago" },
];

const projects = [
  { name: "Admin dashboard", owner: "Batch A", status: "In review", progress: 82 },
  { name: "Todo manager", owner: "Batch B", status: "Building", progress: 58 },
  { name: "Portfolio page", owner: "Batch C", status: "Ready", progress: 96 },
];

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [theme, setTheme] = useState(getInitialTheme);
  const page = pages[activePage];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="dashboard-app">
      <Navbar
        activePage={activePage}
        navItems={navItems}
        onNavigate={setActivePage}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="section-kicker">{page.kicker}</span>
            <h1>{page.title}</h1>
            <p>{page.subtitle}</p>
          </div>

          <div className="user-card" aria-label="Current class">
            <span className="user-avatar">M</span>
            <div>
              <strong>MERN Stack</strong>
              <span>Class 6</span>
            </div>
          </div>
        </header>

        <section className="metrics-grid" aria-label="Dashboard metrics">
          {page.metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.change}</small>
            </article>
          ))}
        </section>

        <section className="dashboard-grid" aria-label="Dashboard details">
          <article className="panel spotlight-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">Focus</span>
                <h2>{page.spotlightTitle}</h2>
              </div>
              <strong>{page.progress}%</strong>
            </div>
            <p>{page.spotlightText}</p>
            <div className="progress-track" aria-label={`${page.progress}% complete`}>
              <span style={{ width: `${page.progress}%` }} />
            </div>
          </article>

          <article className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">Chart</span>
                <h2>{page.chartLabel}</h2>
              </div>
            </div>
            <div className="bar-chart">
              {page.bars.map((height, index) => (
                <span
                  aria-label={`Day ${index + 1}: ${height}%`}
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </article>

          <article className="panel task-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">Tasks</span>
                <h2>Today</h2>
              </div>
            </div>
            <ul className="task-list">
              {tasks.map((task) => (
                <li className={task.done ? "complete" : ""} key={task.title}>
                  <span className="task-check" />
                  <div>
                    <strong>{task.title}</strong>
                    <small>{task.meta}</small>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel activity-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">Activity</span>
                <h2>Recent</h2>
              </div>
            </div>
            <ul className="activity-list">
              {activity.map((item) => (
                <li key={`${item.name}-${item.time}`}>
                  <span>{item.name.charAt(0)}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.text}</p>
                    <small>{item.time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel project-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">Projects</span>
                <h2>Class work</h2>
              </div>
              <button className="small-action" type="button">
                View all
              </button>
            </div>
            <div className="project-table">
              {projects.map((project) => (
                <div className="project-row" key={project.name}>
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.owner}</span>
                  </div>
                  <span className="status-pill">{project.status}</span>
                  <div className="mini-progress">
                    <span style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
