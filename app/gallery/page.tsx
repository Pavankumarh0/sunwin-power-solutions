import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32">
        <Gallery />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

