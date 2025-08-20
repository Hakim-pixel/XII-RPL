import Head from 'next/head';
import Link from 'next/link'; // Import Link dari next.js

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Savor the perfect brew at Coffee Shop" />
      </Head>

      <div className="min-h-screen bg-[#3498DB] text-[#f0e5db]">
        <header className="sticky top-0 bg-[#f0e5db] text-[#3d1f12] shadow-md z-10 px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:underline">
              XII <span className="font-light">RPL</span>
            </Link>
          </div>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/home" className="hover:underline">Story</Link>
          </nav>
          <Link href="https://www.instagram.com/hakimm.png" className="bg-[#3492DB] text-white px-4 py-2 rounded-full hover:bg-[#3490DB]">
            Contact
          </Link>
        </header>

        <main className="p-6">
          <section className="relative bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 mt-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 animate-fadeIn">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Nation Dream</h1>
              <p className="mb-6 text-lg text-[#e7d6c4]">Album Kelas RPL Angkatan 2023.</p>
              <Link href="/home" className="bg-[#3492DB] text-white px-6 py-2 rounded-full hover:bg-[#3490DB] transition">
                Selengkapnya
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="/assets/logo.jpg"
                alt="ND"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-[#f0e5db] text-[#3d1f12] py-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg">&copy; 2025 XII RPL. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
