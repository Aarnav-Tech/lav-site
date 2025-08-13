"use client";
import dynamic from "next/dynamic";

const SpotifyEmbed = dynamic(() => import("./SpotifyEmbed"), { ssr: false });

export default function SpotifySection() {
  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
        My Favorite Playlists
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-6xl px-4">
        <div className="flex-1 w-full">
          <SpotifyEmbed link="https://open.spotify.com/embed/playlist/4pxNgU0UjcATPBYttWoOJC" />
        </div>
        <div className="flex-1 w-full">
          <SpotifyEmbed link="https://open.spotify.com/embed/playlist/2liP6IjApemeR3ugNdFt1v" />
        </div>
      </div>
    </div>
  );
}
