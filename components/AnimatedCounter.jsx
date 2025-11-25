"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ end, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; 
    const increment = end / (duration / 16); // ~60fps

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[#FFD56B]">
        {count}<span className="text-[#FFD56B]">+</span>
      </p>
      <p className="text-gray-300 mt-2">{label}</p>
    </div>
  );
}
