import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32">
        <Services />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

