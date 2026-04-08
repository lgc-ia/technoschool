import { motion } from "motion/react";

import { ContactInquiryDialog } from "./ContactInquiryDialog";

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Blue halo effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#5C6FFF] rounded-full opacity-20 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-6xl">
          Envie de développer le numérique de demain ?
        </h2>
        <ContactInquiryDialog
          title="Parlons de votre projet digital"
          description="Vous avez déjà une idée, un besoin ou un projet numérique en tête ? Décrivez votre contexte et vos objectifs, nous reviendrons vers vous pour en discuter."
          messageLabel="Votre projet digital"
          messagePlaceholder="Décrivez votre besoin, votre projet, vos objectifs ou les fonctionnalités attendues..."
          submitLabel="Être recontacté"
          showFormationField={false}
          trigger={
            <button
              className="px-10 py-5 bg-[#5C6FFF] hover:bg-[#4D5FEF] text-white rounded-full shadow-[0_0_30px_rgba(92,111,255,0.5)] hover:shadow-[0_0_40px_rgba(92,111,255,0.7)] transition-all duration-300 text-lg"
              style={{ cursor: "pointer" }}
            >
              Contactez-nous
            </button>
          }
        />
      </motion.div>
    </section>
  );
}

