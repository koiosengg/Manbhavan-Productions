import React, { useEffect, useRef, useState } from "react";
import PostProduction from "../../assets/Home/Impact/Post Production.svg";
import Development from "../../assets/Home/Impact/Development.svg";
import PreProduction from "../../assets/Home/Impact/Pre Production.svg";
import Timeline from "../../assets/Home/Impact/Timeline.png";
import Line from "../../assets/Home/Impact/Timeline Line.png";

function Impact() {
  const items = [
    { img: PostProduction, text: "Post Production" },
    { img: Development, text: "Development & Strategy" },
    { img: PreProduction, text: "Pre Production" },
  ];

  const TOTAL_ITEMS = items.length;
  const ITEM_HEIGHT = 60;
  const INTERVAL = 2500;
  const TRANSITION_TIME = 600;

  const [activeIndex, setActiveIndex] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [animate, setAnimate] = useState(true);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_ITEMS);
      setTranslateY((prev) => prev - ITEM_HEIGHT);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const resetPoint = ITEM_HEIGHT * TOTAL_ITEMS;

    if (Math.abs(translateY) >= resetPoint) {
      setTimeout(() => {
        setAnimate(false);
        setTranslateY(0);
      }, TRANSITION_TIME);
    } else {
      setAnimate(true);
    }
  }, [translateY]);

  const testimonyRef = useRef(null);

  return (
    <section className="home-impact-wrapper" ref={testimonyRef}>
      <div className="home-impact">
        <div className="template-heading">
          <h3 className="h3-semibold">
            How ideas create <br className="heading-br-desktop" />
            <span>impact.</span>
          </h3>
          <p className="m-regular">
            We handle every stage of a film, from the first brief to the final
            delivery
          </p>
        </div>

        <div className="home-impact-container">
          <div className="home-impact-container-left">
            <div
              className="home-impact-left"
              style={{
                transform: `translateY(${translateY}px)`,
                transition: animate ? "transform 0.6s ease-in-out" : "none",
              }}
            >
              {duplicatedItems.map((item, index) => (
                <article
                  key={index}
                  className={`home-impact-left-set ${
                    index % TOTAL_ITEMS === activeIndex
                      ? "home-impact-left-set-active"
                      : ""
                  }`}
                >
                  <div className="home-impact-left-set-icon">
                    <img src={item.img} alt={item.text} />
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="home-impact-container-right">
            <img src={Line} className="home-impact-line" />

            <div className="home-impact-right">
              <div className="home-impact-right-marquee">
                <img src={Timeline} alt="Timeline" />
                <img src={Timeline} alt="Timeline" />
              </div>
            </div>
            <div className="home-impact-right-bottom"></div>
          </div>
          <h3 className="home-impact-text">
            <span> This is how stories are crafted.</span>{" "}
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
            </svg>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Impact;
