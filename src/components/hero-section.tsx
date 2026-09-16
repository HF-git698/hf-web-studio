// Adapted from Modern Web Agency Portfolio. See LICENSE.template.
import type { ReactNode } from "react";
interface HeroProps {
  badge?: { text: string; action: { text: string; href: string } };
  title: ReactNode;
  description: string;
  actions: { text: string; href: string; variant?: "outline"; icon?: ReactNode }[];
  children: ReactNode;
}
export function HeroSection({ badge, title, description, actions, children }: HeroProps) {
  return <section className="hero section-shell"><div className="hero-copy">
    {badge && <a className="eyebrow hero-badge" href={badge.action.href}><span className="status-dot" />{badge.text}<span className="badge-action">{badge.action.text} ↗</span></a>}
    <h1>{title}</h1><p className="hero-description">{description}</p>
    <div className="actions">{actions.map(action => <a key={action.text} href={action.href} className={`button ${action.variant === "outline" ? "button-outline" : "button-green"}`}>{action.text}{action.icon}</a>)}</div>
    <div className="hero-note"><span>✳</span> Small business focus. Big attention to detail.</div>
    </div><div className="hero-visual">{children}</div></section>;
}
