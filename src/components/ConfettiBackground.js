import React, { useEffect, useRef } from "react";

function randomColor() {
  const colors = ["#fbbc05", "#ea4335", "#34a853", "#4285f4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomDirection() {
  // 0: down, 1: left-to-right, 2: right-to-left
  const dirs = ["down", "right", "left"];
  return dirs[Math.floor(Math.random() * dirs.length)];
}

function ConfettiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const confetti = Array.from({ length: 60 }).map(() => {
      const direction = randomDirection();
      let x = Math.random() * width;
      let y = Math.random() * height;
      return {
        x,
        y,
        r: Math.random() * 2 + 2,
        color: randomColor(),
        speed: Math.random() * 0.8 + 0.7,
        direction,
      };
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      confetti.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();

        if (c.direction === "down") {
          c.y += c.speed;
          if (c.y > height) c.y = 0;
        } else if (c.direction === "right") {
          c.x += c.speed;
          if (c.x > width) c.x = 0;
        } else if (c.direction === "left") {
          c.x -= c.speed;
          if (c.x < 0) c.x = width;
        }
      });
      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
}

export default ConfettiBackground;
