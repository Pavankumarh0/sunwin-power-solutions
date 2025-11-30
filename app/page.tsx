import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Impact from '@/components/Impact';
<<<<<<< HEAD
import GalleryPreview from '@/components/GalleryPreview';
=======
import Gallery from '@/components/Gallery';
>>>>>>> origin/main
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Impact />
<<<<<<< HEAD
      <GalleryPreview />
=======
      <Gallery />
>>>>>>> origin/main
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

