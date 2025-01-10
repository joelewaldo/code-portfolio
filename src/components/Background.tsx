import React, { useEffect, useState } from "react";

const generateRandomPolygon = (count: number) => {
  if (count < 3) {
    throw new Error("A polygon must have at least 3 vertices");
  }

  const polygon = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    polygon.push(`${x}% ${y}%`);
  }
  return `polygon(${polygon.join(", ")})`;
};

const Background: React.FC = () => {
  const [polygons, setPolygons] = useState<string[]>([]);

  useEffect(() => {
    const newPolygons = Array(3)
      .fill(0)
      .map(() => generateRandomPolygon(5 + Math.floor(Math.random() * 5)));
    setPolygons(newPolygons);
  }, []);

  return (
    <>
      {polygons.map((polygon, index) => (
        <div
          key={index}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            opacity: 0.1,
            background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.3)`,
            clipPath: polygon,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

export default Background;
