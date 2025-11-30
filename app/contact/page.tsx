import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

