import React from 'react';

const SVGLoader = () => (
  <div>
    <style>
      {`
        body {
          background: #FFFCF7;
        }
        svg {
          position: absolute; 
          width: 100%; height: 100%;
          animation: fadeOut 2s forwards; /* Add fade-out animation */
        }
        svg text {
          animation: stroke 2s alternate;
          stroke-width: 2;
          stroke: #DAA520;
          fill: #FFC059;
          font-size: 140px;
          font-family: "Arial"
        }
        @media screen and (max-width: 768px) {
          svg text {
            font-size: 35vh;
            mb: '4rem';
          }
          body {
            overflowY: none;
          }
        }
        @keyframes stroke {
          0%   {
              fill: rgba(255, 192, 89, 0);
              stroke: #002244;
              stroke-dashoffset: 25%; 
              stroke-dasharray: 0 50%; 
              stroke-width: 2;
          }
          40%  {
              fill: rgba(255, 192, 89, 0);
              stroke: #002244;
          }
          70%  {
              fill: rgba(255, 192, 89, 0);
              stroke: #002244;
              stroke-width: 3; 
          }
          98% {
              fill: #00356B;
              stroke: #00538C;
              stroke-dashoffset: -25%; 
              stroke-dasharray: 50% 0; 
              stroke-width: 0;
          }
        }
        @keyframes fadeOut {
          98%   {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}
    </style>
    <svg viewBox="0 0 1320 300">
      <text x="50%" y="50%" dy=".35em" textAnchor="middle">
        Prevrun
      </text>
    </svg>
  </div>
);

export default SVGLoader;
