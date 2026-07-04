import React from "react";
import Parle from "../../assets/Home/Marquee/Parle.png";
import Limca from "../../assets/Home/Marquee/Limca.png";
import MahindraTractors from "../../assets/Home/Marquee/MahindraT.png";
import FamousStudios from "../../assets/Home/Marquee/Famous-studios.png";
import Cinea from "../../assets/Home/Marquee/Cinea.jpeg";
import Pukka from "../../assets/Home/Marquee/Pukka.png";
import Lipton from "../../assets/Home/Marquee/Lipton.png";
import Sugarfit from "../../assets/Home/Marquee/Sugar fit.png";
import Bgmi from "../../assets/Home/Marquee/BGMI.png";
import Tata from "../../assets/Home/Marquee/Tata.png";
import Dream11 from "../../assets/Home/Marquee/Dream11.png";
import UPwarriorz from "../../assets/Home/Marquee/UP Warriorz.png";

function Marquee() {
  const logos = [
    { src: Parle, alt: "Parle" },
    { src: Limca, alt: "Limca" },
    { src: MahindraTractors, alt: "Mahindra Tractors" },
    { src: FamousStudios, alt: "Famous Studios", className: "famous-studios-logo" },
    { src: Cinea, alt: "Cinea" },
    { src: Pukka, alt: "Pukka" },
    { src: Lipton, alt: "Lipton" },
    { src: Sugarfit, alt: "Sugar fit" },
    { src: Bgmi, alt: "BGMI" },
    { src: Tata, alt: "Tata" },
    { src: Dream11, alt: "Dream11" },
    { src: UPwarriorz, alt: "UP Warriorz" },
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
