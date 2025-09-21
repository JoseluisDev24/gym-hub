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
      image: "/gym8.webp",
      name: "Carlos lost 50 pounds and transformed her life with our personal trainer program. She feels more confident and energetic than ever before.",
      quote: "Excellent service, exceeded my expectations.",
    },
    {
      id: 2,
      image: "/gym9.webp",
      name: "Sergio built muscle and improved his overall fitness with our state-of-the-art equipment and supportive community.",
      quote: "Visible results in just a few weeks.",
    },
    {
      id: 3,
      image: "/gym10.webp",
      name: "Sara improved her strength and endurance through our group classes. She enjoys the supportive community and expert guidance.",
      quote: "Unsurpassed quality, I will definitely buy again.",
    },
    {
      id: 4,
      image: "/gym11.webp",
      name: "David achieved his fitness goals with our affordable membership plans. He appreciates the variety of equipment and friendly staff.",
      quote: "Professional and trustworthy, I recommend them.",
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
                  loading="lazy"
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
