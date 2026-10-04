export type Product = {
  id: number;
  name: string;
  category: "Sofa" | "Kursi" | "Meja" | "Lemari" | "Lampu";
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sofa Linen Aruna 3-Seater",
    category: "Sofa",
    price: 7499000,
    originalPrice: 9299000,
    rating: 4.9,
    reviews: 231,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    badge: "Terlaris",
    description: "Sofa 3 dudukan dengan kain linen premium dan kaki kayu jati solid.",
  },
  {
    id: 2,
    name: "Kursi Lounge Rattan Kirana",
    category: "Kursi",
    price: 1899000,
    rating: 4.8,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    badge: "Baru",
    description: "Kursi lounge rotan handmade dengan bantalan busa high-density.",
  },
  {
    id: 3,
    name: "Meja Kopi Jati Sora",
    category: "Meja",
    price: 2499000,
    originalPrice: 2999000,
    rating: 4.9,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    badge: "Hemat 17%",
    description: "Meja kopi kayu jati perhutani dengan finishing natural matte.",
  },
  {
    id: 4,
    name: "Kursi Kerja Ergonomis Nara",
    category: "Kursi",
    price: 3299000,
    rating: 4.7,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
    description: "Kursi kerja ergonomis dengan lumbar support dan armrest 3D.",
  },
  {
    id: 5,
    name: "Meja Makan Oak Hana 6-Seat",
    category: "Meja",
    price: 8999000,
    rating: 4.9,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop",
    description: "Meja makan solid oak untuk 6 orang, tahan panas dan gores.",
  },
  {
    id: 6,
    name: "Lemari Pakaian Minimalis Savana",
    category: "Lemari",
    price: 5499000,
    originalPrice: 6499000,
    rating: 4.8,
    reviews: 113,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    description: "Lemari 2 pintu dengan soft-close hinge dan cermin full-body.",
  },
  {
    id: 7,
    name: "Sofa Bed Compact Bumi",
    category: "Sofa",
    price: 4999000,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop",
    description: "Sofa bed lipat cocok untuk apartemen tipe studio.",
  },
  {
    id: 8,
    name: "Lampu Lantai Bambu Senja",
    category: "Lampu",
    price: 899000,
    rating: 4.7,
    reviews: 205,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    badge: "Baru",
    description: "Lampu lantai anyaman bambu dengan cahaya warm 2700K.",
  },
];

export const categories = ["Semua", "Sofa", "Kursi", "Meja", "Lemari", "Lampu"] as const;

export function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}
