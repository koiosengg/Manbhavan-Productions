import React, { useRef, useState, useEffect } from "react";
import RealityImage from "../../assets/Home/Reality/Reality Image.png";
import Animation1 from "./Reality/Animation1";
import Animation2 from "./Reality/Animation2";
import Animation3 from "./Reality/Animation3";
import Animation4 from "./Reality/Animation4";

function Reality() {
  const testimonyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 LOOP LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4); // loop 0 → 3
    }, 6000); // 6 seconds each

    return () => clearInterval(interval);
  }, []);

  // 🌈 Background change (your existing logic)
  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      { threshold: 0.5 },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper" ref={testimonyRef} id="reality">
      <div className="home-reality">
        <div className="template-heading">
          <h3 className="h3-semibold">
            We Create Stories <br />
            into {activeIndex === 0 && <Animation1 />}
            {activeIndex === 1 && <Animation2 />}
            {activeIndex === 2 && <Animation3 />}
            {activeIndex === 3 && <Animation4 />}
          </h3>
        </div>

        <div className="home-reality-container">
          <img src={RealityImage} />
          <p className="xl-regular">
            Manbhavan Productions is a creative production house working across
            advertising, films, music videos, and branded content, focused on
            crafting visuals that feel human, emotionally resonant, and
            thoughtfully produced.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reality;
