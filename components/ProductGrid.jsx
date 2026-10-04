'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingBag } from 'lucide-react';
import { products, categories, formatIDR } from '../data/products';

export default function ProductGrid() {
  const [active, setActive] = useState('Semua');

  const filtered =
    active === 'Semua' ? products : products.filter((p) => p.category === active);

  return (
    <section id="koleksi" className="bg-stone-50 border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Koleksi terlaris
            </h2>
            <p className="mt-3 text-stone-600 max-w-[55ch]">
              Stok ready di gudang Jakarta dan Surabaya. Pesan hari ini, dikirim dalam 48 jam.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`h-10 px-4 rounded-full text-sm font-semibold transition-all active:scale-[0.97] ${
                  active === c
                    ? 'bg-emerald-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:border-stone-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-[16px] border border-dashed border-stone-300 bg-white p-12 text-center">
            <p className="font-semibold text-stone-800">Belum ada produk di kategori ini</p>
            <p className="mt-1 text-sm text-stone-500">Coba pilih kategori lain.</p>
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group rounded-[16px] bg-white border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-900/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-stone-900/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                    {p.category}
                  </p>
                  <h3 className="mt-1.5 font-bold text-stone-900 leading-snug">{p.name}</h3>
                  <p className="mt-1 text-[13px] text-stone-500 leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] text-stone-600">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="font-bold text-stone-900">{p.rating}</span>
                    <span>({p.reviews} ulasan)</span>
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-bold text-stone-900">{formatIDR(p.price)}</p>
                      {p.originalPrice && (
                        <p className="text-[13px] text-stone-400 line-through">
                          {formatIDR(p.originalPrice)}
                        </p>
                      )}
                    </div>
                    <button
                      aria-label={`Tambah ${p.name} ke keranjang`}
                      className="grid place-items-center w-11 h-11 rounded-full bg-emerald-950 text-white hover:bg-emerald-900 active:scale-95 transition-all"
                    >
                      <ShoppingBag size={18} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
