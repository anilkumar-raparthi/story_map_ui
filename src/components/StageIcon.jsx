import React from "react";
import { motion } from "framer-motion";

export default function StageIcon({ stage, onClick, locked }) {
  return (
    <motion.button
      className="stageIcon"
      style={{
        left: stage.position.x,
        top: stage.position.y,
        cursor: locked ? "not-allowed" : "pointer",
        opacity: locked ? 0.35 : 1,
        filter: locked ? "grayscale(70%) blur(0.3px)" : "none",
      }}
      onClick={() => !locked && onClick(stage)}
      whileHover={!locked ? { scale: 1.06 } : {}}
      whileTap={!locked ? { scale: 0.97 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: locked ? 0.35 : 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label={stage.title}
    >
      <img
        src={stage.image}
        alt={stage.title}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.button>
  );
}
