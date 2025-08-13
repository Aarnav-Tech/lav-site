"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-color-bg-darker/90 backdrop-blur-md shadow-lg border-b border-pastel-purple/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-pastel-pink">Lavanya</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#about" className="hover:text-pastel-purple">About</a></li>
          <li><a href="#playlists" className="hover:text-pastel-purple">Playlists</a></li>
          <li><a href="#gallery" className="hover:text-pastel-purple">Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
}
