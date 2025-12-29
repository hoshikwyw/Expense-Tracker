import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function AppLayout() {
  const { logout } = useAuth();
  const loc = useLocation();

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      style={{
        marginRight: 12,
        fontWeight: loc.pathname.includes(to) ? "bold" : "normal",
      }}
    >
      {label}
    </Link>
  );

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <NavLink to="/app/dashboard" label="Dashboard" />
          <NavLink to="/app/categories" label="Categories" />
          <NavLink to="/app/transactions" label="Transactions" />
        </div>
        <button onClick={logout}>Logout</button>
      </header>

      <hr style={{ margin: "16px 0" }} />
      <main><Outlet /></main>
    </div>
  );
}
