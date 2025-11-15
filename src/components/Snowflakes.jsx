import { useEffect, useRef } from 'react';

export default function Snowflakes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const snowContainer = containerRef.current;
    if (!snowContainer) return;

    // Create multiple layers of snow for depth
    const createSnowflake = (size, speed, opacity, left) => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      
      // Use actual snowflake character
      snowflake.textContent = "❄";
      
      // Random starting position
      snowflake.style.left = left + "%";
      snowflake.style.fontSize = size + "px";
      snowflake.style.opacity = opacity;
      snowflake.style.animationDuration = speed + "s";
      snowflake.style.animationDelay = Math.random() * speed + "s";
      
      // Random horizontal drift
      const drift = (Math.random() - 0.5) * 100;
      snowflake.style.setProperty("--snow-x", drift + "px");
      
      // Random rotation
      const rotation = Math.random() * 360;
      snowflake.style.setProperty("--snow-rotate", rotation + "deg");
      
      return snowflake;
    };

    // Create large snowflakes (background layer)
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 15 + 20; // 20-35px
      const speed = Math.random() * 5 + 8; // 8-13s
      const opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5
      const left = Math.random() * 100;
      snowContainer.appendChild(createSnowflake(size, speed, opacity, left));
    }

    // Create medium snowflakes (middle layer)
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 10 + 15; // 15-25px
      const speed = Math.random() * 4 + 6; // 6-10s
      const opacity = Math.random() * 0.4 + 0.4; // 0.4-0.8
      const left = Math.random() * 100;
      snowContainer.appendChild(createSnowflake(size, speed, opacity, left));
    }

    // Create small snowflakes (foreground layer)
    for (let i = 0; i < 70; i++) {
      const size = Math.random() * 8 + 10; // 10-18px
      const speed = Math.random() * 3 + 4; // 4-7s
      const opacity = Math.random() * 0.5 + 0.5; // 0.5-1.0
      const left = Math.random() * 100;
      snowContainer.appendChild(createSnowflake(size, speed, opacity, left));
    }

    return () => {
      // Cleanup
      if (snowContainer) {
        snowContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="snow-container"
      className="absolute inset-0 overflow-hidden pointer-events-none z-20"
    />
  );
}
