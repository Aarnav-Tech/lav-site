// src/app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpotifySection from "@/components/SpotifySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg-grey)] min-h-screen">
      <Navbar />

      {/* Home / Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 accent-gradient bg-clip-text text-transparent">
          Lavanya
        </h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          Designer • Developer • Dreamer
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <About />
      </section>

      {/* Playlists */}
      <section id="playlists" className="py-16 px-6 max-w-5xl mx-auto">
        <SpotifySection />
      </section>

      {/* Contact (fancy) */}
      <section id="contact" className="py-20 px-6">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
// src/app/page.js