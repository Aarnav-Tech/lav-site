"use client";

export default function SpotifyEmbed({ link }) {
  return (
    <iframe
      src={link}
      width="300"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
      className="rounded-xl shadow-lg hover:scale-105 transition-transform"
    />
  );
}
