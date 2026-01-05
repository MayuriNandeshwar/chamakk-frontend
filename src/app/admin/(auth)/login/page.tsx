"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import api from "@/lib/api/axios";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.post("/api/auth/admin/login", {
        identifier: email,
        password,
      });

      // ✅ Cookie is set by backend
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-[#FBF1D6] via-[#F7E9C3] to-[#F3E0B5] 
                    px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo/chamakk-logo.png"
            alt="CHAMAKK"
            width={180}
            height={60}
            priority
          />
        </div>

        <h1 className="text-xl font-semibold text-center text-[#0E6B5C]">
          Admin Sign In
        </h1>
        <p className="text-sm text-center text-gray-500 mt-1 mb-6">
          Secure access to CHAMAKK admin panel
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2
                         focus:border-[#0E6B5C] focus:ring-1 focus:ring-[#0E6B5C]
                         outline-none"
            />
          </div>

          {/* Password with Eye Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10
                           focus:border-[#0E6B5C] focus:ring-1 focus:ring-[#0E6B5C]
                           outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center 
                           text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
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
            className="w-full rounded-lg bg-[#0E6B5C] py-2.5 text-white 
                       font-medium hover:bg-[#0A4F45] transition 
                       disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} CHAMAKK · Admin Panel
        </p>
      </div>
    </div>
  );
}
