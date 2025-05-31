"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);
  const [filled, setFilled] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const fillTimer = setTimeout(() => {
      setFilled(true);
    }, 3000); // Start fill after letters appear

    const slideUpTimer = setTimeout(() => {
      setSlideUp(true);
    }, 3500); // Slide up just after fill

    const showLettersTimer = setTimeout(() => {
      setHide(true);
    }, 4500); // Hide splash after everything

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(slideUpTimer);
      clearTimeout(showLettersTimer);
    };
  }, []);

  if (hide) return null;

  const words = ["Frontend", "Developer"];

  return (
    <div style={styles.splashScreen}>
      <h1
        style={{
          ...styles.title,
          animation: slideUp
            ? "slideUpFade 1s ease forwards"
            : "none",
        }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{
              display: "flex",
              marginRight: wordIndex === 0 ? "1rem" : 0,
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  ...styles.letter,
                  animationDelay: `${(charIndex + wordIndex * 10) * 0.15}s`,
                  color: filled ? "white" : "transparent",
                  WebkitTextStroke: filled ? "0" : "1px white",
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
}

const styles = {
  splashScreen: {
    position: "fixed",
    inset: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  title: {
    fontSize: "140px",
    fontWeight: "bold",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
  },
  letter: {
    opacity: 0,
    animationName: "fadeIn",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-in-out",
    WebkitTextStroke: "1px white",
    color: "transparent",
  },
};

// Add keyframes globally
const styleSheet = `
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUpFade {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
}
`;

if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}
