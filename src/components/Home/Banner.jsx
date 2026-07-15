import React from "react";
import Logo from "../../assets/Home/Banner/Logo.webp";

// Import all 59 homepage WebP images dynamically
const bannerImages = Object.values(
  import.meta.glob("../../assets/Home/Banner/Manbhavan Homepage/*.webp", {
    eager: true,
    import: "default",
  }),
);

// Split images: 29 for top row, 30 for bottom row
const topMarqueeImages = bannerImages.slice(0, 29);
const bottomMarqueeImages = bannerImages.slice(29);

function Banner() {
  return (
    <section className="home-banner">
      <div className="home-banner-heading">
        <div className="home-banner-heading-text">
          <h1>
            At Manbhavan Productions, <br />
            <span>We create what stays.</span>
          </h1>
        </div>
        <a
          href="https://www.bhrigavdua.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
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
            {topMarqueeImages.map((src, index) => (
              <img
                key={`marquee-top-${index}`}
                src={src}
                alt={`Banner Image ${index + 1}`}
              />
            ))}
            {topMarqueeImages.map((src, index) => (
              <img
                key={`marquee-top-repeat-${index}`}
                src={src}
                alt={`Banner Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="home-banner-container">
          <img src={Logo} alt="Logo" className="home-banner-container-logo" />
        </div>
        <div className="home-banner-background-wrapper">
          <div className="home-banner-background-marquee">
            {bottomMarqueeImages.map((src, index) => (
              <img
                key={`marquee-bottom-${index}`}
                src={src}
                alt={`Banner Image ${index + 30}`}
              />
            ))}
            {bottomMarqueeImages.map((src, index) => (
              <img
                key={`marquee-bottom-repeat-${index}`}
                src={src}
                alt={`Banner Image ${index + 30}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
