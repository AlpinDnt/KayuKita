import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-amber-400 text-emerald-950 font-bold text-lg">
              K
            </span>
            <span className="font-bold text-lg tracking-tight">KayuKita</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-[42ch]">
            Furnitur kayu solid dari pengrajin lokal. Showroom di Jakarta, Bandung, dan Surabaya. Buka setiap hari 09.00–21.00.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-white/75">
            <li className="flex items-center gap-2.5">
              <MapPin size={16} /> Jl. Kemang Raya No. 88, Jakarta Selatan
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} /> (021) 555-0188
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} /> halo@kayukita.id
            </li>
          </ul>
        </div>

        <nav aria-label="Tautan belanja">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">Belanja</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Sofa', 'Kursi', 'Meja', 'Lemari', 'Lampu'].map((x) => (
              <li key={x}>
                <a href="#koleksi" className="text-white/75 hover:text-white transition-colors">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Tautan bantuan">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">Bantuan</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Lacak pesanan', 'Kebijakan pengembalian', 'Perawatan furnitur', 'Cicilan 0%', 'Hubungi kami'].map((x) => (
              <li key={x}>
                <a href="#" className="text-white/75 hover:text-white transition-colors">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-2 items-center justify-between text-[13px] text-white/50">
          <p>© 2026 KayuKita. Seluruh hak cipta dilindungi.</p>
          <p>Kayu bersertifikat · Buatan Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
