import React from "react";

const DoodleBg = ({ color = "#000000", opacity = 0.09 }) => {
  // STEP 1: Create raw SVG with template literals
  const rawSvg = `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g stroke="${color}" stroke-opacity="${opacity}" stroke-width="1.8" fill="none">
        <rect x="10" y="10" width="25" height="25" rx="5" />
        <path d="M60 15c10 10 10 30 0 40-10-10-10-30 0-40z" />
        <circle cx="120" cy="25" r="12" />
        <path d="M160 10l15 15-15 15-15-15z" />
        <path d="M20 70l15 15 15-15" />
        <path d="M80 60h20M90 50v20" />
        <rect x="130" y="55" width="30" height="18" rx="3" />
        <circle cx="175" cy="70" r="10" />
        <path d="M20 120h25v25H20z" />
        <path d="M70 120l20 10-20 10z" />
        <path d="M110 110l10 20-20 10z" />
        <circle cx="150" cy="120" r="12" />
        <path d="M180 110h10v25h-10z" />
        <path d="M30 160c10-15 30-15 40 0" />
        <circle cx="95" cy="165" r="8" />
        <path d="M130 150l15 15-15 15-15-15z" />
        <path d="M165 150h25" />
        <circle cx="185" cy="175" r="6" />
      </g>
    </svg>
  `;

  // STEP 2: URI encode it
  const encoded = encodeURIComponent(rawSvg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  // STEP 3: Build the URL
  const pattern = `url("data:image/svg+xml,${encoded}")`;

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: pattern,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "100px 100px", 
      }}
    />
  );
};

export default DoodleBg;
