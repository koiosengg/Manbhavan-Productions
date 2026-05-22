import React, { useRef, useState, useEffect } from "react";
import CommercialsImage from "../../assets/Home/Services/Commercials/IMAGE.png";
import CommercialsSVG from "../../assets/Home/Services/Commercials/megaphone-animated.svg";
import NarrativesImage from "../../assets/Home/Services/Narratives/IMAGE.png";
import ClapperboardSVG from "../../assets/Home/Services/Narratives/clapperboard-animated.svg";
import VisualImage from "../../assets/Home/Services/Visual/IMAGE.png";
import CameraSVG from "../../assets/Home/Services/Visual/camera-animated.svg";
import AIImage from "../../assets/Home/Services/AI/IMAGE.png";
import RobotSVG from "../../assets/Home/Services/AI/robot-animated.svg";
import EventImage from "../../assets/Home/Services/Event/IMAGE.png";
import EventCameraSVG from "../../assets/Home/Services/Event/camera-animated.svg";

const slides = [
  {
    image: CommercialsImage,
    svg: CommercialsSVG,
    title: "Brand & Commercials",
    desc: "Brand Films | Digital Advertisement | TVC's | Corporate Films | Product Films",
    imgAlt: "Brand & Commercials Image",
    svgAlt: "Brand & Commercials SVG",
  },
  {
    image: NarrativesImage,
    svg: ClapperboardSVG,
    title: "Narratives",
    desc: "Feature Films | Short Films | Web Series",
    imgAlt: "Narratives Image",
    svgAlt: "Narratives SVG",
  },
  {
    image: VisualImage,
    svg: CameraSVG,
    title: "Visual & Cultural",
    desc: "Music Videos | Fashion Films | Documentary | Talk Shows",
    imgAlt: "Visual & Cultural Image",
    svgAlt: "Visual & Cultural SVG",
  },
  {
    image: AIImage,
    svg: RobotSVG,
    title: "AI Filmmaking",
    desc: "AI Concept Visualization | Virtual Scene Creation | AI Generated Storyboarding | Hybrid AI + Live Action Production | AI Commercial & Digital Content Creation",
    imgAlt: "AI Image",
    svgAlt: "AI SVG",
  },
  {
    image: EventImage,
    svg: EventCameraSVG,
    title: "Event Management",
    desc: "Corporate Events | Live Broadcasting | Experiential Installations | Stage Design & Technical Setup",
    imgAlt: "Event Management Image",
    svgAlt: "Event Management SVG",
  },
];

function Services() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollState, setScrollState] = useState({ isFirst: true, isLast: false });

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1200);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !slideRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = slideRef.current.scrollWidth;
      setMaxTranslate(containerWidth - scrollWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getSlideWidth = () => {
    const firstSlide = slideRef.current?.firstElementChild;
    return firstSlide?.offsetWidth || containerRef.current?.offsetWidth || 0;
  };

  const handleNext = () => {
    if (isMobile) {
      const container = containerRef.current;
      if (!container) return;
      container.scrollBy({ left: getSlideWidth(), behavior: "smooth" });
    } else {
      const containerWidth = containerRef.current.offsetWidth;
      setTranslateX((prev) => {
        const next = prev - containerWidth;
        return next < maxTranslate ? maxTranslate : next;
      });
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      const container = containerRef.current;
      if (!container) return;
      container.scrollBy({ left: -getSlideWidth(), behavior: "smooth" });
    } else {
      const containerWidth = containerRef.current.offsetWidth;
      setTranslateX((prev) => {
        const next = prev + containerWidth;
        return next > 0 ? 0 : next;
      });
    }
  };

  const isFirst = isMobile ? scrollState.isFirst : translateX === 0;
  const isLast = isMobile ? scrollState.isLast : translateX <= maxTranslate + 1;

  // — Native scroll state for mobile —
  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const isAtStart = container.scrollLeft <= 1;
      const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
      setScrollState({ isFirst: isAtStart, isLast: isAtEnd });
    };

    container.addEventListener("scroll", onScroll);
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);



  return (
    <section className="home-services" id="services">
      <div className="template-heading">
        <h3 className="h3-semibold">
          What We{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M14.825 7C8.29438 7 3 12.1652 3 18.5364C3 30.0729 16.975 40.5606 24.5 43C32.025 40.5606 46 30.0729 46 18.5364C46 12.1652 40.7056 7 34.175 7C30.176 7 26.6393 8.93708 24.5 11.9019C23.4094 10.3869 21.9608 9.1504 20.2767 8.29715C18.5926 7.44389 16.7226 6.99896 14.825 7Z"
              fill="#C3262B"
              stroke="#C3262B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <span>
            & <br className="heading-br-desktop" />
            Go Big On
          </span>
        </h3>
        <p className="m-regular">
          Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
          diam hac consectetur eget.{" "}
        </p>
      </div>

      {/* Slider */}
      <div className="home-services-slider-container">
        <div className="home-services-slider" ref={containerRef}>
          <div
            className="home-services-track"
            ref={slideRef}
            style={{
              transform: isMobile ? undefined : `translateX(${translateX}px)`,
              transition: isMobile ? undefined : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              display: "flex",
            }}
          >
            {slides.map((s, i) => (
              <article className="home-services-set" key={i}>
                <div className="home-services-set-img">
                  <img src={s.image} alt={s.imgAlt} />
                </div>
                <div className="home-services-set-content">
                  <img src={s.svg} alt={s.svgAlt} />
                  <div className="home-services-set-text">
                    <h5 className="h5-semibold">{s.title}</h5>
                    <p className="xxl-regular">{s.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Arrows */}
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
                id="svc-mask-prev"
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
              <g mask="url(#svc-mask-prev)">
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
                id="svc-mask-next"
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
              <g mask="url(#svc-mask-next)">
                <path
                  d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                  fill="#1B1B1B"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
