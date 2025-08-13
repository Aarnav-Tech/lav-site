// src/app/layout.jsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-14">{children}</body>
    </html>
  );
}
