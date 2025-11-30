import Navbar from '@/components/Navbar';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32">
        <Impact />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

