import React, { createContext, useContext, useMemo, useState } from "react";
import { authStorage } from "./authStorage";

type AuthContextValue = {
  token: string | null;
  isAuthed: boolean;
  loginWithFakeToken: () => void; // step1 only
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(authStorage.getToken());

  const value = useMemo<AuthContextValue>(() => {
    return {
      token,
      isAuthed: !!token,
      loginWithFakeToken: () => {
        const fake = "FAKE_TOKEN_UI_ONLY";
        authStorage.setToken(fake);
        setToken(fake);
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
