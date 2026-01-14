import React from 'react';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import ImageCarousel from './components/sections/ImagesCarousel';
import Services from './components/sections/Services';
import { Brands, Categories } from './components/sections/Brands';
import Products from './components/sections/Products';
import { 
  PaymentMethods, 
  Testimonials, 
  Contact, 
  Footer, 
  FloatingWhatsApp 
} from './components/sections/Footer';
import SectionTitle from './components/common/SectionTitle';
import AnimatedSection from './components/common/AnimatedSection';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <Hero />
      
      {/* Image Carousel Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle subtitle="شاهد بعض من قطع الغيار المتوفرة لدينا">
              معرض الصور
            </SectionTitle>
            <ImageCarousel />
          </AnimatedSection>
        </div>
      </section>

      <Services />
      <Brands />
      <Categories />
      <Products />
      <Testimonials />
      <PaymentMethods />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;