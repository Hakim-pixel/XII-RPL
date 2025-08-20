// app/isi/page.tsx
import Link from 'next/link'; // Import Link dari next.js

export default function IsiPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Halaman Isi</h1>
      <p className="text-gray-700 text-lg">
        Ini adalah halaman isi yang dibuat dengan Next.js dan Tailwind CSS. Kamu bisa menambahkan berbagai konten di sini sesuai kebutuhanmu.
      </p>
      <img
        src="/assets/fek.jpg"
        alt="ND"
        className="rounded-lg shadow-lg"
      />

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Subjudul</h2>
        <p className="text-gray-600">
          Contoh konten paragraf. Tailwind CSS mempermudah styling tanpa menulis CSS manual.
        </p>
        <Link href="/" className="bg-[#3492DB] text-white px-6 py-2 rounded-full hover:bg-[#3490DB] transition">
          Tombol Balik
        </Link>
      </section>
    </main>
  );
}
