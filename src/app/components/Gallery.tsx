"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "/gym1.jpg",
    alt: "Modern gym equipment area",
    span: "row-span-1 col-span-1 md:col-span-2",
  },
  {
    src: "/gym2.jpg",
    alt: "Group fitness class",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym3.jpg",
    alt: "Personal training session",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym4.jpg",
    alt: "Cardio equipment area",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym5.jpg",
    alt: "Free weights section",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym6.jpg",
    alt: "Yoga and stretching area",
    span: "row-span-1 col-span-1 md:col-span-2",
  },
  {
    src: "/gym7.jpg",
    alt: "Swimming pool area",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym8.jpg",
    alt: "Sauna and relaxation area",
    span: "row-span-1 col-span-1",
  },
  {
    src: "/gym1.jpg",
    alt: "Modern gym equipment area",
    span: "row-span-1 col-span-2",
  },
];

export default function Gallery() {
  type GalleryImage = {
    src: string;
    alt: string;
    span: string;
  };

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[280px] lg:auto-rows-[320px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`relative ${image.span} rounded-xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => openModal(image)}
                  className="text-white text-center hover:scale-110 transition-transform duration-200"
                >
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-3 mx-auto cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{image.alt}</p>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Experience our world-class facilities in person
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base">
            Schedule a Tour
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full h-full cursor-default"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black/50 rounded-lg px-4 py-2 text-sm sm:text-base">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
