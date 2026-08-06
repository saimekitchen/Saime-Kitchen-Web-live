import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = "text-primary", size }: LogoIconProps) {
  return (
    <svg
      width={size !== undefined ? size : "100%"}
      height={size !== undefined ? size : "100%"}
      viewBox="0 0 100 100"
      className={`${className} transition-transform duration-300 group-hover:rotate-6`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Orbital Ring (Tilted elliptical sweep around the pod and intersecting the coffee bean) */}
      <path
        d="M 50 67 C 28 67, 18 63, 21 54 C 24 45, 36 41, 50 42 C 64 43, 79 32, 79 40 C 79 48, 70 57, 50 67 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. Main Vertical Leaf / Seed Pod Contours */}
      <path
        d="M 50 15 C 33 30, 33 65, 50 85 C 67 65, 67 30, 50 15 Z"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. Spine / Central dividing line of the seed pod */}
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="85"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* 4. Left side curve ribs (representing structural veins) */}
      <path
        d="M 38 42 C 41 46, 46 48, 50 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 38 54 C 41 58, 46 60, 50 60"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 41 66 C 43 70, 47 71, 50 71"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* 5. Right side crescent & diagonal ribs */}
      {/* Upper right crescent facet */}
      <path
        d="M 50 15 C 58 26, 59 35, 50 42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 50 28 C 54 32, 54 36, 50 38"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Lower right diagonal bands */}
      <path
        d="M 50 56 L 61 67"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 50 68 L 57 75"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* 6. Rotated Solid Coffee Bean on the right intersection */}
      <g transform="translate(68, 53) rotate(-35)">
        {/* Fill bean shape */}
        <rect
          x="-8"
          y="-13"
          width="16"
          height="26"
          rx="8"
          fill="currentColor"
        />
        {/* Center cleft curve */}
        <path
          d="M -1.5 -13 C -3 -5, 3 5, 1.5 13"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
