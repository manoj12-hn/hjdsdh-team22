import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/victim-dashboard.css";

function VictimDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="victim-dashboard">
      {/* Sidebar */}
      <aside className="victim-sidebar">
        <div className="victim-brand">
          <div className="victim-logo">S</div>

          <div>
            <h2>Shakthi</h2>
            <span>Evidence Protection</span>
          </div>
        </div>

        <nav className="victim-nav">
          <Link to="/victim/dashboard" className="victim-nav-item active">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/victim/preserve" className="victim-nav-item">
            <span>＋</span>
            Preserve Evidence
          </Link>

          <Link to="/victim/evidence" className="victim-nav-item">
            <span>▣</span>
            My Evidence
          </Link>

          <Link to="/victim/disclosure" className="victim-nav-item">
            <span>◈</span>
            Disclosure
          </Link>

          <Link to="/victim/security" className="victim-nav-item">
            <span>♢</span>
            Security
          </Link>
        </nav>

        <div className="victim-sidebar-bottom">
          <button onClick={handleLogout} className="logout-button">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="victim-main">
        <header className="victim-header">
          <div>
            <p className="dashboard-label">VICTIM PORTAL</p>
            <h1>Welcome back, {user?.name || "User"}</h1>
            <p className="dashboard-subtitle">
              Your evidence. Your control. Your decision.
            </p>
          </div>

          <div className="profile-box">
            <div className="profile-avatar">
              {(user?.name || "U").charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{user?.name || "User"}</strong>
              <span>{user?.email || "Victim account"}</span>
            </div>
          </div>
        </header>

        {/* Security banner */}
        <section className="security-banner">
          <div className="security-icon">🔐</div>

          <div>
            <h3>Your evidence stays under your control</h3>
            <p>
              Evidence is encrypted before it leaves your device and can be
              preserved without immediately sharing it with an institution.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">▣</div>
            <div>
              <span>Total Evidence</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◷</div>
            <div>
              <span>Pending Disclosure</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div>
              <span>Shared Cases</span>
              <strong>0</strong>
            </div>
          </div>
        </section>

        {/* Main action */}
        <section className="preserve-card">
          <div className="preserve-content">
            <div className="preserve-badge">
              <span>●</span> Secure Evidence Preservation
            </div>

            <h2>Preserve your evidence securely</h2>

            <p>
              Upload a photo or video and protect it using client-side
              encryption. You decide whether to keep it private or disclose
              it later.
            </p>

            <Link to="/victim/preserve" className="preserve-main-button">
              Preserve Evidence
              <span>→</span>
            </Link>
          </div>

          <div className="preserve-visual">
            <div className="shield-circle">
              <div className="shield">♢</div>
            </div>

            <div className="encryption-chip">
              <span>✓</span>
              AES-256 Protected
            </div>
          </div>
        </section>

        {/* Evidence section */}
        <section className="recent-section">
          <div className="section-heading">
            <div>
              <h2>Recent Evidence</h2>
              <p>Your preserved evidence will appear here.</p>
            </div>

            <Link to="/victim/evidence" className="view-all">
              View All →
            </Link>
          </div>

          <div className="empty-evidence">
            <div className="empty-icon">▣</div>

            <h3>No evidence preserved yet</h3>

            <p>
              Start by securely preserving your first piece of evidence.
            </p>

            <Link to="/victim/preserve" className="empty-button">
              Preserve Evidence
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default VictimDashboard;