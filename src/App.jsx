import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StageIcon from "./components/StageIcon";
import InfoPopup from "./components/InfoPopup";
import AnimatedArrow from "./components/AnimatedArrow";
import stagesData from "./data/stages.json";
const sparkle = new URL("./assets/sparkle.svg", import.meta.url).href;
const sun = new URL("./assets/sun.svg", import.meta.url).href;


export default function App() {
  const [stages, setStages] = useState([]);
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0); // how many stages unlocked

  useEffect(() => {
    // add index to stages
    const withIndex = stagesData.map((s, i) => ({ ...s, index: i }));
    setStages(withIndex);
  }, []);

  function handleStageClick(stage) {
    if (stage.index > progress) return; // locked
    setActive(stage);
  }

  function handlePopupClose() {
    if (active) {
      // Delay unlock for smoother pacing
      setTimeout(() => {
        setProgress((p) =>
          p < active.index + 1 ? active.index + 1 : p
        );
      }, 300);
    }
    setActive(null);
  }

  // Build arrow connections
  const arrows = stages
    .slice(0, stages.length - 1)
    .map((s, i) => ({
      from: {
        x: s.position.x + 70,
        y: s.position.y + 40,
      },
      to: {
        x: stages[i + 1].position.x + 20,
        y: stages[i + 1].position.y + 40,
      },
      unlocked: i < progress, // arrow only shows when stage unlocked
    }));

  return (
    <div>
      <Header />

      <main className="container">
        <section className="mapWrap" aria-label="Butterfly life cycle map">
          {/* Background visuals */}
          <img
            src={sparkle}
            alt=""
            style={{
              position: "absolute",
              left: 24,
              top: 12,
              width: 40,
              opacity: 0.9,
            }}
            aria-hidden
          />

          <img
            src={sun}
            alt="Sun"
            style={{
              position: "absolute",
              right: 24,
              top: 12,
              width: 84,
              opacity: 0.95,
            }}
          />

          {/* Animated arrows */}
          {arrows.map((a, idx) =>
            a.unlocked ? (
              <AnimatedArrow
                key={idx}
                from={a.from}
                to={a.to}
                animate
              />
            ) : null
          )}

          {/* Stage Icons */}
          {stages.map((s) => (
            <StageIcon
              key={s.id}
              stage={s}
              onClick={handleStageClick}
              locked={s.index > progress}
            />
          ))}
        </section>
      </main>

      <InfoPopup
        open={!!active}
        onClose={handlePopupClose}
        stage={active}
      />
    </div>
  );
}
