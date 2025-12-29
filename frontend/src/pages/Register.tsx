import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Register() {
  const { loginWithFakeToken } = useAuth();
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Register</h2>

      <label>Username</label>
      <input style={{ width: "100%", padding: 8, margin: "6px 0 12px" }} />

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
        Create account (UI only)
      </button>

      <p style={{ marginTop: 12 }}>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
