import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "../components/theme-provider";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Sujin Sreekumaran Rani | AI Engineer & Software Developer",
  description: "Portfolio of Sujin Sreekumaran Rani - AI Engineer, Software Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-950 text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
