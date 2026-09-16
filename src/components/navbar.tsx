"use client";
import Link from "next/link";
// Adapted from Modern Web Agency Portfolio. See LICENSE.template.
import { useEffect, useState } from "react";
const navigation = ["Services", "Work", "About"];
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <nav className="section-shell navigation" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="HF Web Studio home"><span className="brand-mark">hf<span>↗</span></span><span>HF WEB<span className="brand-light"> STUDIO</span></span></Link>
      <div className="desktop-links">{navigation.map(name => <Link key={name} href={`/#${name.toLowerCase()}`}>{name}</Link>)}</div>
      <Link href="/#contact" className="button button-green nav-cta">Get a Free Quote <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? "✕" : "☰"}</button>
    </nav>
    {mobileMenuOpen && <div id="mobile-navigation" className="mobile-navigation" onKeyDown={event => { if (event.key === "Escape") setMobileMenuOpen(false); }}>
      {navigation.map(name => <Link key={name} href={`/#${name.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{name}</Link>)}
      <Link className="button button-green" href="/#contact" onClick={() => setMobileMenuOpen(false)}>Get a Free Quote ↗</Link>
    </div>}
  </header>;
}



