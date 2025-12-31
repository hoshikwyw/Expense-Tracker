import { api } from "./client";

export type RegisterPayload = {
  email: string;
  username: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export async function register(payload: RegisterPayload) {
  const res = await api.post("/api/auth/register", payload);
  return res.data; // { success, message, data }
}

export async function login(payload: LoginPayload) {
  const res = await api.post("/api/auth/login", payload);
  return res.data as {
    success: boolean;
    message: string;
    data: { token: string };
  };
}

export async function me() {
  const res = await api.get("/api/me");
  return res.data;
}
