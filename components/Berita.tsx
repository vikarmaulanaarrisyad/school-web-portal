import Link from "next/link";

const beritaTerbaru = [
  {
    id: 1,
    title: "Kegiatan Masa Ta'aruf Siswa Baru (MATSAMA)",
    slug: "/blog/matsama-2025",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    date: "01 Juli 2025",
  },
  {
    id: 2,
    title: "Lomba Hari Santri Nasional 2025",
    slug: "/blog/hari-santri",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    date: "22 Oktober 2025",
  },
  {
    id: 3,
    title: "Prestasi Siswa di Olimpiade Sains",
    slug: "/blog/olimpiade-sains",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    date: "14 Juni 2025",
  },
  {
    id: 4,
    title: "Prestasi Siswa di Olimpiade Sains",
    slug: "/blog/olimpiade-sains",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    date: "14 Juni 2025",
  },
  // sisanya tetap ada tapi tidak ditampilkan
];

export default function BeritaSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="inline-block text-2xl sm:text-3xl font-bold mb-2 relative">
          Berita Terbaru
          <span className="block h-[3px] w-full bg-green-500 mt-2 mx-auto sm:mx-0"></span>
        </div>

        <p className="text-gray-600 text-sm">
          Informasi dan kabar terbaru seputar MTs Bustanul Huda Dawuhan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beritaTerbaru.map((berita) => (
          <Link
            href={berita.slug}
            key={berita.id}
            className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 mb-2">{berita.date}</span>
              <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                {berita.title}
              </h3>
              <span className="text-sm text-green-600 mt-auto">
                Selengkapnya →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition text-sm"
        >
          Lihat Semua Berita
        </Link>
      </div>
    </section>
  );
}
