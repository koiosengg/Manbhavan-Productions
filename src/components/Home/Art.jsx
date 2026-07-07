import React, { useRef } from "react";
import MindImage from "../../assets/Home/Art/Mind Image.png";

function Art() {
  const testimonyRef = useRef(null);



  return (
    <section className="home-brands-wrapper home-art-section-wrapper" ref={testimonyRef}>
      <div className="home-art-wrapper">
        <section className="home-art">
          <img src={MindImage} alt="Mind Image" />
          <div className="home-art-container">
            <h2>
              THE MIND BEHIND <br /> THE PRODUCTIONS
            </h2>
            <a href="https://www.bhrigavdua.com" target="_blank" rel="noopener noreferrer" className="primary-button">
              <p className="m-bold">Meet the Founder</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_515_497"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect
                    width="24"
                    height="24"
                    transform="matrix(-1 0 0 1 24 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_515_497)">
                  <path
                    d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Art;
