"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type Role = "ADMIN" | "SUPER_ADMIN";

type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // ✅ Restore session ONCE (safe)
  useEffect(() => {
    const id = Cookies.get("admin_id");
    const role = Cookies.get("admin_role") as Role | undefined;

    if (!id || !role) return;

    setUser({
      id,
      name: Cookies.get("admin_name") || "",
      email: Cookies.get("admin_email") || "",
      role,
    });
  }, []); // ← intentionally empty

  const login = (userData: User) => {
    setUser(userData);

    // UI-only cookies (NOT sensitive)
    Cookies.set("admin_id", userData.id);
    Cookies.set("admin_name", userData.name);
    Cookies.set("admin_email", userData.email);
    Cookies.set("admin_role", userData.role);
  };

  const logout = async () => {
    setUser(null);

    Cookies.remove("admin_id");
    Cookies.remove("admin_name");
    Cookies.remove("admin_email");
    Cookies.remove("admin_role");

    await fetch("http://localhost:8080/api/auth/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/admin/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
