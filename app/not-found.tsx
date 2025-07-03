"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 text-center p-8">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman tidak ditemukan</h2>
      <p className="text-gray-500 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
