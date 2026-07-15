import React, { useRef, useState, useEffect } from "react";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

import CommercialsSVG from "../../assets/Home/Services/Commercials/megaphone-animated.svg";
import ClapperboardSVG from "../../assets/Home/Services/Narratives/clapperboard-animated.svg";
import CameraSVG from "../../assets/Home/Services/Visual/camera-animated.svg";
import RobotSVG from "../../assets/Home/Services/AI/robot-animated.svg";
import EventCameraSVG from "../../assets/Home/Services/Event/camera-animated.svg";

const CommercialsImage = getCloudinaryImageUrl("v1784112247/IMAGE_n4fa2g");
const NarrativesImage = getCloudinaryImageUrl("v1784112192/IMAGE_nocnyi");
const VisualImage = getCloudinaryImageUrl("v1784112215/IMAGE_vjqgvi");
const AIImage = getCloudinaryImageUrl("v1784112265/IMAGE_sjuz3q");
const EventImage = getCloudinaryImageUrl("v1784112232/IMAGE_oquu52");

const slides = [
  {
    image: CommercialsImage,
    svg: CommercialsSVG,
    title: "Brand Films ",
    desc: "Commercials | Digital Advertisement | TVC's | Corporate Films | Product Films",
    imgAlt: "Brand & Commercials Image",
    svgAlt: "Brand & Commercials SVG",
  },
  {
    image: NarrativesImage,
    svg: ClapperboardSVG,
    title: "Narratives",
    desc: "Feature Films | Short Films | Web Series | Documentaries",
    imgAlt: "Narratives Image",
    svgAlt: "Narratives SVG",
  },
  {
    image: VisualImage,
    svg: CameraSVG,
    title: "Visual & Cultural",
    desc: "Music Videos | Fashion Films | Podcasts | Talk Shows",
    imgAlt: "Visual & Cultural Image",
    svgAlt: "Visual & Cultural SVG",
  },
  {
    image: AIImage,
    svg: RobotSVG,
    title: "AI Filmmaking",
    desc: "AI Concept Visualization | AI Generated Storyboarding | AI Commercial & Digital Content Creation",
    imgAlt: "AI Image",
    svgAlt: "AI SVG",
  },
  {
    image: EventImage,
    svg: EventCameraSVG,
    title: "Experiences",
    desc: "Event Management | Corporate Events | Live Broadcasting | Stage Design & Technical Setup",
    imgAlt: "Event Management Image",
    svgAlt: "Event Management SVG",
  },
];

function Services() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isSlideMoving, setIsSlideMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1200);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getSlideWidth = () => {
    const firstSlide = slideRef.current?.firstElementChild;
    return firstSlide?.offsetWidth || containerRef.current?.offsetWidth || 0;
  };

  // — Handle infinite snap wrapping after transition ends —
  const handleTransitionEnd = () => {
    if (isMobile) return;
    if (currentSlide === slides.length + 1) {
      setTransitionEnabled(false);
      setCurrentSlide(1); // Snap back to first actual service
    } else if (currentSlide === 0) {
      setTransitionEnabled(false);
      setCurrentSlide(slides.length); // Snap back to last actual service
    } else {
      setIsSlideMoving(false);
    }
  };

  // — Re-enable transition in the next render cycle —
  useEffect(() => {
    if (isMobile) return;
    if (!transitionEnabled) {
      if (slideRef.current) {
        // Trigger reflow
        slideRef.current.offsetHeight;
      }
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
        setIsSlideMoving(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled, isMobile]);

  const handleNext = () => {
    if (isMobile) {
      const container = containerRef.current;
      if (!container) return;
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: getSlideWidth(), behavior: "smooth" });
      }
    } else {
      if (!transitionEnabled || isSlideMoving) return;
      setIsSlideMoving(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      const container = containerRef.current;
      if (!container) return;
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -getSlideWidth(), behavior: "smooth" });
      }
    } else {
      if (!transitionEnabled || isSlideMoving) return;
      setIsSlideMoving(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const translateX = -currentSlide * containerWidth;

  const slidesToRender = isMobile
    ? slides
    : [slides[slides.length - 1], ...slides, slides[0]];

  return (
    <section className="home-services" id="services">
      <div className="template-heading">
        <h3 className="h3-semibold">
          What We{"  "}
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
            Go Big On.
          </span>
        </h3>
        <p className="m-regular">
          Have an idea? Don’t worry we have got you covered <br />
          Umbrella of services under one house
        </p>
      </div>

      {/* Slider */}
      <div className="home-services-slider-container">
        <div className="home-services-slider" ref={containerRef}>
          <div
            className="home-services-track"
            ref={slideRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: isMobile ? undefined : `translateX(${translateX}px)`,
              transition: isMobile
                ? undefined
                : transitionEnabled
                  ? "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
                  : "none",
              display: "flex",
            }}
          >
            {slidesToRender.map((s, i) => (
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
            aria-label="Previous Slide"
            style={{
              cursor: "pointer",
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
            aria-label="Next Slide"
            style={{
              cursor: "pointer",
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
