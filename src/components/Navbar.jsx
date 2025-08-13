"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-black/30 backdrop-blur-lg border-b border-white/10 rounded-b-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold accent-gradient bg-clip-text text-transparent">Lavanya</h1>
        <div className="flex gap-6">
          <Link href="#home" className="hover:text-pink-400 transition">Home</Link>
          <Link href="#about" className="hover:text-pink-400 transition">About</Link>
          <Link href="#contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
