"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-[#030A1A]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}
    `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#33AFFF]"
        >
          Entreprise
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          <Link href="/" className="hover:text-[#33AFFF] transition">Accueil</Link>
          <Link href="/activites" className="hover:text-[#33AFFF] transition">Activités</Link>
          <Link href="/services" className="hover:text-[#33AFFF] transition">Services</Link>
          <Link href="/contact" className="hover:text-[#33AFFF] transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
