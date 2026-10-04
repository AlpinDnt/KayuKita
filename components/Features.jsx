import { Truck, ShieldCheck, Hammer, Leaf } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Buatan pengrajin Jepara',
    body: 'Setiap sambungan dibuat manual dengan teknik joinery tradisional, bukan sekadar paku dan lem.',
  },
  {
    icon: Leaf,
    title: 'Kayu legal bersertifikat',
    body: 'Jati perhutani dan oak dari hutan lestari. Satu pohon ditebang, satu pohon ditanam kembali.',
  },
  {
    icon: Truck,
    title: 'Antar + instalasi gratis',
    body: 'Gratis ongkir se-Jawa dan instalasi di tempat. Kemasan aman, tim kami yang bereskan.',
  },
  {
    icon: ShieldCheck,
    title: 'Garansi 15 tahun',
    body: 'Rangka bermasalah? Kami perbaiki atau ganti. 30 hari pertama bisa tukar tanpa alasan.',
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 max-w-xl">
          Furnitur yang dibeli sekali, dipakai belasan tahun.
        </h2>
        <p className="mt-4 text-stone-600 max-w-[60ch] leading-relaxed">
          Kami tidak mengejar tren cepat. Setiap desain diuji beban 150 kg dan pemakaian harian selama 2 tahun sebelum dijual.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-[16px] border border-stone-200 bg-stone-50 p-6 hover:border-emerald-900/30 hover:bg-emerald-950/[0.02] transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-950 text-amber-300">
                <f.icon size={21} strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-bold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
