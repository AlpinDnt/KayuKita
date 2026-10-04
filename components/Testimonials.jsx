'use client';

const items = [
  {
    quote: 'Sofanya kokoh banget, sudah 2 tahun dipakai anak-anak masih bagus.',
    name: 'Ratna Dewi',
    role: 'Ibu rumah tangga, Jakarta',
  },
  {
    quote: 'Tim instalasi rapi dan cepat. Meja makannya jadi pusat kumpul keluarga.',
    name: 'Andi Pratama',
    role: 'Karyawan swasta, Surabaya',
  },
  {
    quote: 'Harga masuk akal untuk kualitas kayu solid seperti ini.',
    name: 'Sinta Marlina',
    role: 'Pemilik kos, Bandung',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          Kata mereka yang sudah beli
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-[16px] border border-stone-200 bg-stone-50 p-6 flex flex-col"
            >
              <blockquote className="text-[15px] leading-relaxed text-stone-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-stone-200">
                <p className="font-bold text-sm text-stone-900">{t.name}</p>
                <p className="text-[13px] text-stone-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 rounded-[20px] bg-emerald-950 px-8 py-10 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Diskon 15% untuk pembelian pertama
            </h3>
            <p className="mt-2 text-white/65 max-w-[50ch]">
              Daftar email dan dapatkan kode voucher + katalog terbaru setiap bulan.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Alamat email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Alamat email"
              className="h-12 flex-1 md:w-64 rounded-full px-5 text-sm text-stone-900 bg-white placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-full bg-amber-400 text-emerald-950 text-sm font-bold hover:bg-amber-300 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Klaim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
