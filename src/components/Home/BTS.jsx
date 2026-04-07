import React, { useState, useRef, useEffect } from "react";
import BTS1 from "../../assets/Home/BTS/BTS Image 1.png";
import BTS2 from "../../assets/Home/BTS/BTS Image 2.png";
import BTS3 from "../../assets/Home/BTS/BTS Image 3.png";
import BTS4 from "../../assets/Home/BTS/BTS Image 4.png";
import BTS5 from "../../assets/Home/BTS/BTS Image 5.png";

function BTS() {
  const baseSet = [BTS1, BTS2, BTS3, BTS4, BTS5];

  const [images, setImages] = useState(baseSet);

  const [translateX, setTranslateX] = useState(0);
  const [activeStart, setActiveStart] = useState(0);
  const [fixedHeight, setFixedHeight] = useState(0);

  const slideRef = useRef(null);

  const baseClasses = [3, 2, 1, 0, 1, 2, 3];
  const STEP = 16;

  const next = () => {
    setTranslateX((prev) => prev - STEP);
    setActiveStart((prev) => prev + 1);
  };

  const prev = () => {
    setTranslateX((prev) => prev + STEP);
    setActiveStart((prev) => prev - 1);
  };

  // ✅ append (controlled)
  useEffect(() => {
    if (activeStart + 7 >= images.length - 7) {
      setImages((prev) => {
        if (prev.length > 50) return prev; // limit growth
        return [...prev, ...baseSet];
      });
    }
  }, [activeStart, images.length]);

  // ✅ prepend (controlled)
  useEffect(() => {
    if (activeStart <= 2) {
      setImages((prev) => {
        if (prev.length > 50) return prev; // limit growth
        return [...baseSet, ...prev];
      });

      setActiveStart((prev) => prev + 7);
      setTranslateX((prev) => prev - STEP * 7);
    }
  }, [activeStart]);

  // ✅ height lock once
  useEffect(() => {
    const timeout = setTimeout(() => {
      const el = slideRef.current?.querySelector(".home-bts-set-0");
      if (el) setFixedHeight(el.offsetHeight);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="home-brands-wrapper">
      <div className="home-bts">
        <div className="template-heading">
          <h3 className="h3-semibold">
            What We Have Got <br />
            <span>Behind the Scenes</span>
          </h3>
          <p className="m-regular">
            Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
            diam hac consectetur eget.{" "}
          </p>
        </div>

        <div className="home-bts-container">
          <div
            ref={slideRef}
            className="home-bts-slide"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.6s ease",
              height: fixedHeight ? `${fixedHeight}px` : "auto",
            }}
          >
            {images.map((img, index) => {
              const isActive = index >= activeStart && index < activeStart + 7;

              return (
                <article
                  key={index}
                  className={`home-bts-set ${
                    isActive
                      ? `home-bts-set-${baseClasses[index - activeStart]}`
                      : ""
                  }`}
                >
                  <img src={img} alt="" />
                </article>
              );
            })}
          </div>

          <div className="home-brands-buttons">
            <button className="home-brands-button" onClick={prev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ transform: "rotate(180deg)" }}
              >
                <mask
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>

            <button className="home-brands-button" onClick={next}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BTS;
