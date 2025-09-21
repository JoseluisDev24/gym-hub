"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black/30 rounded-2xl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-white mb-12">
          About Us
        </h2>

        <motion.div
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <div className="relative pb-[75%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/Osd4DLpMNp4"
                  title="About our gym"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full text-left flex flex-col justify-center">
            <div className="lg:pl-8">
              <div className="mb-6">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Our Philosophy
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe that fitness is a journey, not a destination. Our
                  philosophy is to create a supportive and motivating
                  environment where everyone feels empowered to achieve their
                  personal best.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white text-lg font-semibold mb-2">
                  Our Mission
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Our mission is to provide world-class fitness facilities,
                  expert guidance, and a strong community to help our members
                  lead healthier, happier lives. We are committed to continuous
                  improvement and innovation.
                </p>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-2">
                  Our History
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Founded in 2010, Fitness Hub started as a small local gym with
                  a passion for helping people. Over the years, we&apos;ve grown into
                  a state-of-the-art fitness center, but our core values of
                  community and dedication remain unchanged.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
