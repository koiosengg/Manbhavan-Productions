import React, { useState, useRef, useEffect, useCallback } from "react";
import BTS1 from "../../assets/Home/BTS/BTS Image 1.png";
import BTS2 from "../../assets/Home/BTS/BTS Image 2.png";
import BTS3 from "../../assets/Home/BTS/BTS Image 3.png";
import BTS4 from "../../assets/Home/BTS/BTS Image 4.png";
import BTS5 from "../../assets/Home/BTS/BTS Image 5.png";

// ── Constants (outside component — stable, never recreated) ──────────────────
const BASE_SET = [BTS1, BTS2, BTS3, BTS4, BTS5];
const DESKTOP_CLASSES = [3, 2, 1, 0, 1, 2, 3];
const MOBILE_CLASSES = [1, 0, 1];
const STEP = 16; // px per slide (matches inactive item width in CSS)

// Fixed circular buffer: 5 × BASE_SET = 25 items.
// Content at index X === content at index X ± 5 (cyclic), so teleporting
// by ±5 positions is visually seamless.
const IMAGES = [
  ...BASE_SET,
  ...BASE_SET,
  ...BASE_SET,
  ...BASE_SET,
  ...BASE_SET,
]; // indices 0–24

// Keep activeStart inside [3, 17].
// Outside this range we teleport without the user noticing (noTransition).
const TELEPORT_FWD_AT = 17; // when activeStart > this → jump back by 5
const TELEPORT_BWD_AT = 2; //  when activeStart < this → jump forward by 5

function BTS() {
  const [translateX, setTranslateX] = useState(0);
  const [activeStart, setActiveStart] = useState(0);
  const [fixedHeight, setFixedHeight] = useState(0);
  const [baseClasses, setBaseClasses] = useState(DESKTOP_CLASSES);
  const [noTransition, setNoTransition] = useState(false);

  const slideRef = useRef(null);
  // Skip teleport on the very first render (activeStart=0 is intentionally below
  // TELEPORT_BWD_AT but is the correct initial visual position).
  const isFirstRender = useRef(true);

  // ── Responsive classes ────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      setBaseClasses(
        window.innerWidth <= 768 ? MOBILE_CLASSES : DESKTOP_CLASSES
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Height lock via ResizeObserver (reliable vs flaky setTimeout) ─────────
  useEffect(() => {
    let observer;
    const measure = () => {
      const el = slideRef.current?.querySelector(".home-bts-set-0");
      if (el && el.offsetHeight > 0) {
        setFixedHeight(el.offsetHeight);
        return true;
      }
      return false;
    };
    if (!measure()) {
      const container = slideRef.current;
      if (container) {
        observer = new ResizeObserver(() => {
          if (measure()) observer.disconnect();
        });
        observer.observe(container);
      }
    }
    return () => observer?.disconnect();
  }, []);

  // ── Navigation ────────────────────────────────────────────────────────────
  const next = useCallback(() => {
    setTranslateX((prev) => prev - STEP);
    setActiveStart((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    setTranslateX((prev) => prev + STEP);
    setActiveStart((prev) => prev - 1);
  }, []);

  // ── Circular teleport — prevents activeStart from ever leaving safe zone ──
  // Because IMAGES is cyclic (same 5 images repeating), jumping ±5 positions
  // shows identical content. The translateX adjustment compensates exactly
  // (STEP = inactive item width), so the jump is invisible even without
  // noTransition — but we disable it anyway for absolute safety.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (activeStart > TELEPORT_FWD_AT) {
      // Too far forward — jump back 5 positions (same images)
      setNoTransition(true);
      setActiveStart((prev) => prev - BASE_SET.length);
      setTranslateX((prev) => prev + STEP * BASE_SET.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTransition(false))
      );
    } else if (activeStart < TELEPORT_BWD_AT) {
      // Too far back — jump forward 5 positions (same images)
      setNoTransition(true);
      setActiveStart((prev) => prev + BASE_SET.length);
      setTranslateX((prev) => prev - STEP * BASE_SET.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTransition(false))
      );
    }
  }, [activeStart]);

  // ── Auto-slide every 3.5 s ────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next]); // next is stable (useCallback, no deps)

  return (
    <section className="home-brands-wrapper">
      <div className="home-bts">
        <div className="template-heading">
          <h3 className="h3-semibold">
            What We Have Got <br className="heading-br-desktop" />
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
              transition: noTransition ? "none" : "transform 0.6s ease",
              height: fixedHeight ? `${fixedHeight}px` : "auto",
            }}
          >
            {IMAGES.map((img, index) => {
              const visibleCount = baseClasses.length;
              const isActive =
                index >= activeStart && index < activeStart + visibleCount;
              return (
                <article
                  key={index}
                  className={`home-bts-set ${isActive
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
