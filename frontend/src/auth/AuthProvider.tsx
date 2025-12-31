import React, { createContext, useContext, useMemo, useState } from "react";
import { authStorage } from "./authStorage";
import * as authApi from "../api/authApi";

type AuthContextValue = {
  token: string | null;
  isAuthed: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(authStorage.getToken());

  const value = useMemo<AuthContextValue>(() => {
    return {
      token,
      isAuthed: !!token,

      login: async (email, password) => {
        const res = await authApi.login({ email, password });
        const jwt = res.data.token;
        authStorage.setToken(jwt);
        setToken(jwt);
      },

      register: async (email, username, password) => {
        await authApi.register({ email, username, password });
        // after register, auto-login (optional)
        const res = await authApi.login({ email, password });
        const jwt = res.data.token;
        authStorage.setToken(jwt);
        setToken(jwt);
      },

      logout: () => {
        authStorage.clearToken();
        setToken(null);
      },
    };
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
