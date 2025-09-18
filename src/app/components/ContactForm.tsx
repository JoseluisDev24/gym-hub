"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
    setFormData({ name: "", email: "", message: "" }); 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen text-white p-5">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Contact Us
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5 w-full max-w-lg"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="name" className="text-base md:text-lg font-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg border-none bg-gray-400/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base md:text-lg font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border-none bg-gray-400/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-base md:text-lg font-semibold"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="p-3 rounded-lg border-none bg-gray-400/10 text-white placeholder-gray-500 min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg border-none bg-red-600 text-white text-lg font-bold cursor-pointer mt-5 hover:bg-red-700 transition duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
