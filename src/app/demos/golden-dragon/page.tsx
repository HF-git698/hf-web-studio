import type { Metadata } from "next";
import GoldenDragonDemo from "@/components/GoldenDragonDemo";
import "./golden-dragon.css";

export const metadata: Metadata = {
  title: "Golden Dragon Chinese Cuisine | Restaurant Demo",
  description: "A fictional Chinese restaurant website demo by HF Web Studio.",
  robots: { index: false, follow: false },
  icons: { icon: "/demos/golden-dragon/dragon-mark.svg" },
};

export default function Page() { return <GoldenDragonDemo />; }
