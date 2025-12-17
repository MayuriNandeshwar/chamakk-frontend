"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  accessToken: string | null;
  login: (token: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null
  );

  const login = (token: string, refreshToken: string) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", refreshToken);
    setAccessToken(token);
  };

  const logout = () => {
    localStorage.clear();
    setAccessToken(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
