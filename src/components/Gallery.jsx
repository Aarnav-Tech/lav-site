"use client";

import { useInView } from "react-intersection-observer";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-pastel-pink mb-6">Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <FadeInImage key={i} src={src} />
        ))}
      </div>
    </section>
  );
}

function FadeInImage({ src }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <img
      ref={ref}
      src={src}
      className={`rounded-lg shadow-lg border border-pastel-purple/20 transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      alt=""
      loading="lazy"
    />
  );
}
