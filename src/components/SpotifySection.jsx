"use client";
import dynamic from "next/dynamic";

const SpotifyEmbed = dynamic(() => import("./SpotifyEmbed"), { ssr: false });

export default function SpotifySection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      <SpotifyEmbed link="https://open.spotify.com/embed/playlist/1" />
      <SpotifyEmbed link="https://open.spotify.com/embed/playlist/2" />
    </div>
  );
}
