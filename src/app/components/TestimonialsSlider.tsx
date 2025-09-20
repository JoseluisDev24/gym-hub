"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      id: 1,
      image: "/gym8.jpg",
      name: "Carlos lost 50 pounds and transformed her life with our personal trainer program. She feels more confident and energetic than ever before.",
      quote: "Excelente servicio, superó mis expectativas.",
    },
    {
      id: 2,
      image: "/gym3.jpg",
      name: "Carlos lost 50 pounds and transformed her life with our personal trainer program. She feels more confident and energetic than ever before.",
      quote: "Muy buena atención y entrega rápida.",
    },
    {
      id: 3,
      image: "/gym7.jpg",
      name: "Carlos lost 50 pounds and transformed her life with our personal trainer program. She feels more confident and energetic than ever before.",
      quote: "Definitivamente volvería a trabajar con ellos.",
    },
    {
      id: 4,
      image: "/gym4.jpg",
      name: "Carlos lost 50 pounds and transformed her life with our personal trainer program. She feels more confident and energetic than ever before.",
      quote: "Profesionales y confiables, los recomiendo.",
    },
  ];

  return (
    <motion.div id="testimonials" className="w-full max-w-5xl mx-auto px-4 py-28 bg-black">
      <h2 className="text-center text-3xl font-semibold pb-16">
        Success Stories
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className="overflow-visible">
            <div
              className="
                bg-neutral-900 border border-gray-400/20 rounded-2xl px-2 py-4 w-80 md:w-64 h-80 shadow-xs transition-all duration-300 transform-gpu
                hover:scale-105
                relative
              "
            >
              <div className="relative w-full aspect-[4/2] mb-4 overflow-hidden rounded-xl">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 400px, 300px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-sm">{t.name}</h3>
              <p className="text-gray-400 text-sm mt-2">“{t.quote}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
