"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaRobot, FaGamepad, FaDiscord } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 accent-gradient bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="text-gray-300 mb-6">
        Whether you have a project idea, want to collaborate, or just say hi —
        my DM is always open. | PS: Please follow me on Roblox and Instagram!
      </p>
      <div className="flex justify-center gap-6 mt-8 text-2xl text-pink-400">
        <a href="https://www.instagram.com/your_wardrobe_ghost" target="_blank"><FaInstagram /></a>
        <a href="https://www.roblox.com/users/4712539804/profile" target="_blank"><SiRoblox /></a>
      </div>
    </section>
  );
}
