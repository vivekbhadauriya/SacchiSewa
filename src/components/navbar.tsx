"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { useUser } from "@/context/UserContext";

export function Navbar() {
  const { user, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-black text-3xl sm:text-4xl font-bold hover:text-gray-700 transition-all"
        >
          SacchiSewa
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="text-gray-800 hover:text-green-500 transition-all"
          >
            How It Works
          </Link>
          <Link href="/start-fundraiser">
            <button className="bg-green-500 text-white hover:bg-green-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2">
              Start a Fundraiser
            </button>
          </Link>
          {user ? (
            // If user is logged in, show their name and Logout button
            <div className="flex items-center gap-4">
              <span className="text-gray-800 font-medium">Hello, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white hover:bg-red-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            // If no user is logged in, show Login/Signup dropdown
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition-all">
                <User
                  size={28}
                  className="text-gray-800 hover:text-gray-500 transition-all rounded-full border-2 border-gray-400 p-1 shadow-md hover:shadow-lg hover:border-gray-600"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 hover:text-gray-500 transition-all focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="/how-it-works"
              className="text-gray-800 hover:text-green-500 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link href="/start-fundraiser">
              <button
                className="w-full bg-green-500 text-white hover:bg-green-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Fundraiser
              </button>
            </Link>
            {user ? (
              <div className="flex flex-col gap-2">
                <span className="text-gray-800 font-medium text-center">
                  Hello, {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-500 text-white hover:bg-red-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block w-full text-center bg-blue-500 text-white hover:bg-blue-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full text-center bg-blue-500 text-white hover:bg-blue-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}