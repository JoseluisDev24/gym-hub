import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import TestimonialsSlider from "./components/TestimonialsSlider";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="lg:px-40 bg-black/50">
        <Hero />
        <Services />
        <About />
        <TestimonialsSlider />
        <Gallery />
        <ContactForm />
      </div>
    </div>
  );
}


