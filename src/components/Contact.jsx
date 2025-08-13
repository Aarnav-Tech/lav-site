"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 accent-gradient bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="mb-6 text-gray-300">
        Whether you have a project idea, want to collaborate, or just say hi — my inbox is always open.
      </p>
      <a
        href="mailto:your@email.com"
        className="px-6 py-3 rounded-lg accent-gradient text-black font-semibold shadow-lg hover:scale-105 transition"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a href="https://github.com" target="_blank" className="hover:text-pink-400 transition"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-pink-400 transition"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition"><FaInstagram /></a>
      </div>
    </section>
  );
}
