import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/app/Dashboard";
import Categories from "../pages/app/Categories";
import Transactions from "../pages/app/Transactions";
import AppLayout from "../layout/AppLayout";
import ProtectedRoute from "../auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
