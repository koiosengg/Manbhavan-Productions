import React, { useEffect, useRef, useState } from "react";
import HoliImage from "../../assets/Home/Holi/Holi Image.png";

function Holi() {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    let start = 0;
    const end = 40;
    const duration = 1500; // animation duration (ms)
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section className="home-brands-wrapper" ref={sectionRef}>
      <div className="home-holi">
        <div className="home-holi-img">
          <img src={HoliImage} alt="Holi Image" />
        </div>

        <div className="home-holi-text">
          <h2>PARLE HOLI CAMPAIGN</h2>

          <div className="home-holi-sub-text">
            <div className="home-holi-content">
              <h3>
                <span>{count}M+</span> <br />
                Views & Still Rolling.
              </h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="62"
                viewBox="0 0 150 62"
                fill="none"
              >
                <path
                  d="M0.415771 61C13.6162 41.2436 22.6021 17.2336 50.7729 22.5C78.9437 27.7664 78.1456 53 100.916 50C123.686 47 141.416 8 141.416 8"
                  stroke="#0F4D4C"
                />
                <circle
                  cx="143.416"
                  cy="6"
                  r="5.5"
                  fill="#0F4D4C"
                  stroke="#0F4D4C"
                />
              </svg>
            </div>

            <p className="l-regular">
              Every view earned through thoughtful storytelling, precise
              execution, and emotionally resonant visuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Holi;
