import React from "react";
import Logo from "../../assets/Home/Banner/Logo.png";
import BackgroundImage1 from "../../assets/Home/Banner/Background Image 1.png";
import BackgroundImage2 from "../../assets/Home/Banner/Background Image 2.png";
import BackgroundImage3 from "../../assets/Home/Banner/Background Image 3.png";
import BackgroundImage4 from "../../assets/Home/Banner/Background Image 4.png";
import BackgroundImage5 from "../../assets/Home/Banner/Background Image 5.png";
import BackgroundImage6 from "../../assets/Home/Banner/Background Image 6.png";
import BackgroundImage7 from "../../assets/Home/Banner/Background Image 7.png";
import BackgroundImage8 from "../../assets/Home/Banner/Background Image 8.png";
import BackgroundImage9 from "../../assets/Home/Banner/Background Image 9.png";
import BackgroundImage10 from "../../assets/Home/Banner/Background Image 10.png";
import BackgroundImage11 from "../../assets/Home/Banner/Background Image 11.png";
import BackgroundImage12 from "../../assets/Home/Banner/Background Image 12.png";
import BackgroundImage13 from "../../assets/Home/Banner/Background Image 13.png";

function Banner() {
  return (
    <section className="home-banner">
      <div className="home-banner-heading">
        <div className="home-banner-heading-text">
          <h1>
            At Manbhavan Productions, <br />{" "}
            <span>Every Frame Carries a Meaning.</span>{" "}
          </h1>
          <p>
            We have partnered with India’s leading brands,
            crafting impactful films that travel across screens and audiences
            nationwide.
          </p>
        </div>
        <a href="#" className="navbar-button">
          <p>Know the Founder</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_622_1774"
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
            <g mask="url(#mask0_622_1774)">
              <path
                d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </div>

      <div className="home-banner-background">
        <div className="home-banner-background-wrapper">
          <div className="home-banner-background-marquee">
            <img src={BackgroundImage1} alt="Background Image 1" />
            <img src={BackgroundImage2} alt="Background Image 1" />
            <img src={BackgroundImage3} alt="Background Image 1" />
            <img src={BackgroundImage4} alt="Background Image 1" />
            <img src={BackgroundImage5} alt="Background Image 1" />
            <img src={BackgroundImage6} alt="Background Image 1" />
            <img src={BackgroundImage7} alt="Background Image 1" />
            <img src={BackgroundImage8} alt="Background Image 1" />
            <img src={BackgroundImage9} alt="Background Image 1" />
            <img src={BackgroundImage10} alt="Background Image 1" />
            <img src={BackgroundImage11} alt="Background Image 1" />
            <img src={BackgroundImage12} alt="Background Image 1" />
            <img src={BackgroundImage13} alt="Background Image 1" />
            <img src={BackgroundImage1} alt="Background Image 1" />
            <img src={BackgroundImage2} alt="Background Image 1" />
            <img src={BackgroundImage3} alt="Background Image 1" />
            <img src={BackgroundImage4} alt="Background Image 1" />
            <img src={BackgroundImage5} alt="Background Image 1" />
            <img src={BackgroundImage6} alt="Background Image 1" />
            <img src={BackgroundImage7} alt="Background Image 1" />
            <img src={BackgroundImage8} alt="Background Image 1" />
            <img src={BackgroundImage9} alt="Background Image 1" />
            <img src={BackgroundImage10} alt="Background Image 1" />
            <img src={BackgroundImage11} alt="Background Image 1" />
            <img src={BackgroundImage12} alt="Background Image 1" />
            <img src={BackgroundImage13} alt="Background Image 1" />
          </div>
        </div>
        <div className="home-banner-container">
          <img
            src={Logo}
            alt="Logo.png Logo"
            className="home-banner-container-logo"
          />
        </div>
        <div className="home-banner-background-wrapper">
          <div className="home-banner-background-marquee">
            <img src={BackgroundImage1} alt="Background Image 1" />
            <img src={BackgroundImage2} alt="Background Image 1" />
            <img src={BackgroundImage3} alt="Background Image 1" />
            <img src={BackgroundImage4} alt="Background Image 1" />
            <img src={BackgroundImage5} alt="Background Image 1" />
            <img src={BackgroundImage6} alt="Background Image 1" />
            <img src={BackgroundImage7} alt="Background Image 1" />
            <img src={BackgroundImage8} alt="Background Image 1" />
            <img src={BackgroundImage9} alt="Background Image 1" />
            <img src={BackgroundImage10} alt="Background Image 1" />
            <img src={BackgroundImage11} alt="Background Image 1" />
            <img src={BackgroundImage12} alt="Background Image 1" />
            <img src={BackgroundImage13} alt="Background Image 1" />
            <img src={BackgroundImage1} alt="Background Image 1" />
            <img src={BackgroundImage2} alt="Background Image 1" />
            <img src={BackgroundImage3} alt="Background Image 1" />
            <img src={BackgroundImage4} alt="Background Image 1" />
            <img src={BackgroundImage5} alt="Background Image 1" />
            <img src={BackgroundImage6} alt="Background Image 1" />
            <img src={BackgroundImage7} alt="Background Image 1" />
            <img src={BackgroundImage8} alt="Background Image 1" />
            <img src={BackgroundImage9} alt="Background Image 1" />
            <img src={BackgroundImage10} alt="Background Image 1" />
            <img src={BackgroundImage11} alt="Background Image 1" />
            <img src={BackgroundImage12} alt="Background Image 1" />
            <img src={BackgroundImage13} alt="Background Image 1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
