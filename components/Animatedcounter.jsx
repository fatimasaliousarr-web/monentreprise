"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCounter({ end, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-5xl font-bold gold"
      >
        {isInView ? end : 0}+
      </motion.h2>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}

