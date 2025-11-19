import Navbar from '@/components/navbar';
import HeroSlider from '@/components/hero-slider';
import Features from '@/components/features';
import Products from '@/components/products';
import Science from '@/components/science';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroSlider />
      <Products />
      <Science />
      <Features />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
