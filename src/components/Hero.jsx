"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-dark)] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Lavanya
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Dreamer • Creator • Explorer
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-pink-700 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Image with Animated Throbber */}
        <div className="flex justify-center md:justify-end relative">
          <div className="rounded-full p-1 animate-pulse border-4 border-pink-400 border-opacity-50 shadow-lg">
            <div className="rounded-full p-1 border-4 border-pink-600 border-opacity-50 animate-spin-slow">
              <Image
                src="/lavanya.jpg"
                alt="Lavanya Portrait"
                width={350}
                height={350}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
