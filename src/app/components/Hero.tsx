"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center lg:pl-32 px-4 pt-16">
      <div className="absolute inset-0 lg:inset-0 rounded-3xl overflow-hidden z-0">
        <Image
          src="/heroBackground.jpg"
          alt="Fitness Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 text-white text-start flex flex-col gap-6 max-w-xl"
      >
        <h1 className="text-6xl font-bold leading-tight">
          Unleash Your Potential
        </h1>

        <p className="text-base md:text-lg mb-4 max-w-lg leading-7 text-gray-200">
          Transform your body and mind with our state-of-the-art facilities and
          expert trainers. Join our community and achieve your fitness goals.
        </p>

        <div className="flex gap-3 flex-col sm:flex-row">
          <a
            href="#get-started"
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-700 transition text-center inline-block"
          >
            Start Your Journey
          </a>

          <a
            href="#programs"
            className="border border-white/20 text-white px-6 py-3 rounded-md text-center inline-block"
          >
            Our Programs
          </a>
        </div>
      </motion.div>
    </section>
  );
}
