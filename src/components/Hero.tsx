"use client";

import { motion } from "motion/react";
import { Particles } from "./Particles";

import { ContactInquiryDialog } from "./ContactInquiryDialog";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#0a0514", overflow: "hidden" }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-violet-600 rounded-full opacity-20 blur-[120px]" />
      </div>

      {/* Wavy bands */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="hero-wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#7e22ce" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#hero-wave-gradient)" strokeWidth="0.6">
            {Array.from({ length: 24 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${i * 36 + 12} Q300,${i * 36 - 24} 600,${i * 36 + 48} T1200,${i * 36 + 12}`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Floating particles */}
      <Particles count={90} />

      {/* Gradient bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, #d946ef 0%, #a855f7 50%, #7c3aed 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl leading-tight"
        >
          Développez votre{" "}
          <span
            style={{
              background: "linear-gradient(to right, #8CA3FF, #D9A8FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 0 12px rgba(140,163,255,.45))",
            }}
          >
            expertise Tech LGC
          </span>
          <br />
          programmez votre{" "}
          <span
            style={{
              background: "linear-gradient(to right, #8CA3FF, #D9A8FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 0 12px rgba(140,163,255,.45))",
            }}
          >
            avenir
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          La grande classe TechnoSchool forme celles et ceux qui construisent le monde
          digital de demain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactInquiryDialog
            trigger={
              <button type="button" className="px-8 py-4 bg-[#5C6FFF] hover:bg-[#4D5FEF] text-white rounded-full shadow-[0_0_30px_rgba(92,111,255,0.5)] transition-all duration-300">
                Découvrir nos formations
              </button>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
