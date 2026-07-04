import React, { useState, useEffect, useCallback } from "react";

// Dynamically import all 35 WebP images from Phase 1
const btsImages = Object.values(
  import.meta.glob("../../assets/Home/BTS/Phase 1/*.webp", {
    eager: true,
    import: "default",
  })
);

const BASE_SET = btsImages;
const DESKTOP_CLASSES = [1, 0, 0, 1];
const MOBILE_CLASSES = [1, 0, 1];

const L = BASE_SET.length;

function BTS() {
  const [activeStart, setActiveStart] = useState(0);
  const [baseClasses, setBaseClasses] = useState(DESKTOP_CLASSES);

  // ── Responsive classes ────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 1200) {
        setBaseClasses(MOBILE_CLASSES);
      } else {
        setBaseClasses(DESKTOP_CLASSES);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Navigation ────────────────────────────────────────────────────────────
  const next = useCallback(() => {
    if (L > 0) {
      setActiveStart((prev) => (prev + 1) % L);
    }
  }, []);

  const prev = useCallback(() => {
    if (L > 0) {
      setActiveStart((prev) => (prev - 1 + L) % L);
    }
  }, []);

  // ── Auto-slide every 3.5 s ────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next]);

  // Generate the active set of items (including 1 buffer on each end for smooth transition)
  const getVisibleSlides = () => {
    if (L === 0) return [];
    const items = [];
    const count = baseClasses.length;
    // We slice from activeStart - 1 to activeStart + count
    for (let i = -1; i <= count; i++) {
      const originalIndex = (activeStart + i + L) % L;
      items.push({
        img: BASE_SET[originalIndex],
        originalIndex,
        position: i,
      });
    }
    return items;
  };

  return (
    <section className="home-brands-wrapper">
      <div className="home-bts">
        <div className="template-heading">
          <h3 className="h3-semibold">
            What We Have Got <br className="heading-br-desktop" />
            <span>Behind the Scenes</span>
          </h3>
          <p className="m-regular">
            A sneak peek into the creativity, collaboration, and high-energy production that goes into crafting every visual story.
          </p>
        </div>

        <div className="home-bts-container">
          <div className="home-bts-slide">
            {getVisibleSlides().map(({ img, originalIndex, position }) => {
              const count = baseClasses.length;
              const isActive = position >= 0 && position < count;
              const className = isActive
                ? `home-bts-set-${baseClasses[position]}`
                : ""; // Inactive items have no suffix (width 0)
              return (
                <article
                  key={originalIndex}
                  className={`home-bts-set ${className}`}
                >
                  <img src={img} alt={`BTS ${originalIndex + 1}`} />
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
                  id="mask0_bts_prev"
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
                <g mask="url(#mask0_bts_prev)">
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
                  id="mask0_bts_next"
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
                <g mask="url(#mask0_bts_next)">
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
