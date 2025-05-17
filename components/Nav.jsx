
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

   
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShowNavbar(true); 
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!showNavbar) return null; 

  return (
    <nav className="fixed bottom-0 left-0 w-full p-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-gray-500 text-2xl font-bold">
          MK.
        </Link>

        <div className="hidden md:flex space-x-3">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/skills" label="Skills" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/blogs" label="Blogs" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white p-2 rounded"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 border-t border-white"
          >
            <div className="px-4 py-4 flex flex-row flex-wrap justify-center gap-2">
              <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
              <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} />
              <NavLink href="/skills" label="Skills" onClick={() => setIsOpen(false)} />
              <NavLink href="/services" label="Services" onClick={() => setIsOpen(false)} />
              <NavLink href="/projects" label="Projects" onClick={() => setIsOpen(false)} />
              <NavLink href="/blogs" label="Blogs" onClick={() => setIsOpen(false)} />
              <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-black hover:text-gray-700 rounded-lg px-3 py-2 text-lg transition duration-300"
  >
    {label}
  </Link>
);

export default Nav;
