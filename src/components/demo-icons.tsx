import type { ReactNode } from "react";

function Icon({ size = 24, children }: { size?: number; children: ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
}
export const ArrowUpRight = ({ size }: { size?: number }) => <Icon size={size}><path d="M7 17 17 7M7 7h10v10"/></Icon>;
export const ArrowRight = ({ size }: { size?: number }) => <Icon size={size}><path d="M4 12h16m-7-7 7 7-7 7"/></Icon>;
export const Phone = ({ size }: { size?: number }) => <Icon size={size}><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3l2 5-2 2a16 16 0 0 0 6 6l2-2 5 2z"/></Icon>;
export const MapPin = ({ size }: { size?: number }) => <Icon size={size}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
export const Menu = ({ size }: { size?: number }) => <Icon size={size}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>;
export const X = ({ size }: { size?: number }) => <Icon size={size}><path d="m6 6 12 12M6 18 18 6"/></Icon>;
export const Clock = ({ size }: { size?: number }) => <Icon size={size}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>;
export const Leaf = ({ size }: { size?: number }) => <Icon size={size}><path d="M20 3C9 2 3 7 5 14s14 8 15-11ZM4 21 15 10"/></Icon>;
export const Flame = ({ size }: { size?: number }) => <Icon size={size}><path d="M12 3c2 5-4 6-2 10 2 0 4-2 5-5 4 4 5 7 3 11s-10 4-12-1C4 13 8 8 12 3Z"/></Icon>;
