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
      <Hero />
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <About />
      </section>
      <section id="playlists" className="py-16 px-6 max-w-5xl mx-auto">
        <SpotifySection />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
