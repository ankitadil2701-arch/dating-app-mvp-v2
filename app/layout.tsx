import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NearMe | Meet people nearby", description: "A safer dating app for adults 18 and over" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
