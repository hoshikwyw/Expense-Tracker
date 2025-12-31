import { useEffect, useState } from "react";
import { me } from "../../api/authApi";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    me().then(setData).catch(() => setData(null));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Later: totals + recent transactions.</p>

      <pre style={{ background: "#111", color: "#0f0", padding: 12 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
