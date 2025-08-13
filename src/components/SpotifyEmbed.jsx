"use client";

export default function SpotifyEmbed({ url }) {
  return (
    <iframe
      className="rounded-xl w-full h-80 border border-pastel-purple/30"
      src={url}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}
