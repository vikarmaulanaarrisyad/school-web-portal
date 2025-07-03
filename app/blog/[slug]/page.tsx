import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

const beritaTerbaru = [
  {
    slug: "matsama-2025",
    title: "Kegiatan Masa Ta'aruf Siswa Baru (MATSAMA)",
    date: "01 Juli 2025",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    content: `MATSAMA adalah masa orientasi peserta didik baru untuk mengenal lingkungan sekolah, guru, dan teman baru. Kegiatan ini dilaksanakan selama 3 hari dengan berbagai aktivitas seperti pengenalan visi misi sekolah, kegiatan keagamaan, serta motivasi belajar.`,
  },
  {
    slug: "hari-santri",
    title: "Lomba Hari Santri Nasional 2025",
    date: "22 Oktober 2025",
    image:
      "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    content: `Peringatan Hari Santri diramaikan dengan berbagai lomba keagamaan dan kebudayaan yang diikuti oleh seluruh siswa MTs Bustanul Huda Dawuhan.`,
  },
];

export default function BlogDetailPage({ params }: Params) {
  const berita = beritaTerbaru.find((b) => b.slug === params.slug);

  if (!berita) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Konten utama */}
      <div className="md:col-span-2">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
          {berita.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">{berita.date}</p>
        <Image
          src={berita.image}
          alt={berita.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow mb-6"
        />
        <article className="prose prose-green max-w-none text-gray-700 mb-12">
          {berita.content}
        </article>

        {/* Komentar */}
        <section className="mt-12 border-t pt-10">
          <h3 className="text-xl font-semibold mb-4">Tinggalkan Komentar</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Tulis komentar..."
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Kirim Komentar
            </button>
          </form>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-5 shadow">
          <h4 className="text-lg font-semibold mb-4 border-b pb-2">
            Berita Lainnya
          </h4>
          <div className="space-y-3">
            {beritaTerbaru
              .filter((b) => b.slug !== params.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="block hover:bg-white p-2 rounded transition"
                >
                  <div className="text-sm font-medium text-green-700 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </Link>
              ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
