import React from 'react';

const Preloader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#e3f2fd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <svg viewBox="0 0 1320 300" style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{
          animation: 'stroke 3s  alternate',
          strokeWidth: '2',
          stroke: '#DAA520',
          fill: '#FFC059',
          fontSize: '140px'
        }}>
          Prevun
        </text>
      </svg>
      <style jsx global>{`
        @keyframes stroke {
          0% {
            fill: rgba(255, 192, 89, 0);
            stroke: rgba(218, 165, 32, 1);
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 2;
          }
          70% {
            fill: rgba(255, 192, 89, 0);
            stroke: rgba(218, 165, 32, 1);
          }
          80% {
            fill: rgba(255, 192, 89, 0);
            stroke: rgba(218, 165, 32, 1);
            stroke-width: 3;
          }
          100% {
            fill: rgba(255, 192, 89, 1);
            stroke: rgba(218, 165, 32, 0);
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 0;
          }
        }
        @media (max-width: 390px) {
          svg text {
            fontSize: 4em; /* Adjust the font size for small devices */
          }
        }

        @media (max-width: 576px) {
          svg text {
            fontSize: 60px; /* Adjust the font size for small devices */
          }
        }

        @media (min-width: 577px) and (max-width: 767px) {
          svg text {
            fontSize: 80px; /* Adjust the font size for medium devices */
          }
        }

        @media (min-width: 768px) {
          svg text {
            fontSize: 100px; /* Adjust the font size for large devices */
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
