import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import MembershipPricing from "./components/MembershipPricing";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="lg:px-40 bg-black/50">
        <Hero />
        <Services />
        <About />
        <MembershipPricing />
        <TestimonialsSlider />
        <Gallery />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}


