"use client";

import BeritaSection from "@/components/Berita";
import Hero from "@/components/Hero";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HomeSlider />
      <Hero />
      <BeritaSection />
    </main>
  );
}
