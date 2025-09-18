"use client";
import { motion } from "framer-motion";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupsIcon from "@mui/icons-material/Groups";

const services = [
  {
    title: "Personal Training",
    description:
      "Customized workout plans tailored to your individual needs and goals, with expert guidance from certified trainers.",
    icon: <FitnessCenterIcon className="text-red-500 text-3xl" />,
  },
  {
    title: "Group Classes",
    description:
      "Join our energetic group classes including yoga, HIIT, and spinning.",
    icon: <FavoriteBorderIcon className="text-red-500 text-3xl" />,
  },
  {
    title: "Nutrition Guidance",
    description:
      "Personalized nutrition plans and consultations with our experts.",
    icon: <GroupsIcon className="text-red-500 text-3xl" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Fitness Solutions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to cater to all fitness levels and
            goals. Our programs are designed to help you achieve optimal health
            and performance.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-900 border border-gray-400/20 rounded-2xl p-8 w-80 md:w-64 text-center shadow-xs hover:shadow-red-600/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
