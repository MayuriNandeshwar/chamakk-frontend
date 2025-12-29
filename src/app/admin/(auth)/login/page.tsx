"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Cookies from "js-cookie";

// Simple device ID generator (replace with a better implementation if needed)
function getDeviceId(): string {
  let id = localStorage.getItem("deviceId");
  if (!id) {
    id = Math.random().toString(36).substr(2, 16);
    localStorage.setItem("deviceId", id);
  }
  return id;
}

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Simple device ID generator (replace with your actual implementation if needed)
 const [deviceId, setDeviceId] = useState<string | null>(null);

useEffect(() => {
  const id = getDeviceId();
  setDeviceId(id);
}, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const res = await fetch("http://localhost:8080/api/auth/admin/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include", // REQUIRED
  body: JSON.stringify({
    identifier: email,
    password
  }),
});

if (!res.ok) {
  throw new Error("Invalid email or password");
}

// No token reading
const data = await res.json();

login({
  id: data.userId,
  name: data.name,
  email: data.email,
  role: data.role,
});

router.push("/admin/dashboard");



  } catch (err) {
    setError(err instanceof Error ? err.message : "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo/chamakk-logo.png"
            alt="Chamakk"
            width={180}
            height={60}
            priority
          />
        </div>

        <h1 className="text-xl font-semibold text-center text-[#0E6B5C]">
          Admin Sign In
        </h1>
        <p className="text-sm text-center text-gray-500 mt-1 mb-6">
          Secure access to Chamakk admin panel
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#0E6B5C] focus:ring-1 focus:ring-[#0E6B5C] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#0E6B5C] focus:ring-1 focus:ring-[#0E6B5C] outline-none"
            />
          </div>

          <div className="text-right">
            <a
              href="/admin/forgot-password"
              className="text-sm text-[#0E6B5C] hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0E6B5C] py-2.5 text-white font-medium hover:bg-[#0A4F45] transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Chamakk · Admin Panel
        </p>
      </div>
    </div>
  );
}

