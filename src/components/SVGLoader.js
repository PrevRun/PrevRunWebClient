import React from 'react';

const SVGLoader = () => (
  <div>
    <style>
      {`
        body {
          background: #e3f2fd;
        }
        svg {
          position: absolute; 
          width: 100%; height: 100%;
        }
        svg text {
          animation: stroke 2s alternate;
          stroke-width: 2;
          stroke: #DAA520;
          fill: #FFC059;
          font-size: 140px;
        }
        @media screen and (max-width: 768px) {
          svg text {
            fontSize: 15em; /* Adjust font size for smaller screens */
          }
        }
        @keyframes stroke {
          0%   {
              fill: rgba(255, 192, 89, 0); /* Inner fill color (#FFC059) */
              stroke: rgba(218, 165, 32, 1); /* Golden outline color */
              stroke-dashoffset: 25%; 
              stroke-dasharray: 0 50%; 
              stroke-width: 2;
          }
          70%  {
              fill: rgba(255, 192, 89, 0); /* Inner fill color (#FFC059) */
              stroke: rgba(218, 165, 32, 1); /* Golden outline color */
          }
          80%  {
              fill: rgba(255, 192, 89, 0); /* Inner fill color (#FFC059) */
              stroke: rgba(218, 165, 32, 1); /* Golden outline color */
              stroke-width: 3; 
          }
          100% {
              fill: rgba(255, 192, 89, 1); /* Inner fill color (#FFC059) */
              stroke: rgba(218, 165, 32, 0); /* Transparent outline */
              stroke-dashoffset: -25%; 
              stroke-dasharray: 50% 0; 
              stroke-width: 0;
          }
      }
      `}
    </style>
    <svg viewBox="0 0 1320 300">
      <text x="50%" y="50%" dy=".35em" textAnchor="middle">
        Prevun
      </text>
    </svg>
  </div>
);

export default SVGLoader;
