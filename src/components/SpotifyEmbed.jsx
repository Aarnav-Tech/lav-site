"use client";

export default function SpotifyEmbed({ link }) {
  return (
    <div className="relative w-full aspect-[8/10]">
      {/* Static gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-400 via-pink-600 to-pink-500 blur-lg"></div>

      {/* Inner container for iframe */}
      <div className="absolute inset-2 rounded-xl overflow-hidden bg-[var(--color-bg-dark)]">
        <iframe
          src={link}
          frameBorder="0"
          allow="encrypted-media"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
