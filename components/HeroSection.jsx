import Image from 'next/image';
import { ArrowRight, Star, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-emerald-900 bg-emerald-950/5 border border-emerald-950/10 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Furnitur lokal · Kayu bersertifikat
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.05] text-stone-900">
            Rumah terasa
            <br />
            lebih <span className="italic text-emerald-900">hidup.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600 max-w-[46ch]">
            Sofa, meja, dan kursi dari pengrajin Jepara. Tahan lama, mudah dirawat, gratis ongkir se-Jawa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#koleksi"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-950 text-white text-sm font-semibold hover:bg-emerald-900 active:scale-[0.98] transition-all"
            >
              Lihat Koleksi
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
            <a
              href="#keunggulan"
              className="inline-flex items-center h-12 px-6 rounded-full border border-stone-300 text-stone-800 text-sm font-semibold hover:border-stone-400 hover:bg-white active:scale-[0.98] transition-all"
            >
              Kenapa KayuKita?
            </a>
          </div>
          <dl className="mt-10 flex gap-8 sm:gap-10">
            <div>
              <dt className="sr-only">Rating</dt>
              <dd className="flex items-center gap-1.5 font-bold text-stone-900 text-lg">
                <Star size={17} className="fill-amber-400 text-amber-400" />
                4.9
              </dd>
              <dd className="text-[13px] text-stone-500 mt-0.5">12.400+ ulasan</dd>
            </div>
            <div className="border-l border-stone-200 pl-8 sm:pl-10">
              <dd className="font-bold text-stone-900 text-lg">15 thn</dd>
              <dd className="text-[13px] text-stone-500 mt-0.5">Garansi rangka</dd>
            </div>
            <div className="border-l border-stone-200 pl-8 sm:pl-10">
              <dd className="font-bold text-stone-900 text-lg">48 jam</dd>
              <dd className="text-[13px] text-stone-500 mt-0.5">Pengiriman cepat</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[20px] overflow-hidden bg-emerald-950 aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
              alt="Ruang tamu dengan sofa linen dan meja kayu jati"
              width={1200}
              height={960}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg shadow-stone-900/10">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-950 text-amber-300">
              <Truck size={20} strokeWidth={2} />
            </span>
            <span>
              <span className="block text-sm font-bold text-stone-900">Gratis ongkir se-Jawa</span>
              <span className="block text-xs text-stone-500">+ instalasi oleh tim kami</span>
            </span>
          </div>
          <div className="absolute right-4 top-4 sm:right-6 sm:top-6 bg-stone-900/85 backdrop-blur text-white rounded-2xl px-4 py-3">
            <p className="text-[11px] uppercase tracking-widest text-white/60 font-semibold">Mulai dari</p>
            <p className="text-lg font-bold">Rp 899 rb</p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] font-medium text-stone-500">
          <span>Dipercaya 40.000+ keluarga di Indonesia</span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span>Jepara</span>
          <span>Bandung</span>
          <span>Surabaya</span>
          <span>Jakarta</span>
          <span>Makassar</span>
        </div>
      </div>
    </section>
  );
}
