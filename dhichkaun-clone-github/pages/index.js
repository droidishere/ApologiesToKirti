import React from "react";
import { motion } from "framer-motion";

export default function DhichkaunClone() {
  const features = [
    { title: "Playful Filters", desc: "Apply quirky filters and effects to your photos." },
    { title: "Instant Share", desc: "Share to social with one click — optimized for Insta." },
    { title: "Meme Studio", desc: "Add stickers, text and create fun memes fast." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">dhichkaun<span className="text-indigo-600">.</span></h1>
        <nav className="space-x-4 hidden md:flex">
          <a className="text-sm font-medium hover:underline" href="#features">Features</a>
          <a className="text-sm font-medium hover:underline" href="#gallery">Gallery</a>
          <a className="text-sm font-medium hover:underline" href="#contact">Contact</a>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Dhichkaun Landing Page</h2>
        <p className="mt-4">Playful React + Tailwind starter project.</p>
      </main>
    </div>
  );
}
