import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Jaldi glass effect dene ke liye 20px rakha hai
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 px-4 md:px-8 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 1. Logo Section - Space Optimized */}
        <Link to="/" className="flex items-center gap-2 group outline-none">
          <div className="bg-secondary px-2 py-1 rounded-lg transform transition-transform group-hover:rotate-0 -rotate-2 shadow-md">
            <span className="text-white font-black text-lg tracking-tighter">
              ES
            </span>
          </div>
          <span
            className={`text-xl md:text-2xl font-heading font-extrabold tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}
          >
            Excellence<span className="text-secondary">School</span>
          </span>
        </Link>

        {/* 2. Desktop Navigation - Optimized Gaps */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-[15px] font-semibold transition-all duration-200 group ${
                  isActive
                    ? "text-secondary"
                    : scrolled
                      ? "text-slate-700 hover:text-secondary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-3 right-3 h-0.5 bg-secondary rounded-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                ></span>
              </Link>
            );
          })}

          <div className="ml-2">
            <Link
              to="/admissions"
              className="bg-secondary text-primary hover:bg-yellow-500 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95 inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* 3. Mobile Hamburger - Ultra Clean */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-md transition-colors outline-none ${scrolled ? "text-primary" : "text-white"}`}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* 4. Mobile Side Drawer - Responsive & Interactive */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-screen w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-heading font-black text-primary text-xl">
              MENU
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-slate-400 hover:text-primary"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-bold transition-all ${location.pathname === link.path ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-secondary text-primary text-center py-3 rounded-xl font-black shadow-lg shadow-yellow-200"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
