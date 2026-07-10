import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-content">
        <section className="hero-card">
          <h1>Welcome to our dummy app</h1>
          <p>This is a simple navbar and footer built with React.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
