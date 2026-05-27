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
    }, 3000); // 3 seconds each

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
            We Create Stories <br className="heading-br-desktop" />
            into{" "}
            <span className="home-reality-animations">
              {activeIndex === 0 && <Animation1 />}
              {activeIndex === 1 && <Animation2 />}
              {activeIndex === 2 && <Animation3 />}
              {activeIndex === 3 && <Animation4 />}
            </span>
            <span className="home-reality-text">
              {activeIndex === 0 && "Reality."}
              {activeIndex === 1 && "Visuals."}
              {activeIndex === 2 && "Emotions."}
              {activeIndex === 3 && "Cinema."}
            </span>
          </h3>
        </div>

        <div className="home-reality-container">
          <img src={RealityImage} />
          <p className="xl-regular">
            Manbhavan Productions was born from a simple belief that most
            powerful stories are the ones that feel deeply human. <br />
            <br />
            We are a creative production house crafting films, advertisements,
            music videos, and branded content that don’t just look beautiful,
            but leave a feeling behind. <br />
            <br />
            Every frame we create is rooted in emotion, honesty, and thoughtful
            storytelling. Whether it’s a brand trying to connect with people, an
            artist expressing a vision, or a story waiting to be told, we
            approach every project with heart, intention, and cinematic care.
            <br />
            <br />
            At Manbhavan Productions, we create experiences that resonate,
            stories that stay, and moments that feel real long after the screen
            fades to black
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reality;
