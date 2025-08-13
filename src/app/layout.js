// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Lavanya's Website",
  description: "Lavanya's dreamy, pastel-inspired portfolio showcasing her projects, playlists, and contact info.",
  keywords: ["Lavanya", "portfolio", "designer", "developer", "dreamer", "projects", "Spotify"],
  authors: [{ name: "Lavanya" }],
  openGraph: {
    title: "Lavanya's Website",
    description: "Lavanya's dreamy, pastel-inspired portfolio showcasing her projects, playlists, and contact info.",
    siteName: "Lavanya Website",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavanya's Portfolio",
    description: "Lavanya's dreamy, pastel-inspired portfolio showcasing her projects, playlists, and contact info.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-bg-dark)] text-white font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
