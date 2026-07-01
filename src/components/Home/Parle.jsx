import React, { useRef, useState, useEffect } from "react";
import HusbandAndWife from "../../assets/Home/Parle/Campaign 1/Husband and Wife.mp4";
import Grandparents from "../../assets/Home/Parle/Campaign 1/Grandparents.mp4";
import MotherAndDaughter from "../../assets/Home/Parle/Campaign 1/Mother and Daughter.mp4";
import Family from "../../assets/Home/Parle/Campaign 1/Family.mp4";
import Campaign11 from "../../assets/Home/Parle/Campaign 1/Campaign 1 1.mp4";
import ParleHoli from "../../assets/Home/Parle/Campaign 1/Parle Holi 16x9.mp4";

function Parle() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const campaigns = [
    {
      prefix: "Glimpses of ",
      highlight: (
        <>
          Parle Diwali <br className="heading-br-desktop" />
          Campaign
        </>
      ),
      videos: [
        HusbandAndWife,
        Grandparents,
        MotherAndDaughter,
        Family,
        Campaign11,
      ],
    },
    {
      prefix: "Glimpses of ",
      highlight: (
        <>
          Parle Holi <br className="heading-br-desktop" />
          Campaign
        </>
      ),
      videos: [
        ParleHoli,
        HusbandAndWife,
        Grandparents,
        MotherAndDaughter,
        Family,
      ],
    },
    {
      prefix: "Glimpses of ",
      highlight: (
        <>
          Parle Brand <br className="heading-br-desktop" />
          Campaign
        </>
      ),
      videos: [
        Campaign11,
        Family,
        MotherAndDaughter,
        Grandparents,
        HusbandAndWife,
      ],
    },
    {
      prefix: "Glimpses of ",
      highlight: (
        <>
          Parle G <br className="heading-br-desktop" />
          Campaign
        </>
      ),
      videos: [Family, Campaign11, ParleHoli, HusbandAndWife, Grandparents],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerWidth(containerRef.current.offsetWidth);

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👉 Move Next
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, campaigns.length - 1));
  };

  // 👉 Move Prev
  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === campaigns.length - 1;
  const translateX = -currentSlide * containerWidth;

  return (
    <section className="home-parle-wrapper">
      <div className="home-parle">
        <div className="template-heading">
          <h3 className="h3-semibold">
            {campaigns[currentSlide].prefix}
            <span>{campaigns[currentSlide].highlight}</span>
          </h3>
        </div>

        <div className="home-parle-container" ref={containerRef}>
          <div
            className="home-parle-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
              display: "flex",
            }}
          >
            {campaigns.map((campaign, i) => (
              <div key={i} className="cinematography-work-grid other-work-grid">
                {campaign.videos.map((vid, j) => (
                  <article className="cinematography-work-set" key={j}>
                    <video src={vid} autoPlay loop muted playsInline />
                  </article>
                ))}
              </div>
            ))}
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
      </div>
    </section>
  );
}

export default Parle;
