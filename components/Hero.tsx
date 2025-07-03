import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      {/* HERO */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 lg:py-15 px-4 text-center">
        <div className="max-w-3xl mx-auto px-2">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            Selamat Datang di MTs Bustanul Huda Dawuhan
          </h1>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            Terwujudnya Generasi Islam Yang Terampil Qiro’ah, Tekun Beribadah,
            Berakhlak Karimah Dan Unggul Dalam Prestasi
          </p>
          <Link
            href="/ppdb"
            className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition text-sm sm:text-base inline-block"
          >
            Daftar PPDB Sekarang
          </Link>
        </div>
      </section>

      {/* TENTANG SEKOLAH */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
            Madrasah Tsanawiyah (MTs) Bustanul Huda Talang Tegal berlokasi di
            Dawuhan, Talang, Tegal, Jawa Tengah. Madrasah ini terkenal kolektif
            segenap pemangku kepentingan bekerja bersama dalam mewujudkan
            keluaran (outcome) madrasah yang luar biasa (outstanding outcome).
            Tim hebat guru bersinergi untuk mendesain kurikulum berkualitas,
            yang hasilnya akan meningkatkan prestasi belajar siswa. Di tahun
            2019 madrasah ini sudah melakukan wisuda untuk angkatan 30 Madrasah
            Tsanawiyah (MTs) Bustanul Huda Talang Tegal telah berkomitmen untuk
            mengembangkan dan melanjutkan lingkungan madrasah yang mampu
            mendorong individu dan tanggungjawab, menerima perbedaan, mendorong
            semangat besar untuk belajar, dan mendukung segenap anggota
            komunitas untuk menemukan dan memperkuat keahliannya, bakatnya
            (talent), dan kemampuan, sehingga setiap individu akan menjadi
            bagian dalam merubah masyarakat global menuju masyarakat yang
            berperikemanusian dan religi.
          </p>
        </div>
      </section>

      {/* INFO CEPAT */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <Link
            href="/ppdb"
            className="bg-white shadow p-6 rounded hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">PPDB</h3>
            <p className="text-gray-500 text-sm">Informasi dan Pendaftaran</p>
          </Link>
          <Link
            href="/galeri"
            className="bg-white shadow p-6 rounded hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">Galeri</h3>
            <p className="text-gray-500 text-sm">
              Dokumentasi kegiatan sekolah
            </p>
          </Link>
          <Link
            href="/blog"
            className="bg-white shadow p-6 rounded hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">Berita</h3>
            <p className="text-gray-500 text-sm">
              Kabar dan pengumuman terbaru
            </p>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Hero;
