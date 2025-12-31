import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        style={{ width: "100%", padding: 8, margin: "6px 0 12px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        style={{ width: "100%", padding: 8, margin: "6px 0 12px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <button
        style={{ width: "100%", padding: 10 }}
        disabled={loading}
        onClick={async () => {
          setError(null);
          setLoading(true);
          try {
            await login(email, password);
            nav("/app/dashboard");
          } catch (e: any) {
            setError(e?.response?.data?.message ?? "Login failed");
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p style={{ marginTop: 12 }}>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
