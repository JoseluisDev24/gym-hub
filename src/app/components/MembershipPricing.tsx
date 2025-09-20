"use client";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  features: string[];
};

const Pricing: Plan[] = [
  {
    name: "Basic",
    price: "$29",
    features: ["Access to gym", "1 personal trainer session"],
  },
  {
    name: "Standard",
    price: "$49",
    features: ["Access to gym", "3 personal trainer sessions", "Group classes"],
  },
  {
    name: "Premium",
    price: "$79",
    features: [
      "All Standard features",
      "Unlimited personal training",
      "Spa access",
    ],
  },
];

export default function MembershipPricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 text-white"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold pb-12 md:pb-16">
        Membership Pricing
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {Pricing.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`
              border-2 rounded-2xl px-8 py-6 w-full h-80 md:w-64
              shadow-xs transition-all duration-300 cursor-pointer
              hover:scale-105 flex flex-col gap-4
              ${
                selectedPlan === plan.name
                  ? "border-red-600 shadow-lg"
                  : "border-gray-400/20"
              }
            `}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-sm text-gray-400 pl-1 font-semibold">/month</span>
              </p>
            </div>
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 
              ${
                selectedPlan === plan.name
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-400/10 hover:bg-gray-500/20"
              }`}
            >
              Join Now
            </button>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-xs">
                  <CheckIcon
                    fontSize="small"
                    className="inline-block mr-2 text-green-700"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
