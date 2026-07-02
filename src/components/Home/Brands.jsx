import React, { useRef, useState, useEffect } from "react";
import HusbandAndWife from "../../assets/Home/Parle/Campaign 1/Husband and Wife.mp4";
import Grandparents from "../../assets/Home/Parle/Campaign 1/Grandparents.mp4";
import MotherAndDaughter from "../../assets/Home/Parle/Campaign 1/Mother and Daughter.mp4";
import Family from "../../assets/Home/Parle/Campaign 1/Family.mp4";
import ParleHoli16x9 from "../../assets/Home/Parle/Campaign 1/Parle Holi 9x16.mp4";

const YOUTUBE_LINKS = [
  "https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", // Husband and Wife
  "https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", // Grandparents
  "https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", // Mother and Daughter
  "https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", // Family
  "https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", // Parle Holi 9x16
];

function Brands() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !slideRef.current) return;

    const updateMaxTranslate = () => {
      if (!containerRef.current || !slideRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = slideRef.current.scrollWidth;
      const isMobile = window.innerWidth <= 1200;
      const extraSpace = isMobile ? 0 : 80;

      const computedMax = containerWidth - scrollWidth - extraSpace;
      setMaxTranslate(computedMax);

      setTranslateX((prev) => {
        if (computedMax >= 0) return 0;
        if (prev < computedMax) return computedMax;
        return prev;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateMaxTranslate();
    });

    resizeObserver.observe(containerRef.current);
    resizeObserver.observe(slideRef.current);

    updateMaxTranslate();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleNext = () => {
    if (!containerRef.current || !slideRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const cardElement = slideRef.current.querySelector(".home-brands-set");
    const cardWidth = cardElement
      ? cardElement.offsetWidth
      : containerWidth * 0.4;
    const moveAmount = cardWidth + 20;

    setTranslateX((prev) => {
      const next = prev - moveAmount;
      return next < maxTranslate ? maxTranslate : next;
    });
  };

  const handlePrev = () => {
    if (!containerRef.current || !slideRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const cardElement = slideRef.current.querySelector(".home-brands-set");
    const cardWidth = cardElement
      ? cardElement.offsetWidth
      : containerWidth * 0.4;
    const moveAmount = cardWidth + 20;

    setTranslateX((prev) => {
      const next = prev + moveAmount;
      return next > 0 ? 0 : next;
    });
  };

  const isFirst = translateX === 0;
  const isLast = translateX <= maxTranslate || maxTranslate >= 0;

  const testimonyRef = useRef(null);

  return (
    <section className="home-brands-wrapper" id="brands">
      <div className="home-brands" ref={testimonyRef}>
        <div className="home-brands-left">
          <div className="template-heading">
            <h3 className="h3-semibold">
              A Collection of Works Crafted for{" "}
              <br className="heading-br-desktop" />
              <span>Brands.</span>
            </h3>
            <p className="m-regular">
              Brand films, campaigns, and everything in between. Across
              categories, formats, and the occasional impossible deadline.
            </p>
          </div>
          <div className="home-brands-buttons">
            <button
              className="home-brands-button"
              onClick={handlePrev}
              style={{
                opacity: isFirst ? 0.3 : 1,
                cursor: isFirst ? "default" : "pointer",
                pointerEvents: isFirst ? "none" : "auto",
              }}
            >
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
            <button
              className="home-brands-button"
              onClick={handleNext}
              style={{
                opacity: isLast ? 0.3 : 1,
                cursor: isLast ? "default" : "pointer",
                pointerEvents: isLast ? "none" : "auto",
              }}
            >
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
        <div className="home-brands-right" ref={containerRef}>
          <div
            className="home-brands-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
            }}
          >
            <article className="home-brands-set">
              <div className="home-brands-video-wrapper">
                <video
                  src={`${HusbandAndWife}?v=1`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => window.open(YOUTUBE_LINKS[0], "_blank")}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </div>
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <div className="home-brands-video-wrapper">
                <video
                  src={`${Grandparents}?v=1`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => window.open(YOUTUBE_LINKS[1], "_blank")}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </div>
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <div className="home-brands-video-wrapper">
                <video
                  src={`${MotherAndDaughter}?v=1`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => window.open(YOUTUBE_LINKS[2], "_blank")}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </div>
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <div className="home-brands-video-wrapper">
                <video
                  src={`${Family}?v=1`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => window.open(YOUTUBE_LINKS[3], "_blank")}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </div>
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <div className="home-brands-video-wrapper">
                <video
                  src={`${ParleHoli16x9}?v=1`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => window.open(YOUTUBE_LINKS[4], "_blank")}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </div>
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
