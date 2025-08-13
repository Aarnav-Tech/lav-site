"use client";

import dynamic from "next/dynamic";
const SpotifyEmbed = dynamic(() => import("./SpotifyEmbed"), { ssr: false });

export default function SpotifySection() {
  return (
    <section id="playlists" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-pastel-pink mb-6">My Playlists</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <SpotifyEmbed url="https://open.spotify.com/embed/playlist/PLAYLIST_ID_1" />
        <SpotifyEmbed url="https://open.spotify.com/embed/playlist/PLAYLIST_ID_2" />
      </div>
    </section>
  );
}
// Replace PLAYLIST_ID_1 and PLAYLIST_ID_2 with actual Spotify playlist IDs