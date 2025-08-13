"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-dark)] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-2xl md:text-8xl font-bold mb-8" style={{ fontFamily: "var(--font-lavishly)" }}>
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Lavanya Soy
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

        {/* Right Image with Animated Gradient Ring */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[360px] h-[360px]">
            {/* Animated gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-pink-600 to-pink-500 animate-spin blur-xl"></div>

            {/* Avatar Image */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-[rgba(255,255,255,0.1)]">
              <Image
                src="/avatar.png" // your avatar file
                alt="Lavanya Portrait"
                width={288} // slightly smaller than container
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
