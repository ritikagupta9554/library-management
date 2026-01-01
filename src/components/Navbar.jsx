import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-full p-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 1H5c-1.1 0-2 .9-2 2v18l7-3 7 3V3c0-1.1-.9-2-2-2zm0 18l-5-2.18L9 19V5h10v14z"/>
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight group-hover:tracking-wide transition-all duration-300">
              LibraryHub
            </h1>
            <p className="text-xs text-blue-100 font-medium">Your Gateway to Knowledge</p>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-1.5">
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isActive("/")
                ? "text-white bg-white/20 backdrop-blur-sm shadow-lg"
                : "text-blue-50 hover:text-white hover:bg-white/10"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </Link>
          <Link
            to="/about"
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isActive("/about")
                ? "text-white bg-white/20 backdrop-blur-sm shadow-lg"
                : "text-blue-50 hover:text-white hover:bg-white/10"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </Link>
          <Link
            to="/services"
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isActive("/services")
                ? "text-white bg-white/20 backdrop-blur-sm shadow-lg"
                : "text-blue-50 hover:text-white hover:bg-white/10"
            }`}
          >
            Services
            {isActive("/services") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isActive("/contact")
                ? "text-white bg-white/20 backdrop-blur-sm shadow-lg"
                : "text-blue-50 hover:text-white hover:bg-white/10"
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </Link>
          <Link
            to="/enquiry"
            className="ml-4 bg-white text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Join Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2 bg-blue-700/50 backdrop-blur-md border-t border-white/10">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              isActive("/")
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            🏠 Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              isActive("/about")
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            ℹ️ About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              isActive("/services")
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            🛎️ Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              isActive("/contact")
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            📞 Contact
          </Link>
          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className="block bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center"
          >
            ✨ Join Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
