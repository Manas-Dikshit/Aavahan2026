
import React from 'react';

const ArrowUpRight = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Marque1() {
  const items = Array.from({ length: 13 });

  return (
    <>
      <div className="marquee-container">
        <ul>
          {items.map((_, i) => (
            <li key={`m1-${i}`}>
              <span className="name">AAVAHAN26</span>
              <span className="arrow"><ArrowUpRight /></span>
            </li>
          ))}
        </ul>

        <ul aria-hidden="true">
          {items.map((_, i) => (
            <li key={`m2-${i}`}>
              <span className="name">AAVAHAN26</span>
              <span className="arrow"><ArrowUpRight /></span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .marquee-container {
          font-size: 15px;
          padding-block: 10px;
          overflow: hidden;
          user-select: none;
          --gap: 20px;
          display: flex;
          gap: var(--gap);
          background-color: #c0e4f5;
        }

        .marquee-container ul {
          list-style: none;
          flex-shrink: 0;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--gap);
          animation: scroll 20s linear infinite;
          margin: 0;
          padding: 0;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }

        .marquee-container li {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .marquee-container .name {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #2a357d;
        }

        .marquee-container .arrow {
          display: flex;
          align-items: center;
          color: #2a357d;
        }
      `}</style>
    </>
  );
}