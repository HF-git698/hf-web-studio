import type { ReactNode } from "react";
export function Arrow() { return <span aria-hidden="true">↗</span>; }
export function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    restaurant: <><path d="M5 3v6m3-6v6M3 3v4a3 3 0 0 0 6 0V3M6 10v11M17 3c-3 3-3 8 0 9h3V3h-3Zm3 9v9" /></>,
    home: <><path d="m3 11 9-8 9 8M5 9v12h14V9M9 21v-7h6v7" /></>,
    beauty: <><path d="M12 21C3 17 2 10 3 7c4 0 7 2 9 6 2-4 5-6 9-6 1 3 0 10-9 14Z" /><path d="M8 9c0-4 4-7 4-7s4 3 4 7" /></>,
    business: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12l9 3 9-3M12 13v4" /></>,
    screen: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M2 7h20" /></>,
    search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M7 10h6M10 7v6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18m-14 6 3 3 6-6" /></>,
    care: <><path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6L12 2Z"/><path d="m8 12 3 3 5-6" /></>,
  };
  return <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.screen}</svg>;
}
// Adapted from the template's ServiceCard, with a semantic article and working link.
export function ServiceCard({ title, description, icon, number }: { title: string; description: string; icon: string; number: string }) {
  return <article className="service-card"><div className="service-top"><Icon name={icon}/><span>{number}</span></div><h3>{title}</h3><p>{description}</p><a href="#contact">Let’s talk <Arrow/></a></article>;
}
export function RestaurantPreview({ compact = false }: { compact?: boolean }) {
  return <div className={`restaurant-preview ${compact ? "compact" : ""}`} aria-label="Olive & Ember restaurant website design concept">
    <div className="browser-bar"><span className="browser-dots">● ● ●</span><span>OLIVE & EMBER — DESIGN CONCEPT</span><span>↗</span></div>
    <div className="restaurant-nav"><span className="restaurant-logo">olive<span>&</span>ember<span className="restaurant-sub">SEASONAL KITCHEN</span></span><span>Our story &nbsp; Menu &nbsp; Visit us</span><span className="mini-reserve">Book a table ↗</span></div>
    <div className="restaurant-hero"><div><div className="restaurant-kicker">GOOD FOOD. GREAT COMPANY.</div><p>A little local.<br/>A little <em>lovely.</em></p><span className="restaurant-tagline">Seasonal ingredients. Stories around the table.</span><span className="restaurant-button">Explore the menu ↗</span></div><div className="food-art"><div className="plate"><span className="leaf l1"/><span className="leaf l2"/><span className="leaf l3"/><span className="leaf l4"/><span className="tomato t1"/><span className="tomato t2"/><span className="tomato t3"/><span className="burrata"/><span className="seasoning"/></div><span className="food-caption">Made fresh.<br/>Shared often.</span></div></div>
    <div className="restaurant-bottom"><span>FRESH & SEASONAL</span><span>✳</span><span>FROM OUR KITCHEN, WITH LOVE</span><span>✳</span><span>YOUR NEW FAVORITE TABLE</span></div>
  </div>;
}
