import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Impact from '@/components/Impact';
import GalleryPreview from '@/components/GalleryPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactPopup from '@/components/ContactPopup';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Impact />
      <GalleryPreview />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <ContactPopup />
    </main>
  );
}

