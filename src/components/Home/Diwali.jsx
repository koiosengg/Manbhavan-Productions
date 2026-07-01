import React, { useCallback, useEffect, useRef, useState } from "react";
import DiwaliImage from "../../assets/Home/Diwali/Diwali Image.png";
import MotherAndDaughter from "../../assets/Home/Parle/Campaign 1/Mother and Daughter.mp4";

function Diwali() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [counts, setCounts] = useState({
    films: 0,
    statics: 0,
    crew: 0,
  });

  const animateValue = useCallback((key, end, duration = 1500) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // ease-out (smooth)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOut * end);

      setCounts((prev) => ({
        ...prev,
        [key]: value,
      }));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const startCounting = useCallback(() => {
    animateValue("films", 4);
    animateValue("statics", 10);
    animateValue("crew", 90);
  }, [animateValue]);

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
  }, [hasAnimated, startCounting]);

  return (
    <section className="home-brands-wrapper" ref={sectionRef}>
      <div className="home-holi home-diwali">
        <div className="home-holi-img">
          <video
            src={MotherAndDaughter}
            autoPlay
            loop
            muted
            playsInline
            onClick={() => window.open("https://youtu.be/GjLc2w6TkfA?si=7VY2kzJ2Jctx5h7g", "_blank")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="home-holi-text">
          <h2>PARLE DIWALI CAMPAIGN</h2>

          <div className="home-holi-sub-text">
            <div className="home-holi-content">
              <h3>
                From Concept to <br /> Screen in just <br />
                <span>{counts.films * 54} Hours.</span>
              </h3>
            </div>

            <p className="l-regular">
              Every view earned through thoughtful storytelling, precise
              execution, and emotionally resonant visuals.
            </p>
          </div>

          <div className="home-diwali-numbers">
            <article className="home-diwali-numbers-set">
              <span>{counts.films}</span>
              <p>Digital Films</p>
            </article>

            <article className="home-diwali-numbers-set">
              <span>{counts.statics}</span>
              <p>Statics</p>
            </article>

            <article className="home-diwali-numbers-set">
              <span>{counts.crew}</span>
              <p>Crew Members</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diwali;
