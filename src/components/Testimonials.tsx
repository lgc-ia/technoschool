"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { InitialsAvatar } from "./InitialsAvatar";

const testimonials = [
  {
    quote:
      "La TechnoSchool m'a permis de me reconvertir dans la tech. Les formateurs sont passionnés et le programme est très complet.",
    name: "Nadia R.",
    role: "Développeuse Full-Stack",
  },
  {
    quote:
      "Grâce à la formation machine learning, j'ai décroché un poste dans une startup innovante. Une expérience transformatrice",
    name: "Yanis B.",
    role: "Machine Learning Engineer",
  },
  {
    quote:
      "Le cursus en développent est vraiment à la pointe. J'ai acquis des compétences recherchées sur le marché.",
    name: "Chloé M.",
    role: "Product Owner",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-black/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-intro"
        >
          <span className="eyebrow">Témoignages</span>
          <h2 className="section-title">Ils ont programmé leur avenir</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-[#5C6FFF] mb-4" />
              <p className="text-white mb-6 italic">{testimonial.quote}</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar">
                  <InitialsAvatar
                    name={testimonial.name}
                    style={{ fontSize: "0.85rem", letterSpacing: "0.02em" }}
                  />
                </div>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

