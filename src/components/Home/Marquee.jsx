import React from "react";
import Parle from "../../assets/Home/Marquee/Parle.webp";
import Limca from "../../assets/Home/Marquee/Limca.webp";
import MahindraTractors from "../../assets/Home/Marquee/MahindraT.webp";
import FamousStudios from "../../assets/Home/Marquee/Famous-studios.webp";
import Cinea from "../../assets/Home/Marquee/Cinea.webp";
import Pukka from "../../assets/Home/Marquee/Pukka.webp";
import Lipton from "../../assets/Home/Marquee/Lipton.webp";

function Marquee() {
  const logos = [
    { src: Lipton, alt: "Lipton" },
    { src: Parle, alt: "Parle" },
    { src: Pukka, alt: "Pukka" },
    { src: Limca, alt: "Limca" },
    { src: MahindraTractors, alt: "Mahindra Tractors" },
    // { type: "text", text: "Colorblind" },
    // { type: "text", text: "River Engg." },
    // { type: "text", text: "Arwachin Bharti Bhawan" },
    { src: Cinea, alt: "Ciena" },
    { src: FamousStudios, alt: "Famous Studios", className: "famous-studios-logo" },
  ];

  return (
    <section className="home-marquee">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => (
            <img key={`a-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
          {logos.map((logo, i) => (
            <img key={`b-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
        </div>
      </div>
      <div className="home-marquee-left"></div>
      <div className="home-marquee-right"></div>
    </section>
  );
}

export default Marquee;
