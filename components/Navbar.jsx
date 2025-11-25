"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? "nav-glass py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold gradient-title">Entreprise</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#FFD56B] transition">Accueil</Link>
          <Link href="/activites" className="hover:text-[#FFD56B] transition">Activités</Link>
          <Link href="/services" className="hover:text-[#FFD56B] transition">Services</Link>
          <Link href="/contact" className="hover:text-[#FFD56B] transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
