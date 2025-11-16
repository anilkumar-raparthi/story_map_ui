import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedArrow({ from, to, animate }) {
  const midX = (from.x + to.x) / 2;
  const controlY = Math.min(from.y, to.y) - 60;

  const path = `M ${from.x} ${from.y} Q ${midX} ${controlY} ${to.x} ${to.y}`;

  return (
    <svg
      className="arrowSvg"
      style={{ left: 0, top: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        fill="none"
        stroke="#f1a94b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
