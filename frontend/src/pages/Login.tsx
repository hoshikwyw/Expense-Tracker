import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const { loginWithFakeToken } = useAuth();
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Login</h2>

      <label>Email</label>
      <input style={{ width: "100%", padding: 8, margin: "6px 0 12px" }} />

      <label>Password</label>
      <input style={{ width: "100%", padding: 8, margin: "6px 0 12px" }} type="password" />

      <button
        style={{ width: "100%", padding: 10 }}
        onClick={() => {
          loginWithFakeToken();
          nav("/app/dashboard");
        }}
      >
        Login (UI only)
      </button>

      <p style={{ marginTop: 12 }}>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
