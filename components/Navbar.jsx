'use client';

import { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const links = [
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/85 backdrop-blur-md border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-950 text-amber-300 font-bold text-lg">
            K
          </span>
          <span className="font-bold text-lg tracking-tight text-stone-900">
            KayuKita
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            aria-label="Cari produk"
            className="p-2.5 rounded-full text-stone-600 hover:bg-stone-200/60 hover:text-stone-900 transition-colors"
          >
            <Search size={19} strokeWidth={2} />
          </button>
          <button
            aria-label="Keranjang belanja"
            className="relative p-2.5 rounded-full text-stone-600 hover:bg-stone-200/60 hover:text-stone-900 transition-colors"
          >
            <ShoppingBag size={19} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-5 h-5 px-1 rounded-full bg-amber-500 text-white text-[11px] font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#koleksi"
            className="ml-2 inline-flex items-center h-11 px-5 rounded-full bg-emerald-950 text-white text-sm font-semibold hover:bg-emerald-900 active:scale-[0.98] transition-all"
          >
            Belanja Sekarang
          </a>
        </div>

        <button
          className="lg:hidden p-2.5 rounded-lg text-stone-700 hover:bg-stone-200/60"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-stone-200/70 bg-stone-50 px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[15px] font-medium text-stone-700 border-b border-stone-200/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#koleksi"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-12 rounded-full bg-emerald-950 text-white text-sm font-semibold"
            >
              Belanja Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
