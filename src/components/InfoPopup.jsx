import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoPopup({ open, onClose, stage }) {

  useEffect(() => {
    if (!open) return;

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Resolve Vite asset path for popup image
  const imgSrc = stage
    ? new URL(`../assets/${stage.image}`, import.meta.url).href
    : "";

  return (
    <AnimatePresence>
      {open && (
        <div
          className="infoBackdrop"
          onMouseDown={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            onMouseDown={(e) => e.stopPropagation()}
            className="infoCard"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            tabIndex={0}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <img
                src={imgSrc}
                alt={stage?.title || ""}
                style={{
                  width: 84,
                  height: 64,
                  flex: "0 0 84px",
                  borderRadius: 8,
                }}
              />
              <div>
                <div className="infoTitle">{stage?.title}</div>
                <div className="infoDesc">{stage?.description}</div>
                <div className="smallNote">
                  Tip: Press ESC or click outside to close
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
