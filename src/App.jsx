import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Components from "./pages/Components";
import Settings from "./pages/Settings";
import AgenticIndexCards from "./pages/AgenticIndexCards";
import LoginDashboard from "./pages/LoginDashboard";
import Navigation from "./components/Navigation";

import { FluentThemeProvider } from "./theme/ThemeProvider";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isLoginDashboard = location.pathname === "/login-dashboard";

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {!isLoginDashboard && <Navigation />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/agentic-index-cards" element={<AgenticIndexCards />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login-dashboard" element={<LoginDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <FluentThemeProvider>
      <AppContent />
    </FluentThemeProvider>
  );
}

export default App;
