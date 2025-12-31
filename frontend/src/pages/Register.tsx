import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [username, setUsername] = useState("test");
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Register</h2>

      <label>Username</label>
      <input
        style={{ width: "100%", padding: 8, margin: "6px 0 12px" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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
            await register(email, username, password);
            nav("/app/dashboard");
          } catch (e: any) {
            setError(e?.response?.data?.message ?? "Register failed");
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? "Creating..." : "Create account"}
      </button>

      <p style={{ marginTop: 12 }}>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
