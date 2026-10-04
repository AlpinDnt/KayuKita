import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-stone-50 font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
