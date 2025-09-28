"use client"

import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
      <div className=" bg-black/50">
        <Hero />
        <Services />
        <About />
        <MembershipPricing />
        <TestimonialsSlider />
        <Gallery />
        <ContactForm />
      </div>
      <Footer />
      <motion.a
        href="https://wa.me/59899123456?text=Hola,%20me%20gustaría%20información%20sobre%20los%20servicios%20de%20kinesiología"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 1,
        }}
        whileHover={{
          scale: 1.1,
          y: -3,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-300"
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          <motion.div
            className="bg-gradient-to-br from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 p-3 border-2 border-white/20 hover:border-white/40 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-colors duration-300 backdrop-blur-sm"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <WhatsAppIcon style={{ fontSize: 28 }} />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none">
            <span className="font-medium">💬 ¡Contáctanos por WhatsApp!</span>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </motion.div>
        </div>
      </motion.a>
    </div>
  );
}


