import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <h1 className="text-3xl font-bold text-blue-600"> Library</h1>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl focus:outline-none text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-blue-600 font-bold" : "text-gray-700"
            } hover:text-blue-600 font-medium transition duration-300`}
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Contact
          </a>
          <Link
            to="/enquiry"
            className={`${
              isActive("/enquiry") ? "bg-blue-700" : "bg-blue-600"
            } hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300`}
          >
            Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
