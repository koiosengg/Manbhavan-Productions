import React from "react";
import Limca from "../../assets/Home/Marquee/Limca.png";
import Parle from "../../assets/Home/Marquee/Parle.png";
import MahindraTractors from "../../assets/Home/Marquee/MahindraT.png";
import Lipton from "../../assets/Home/Marquee/Lipton.png";
import Pukka from "../../assets/Home/Marquee/Pukka.png";
import Cinea from "../../assets/Home/Marquee/Cinea.jpeg";
// import FamousStudios from "../../assets/Home/Marquee/Famous-studios.png";

/* 
  Missing Brand Assets to be added for Manbhavan Marquee:
  - Famous Studios
  - Colorblind
  - River Engg.
  - Arwachin Bharti Bhawan  
*/

function Marquee() {
  return (
    <section className="home-marquee">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          <img src={Limca} alt="Limca" />
          <img src={Parle} alt="Parle" />
          <img src={MahindraTractors} alt="Mahindra Tractors" />
          <img src={Lipton} alt="Lipton" />
          <img src={Pukka} alt="Pukka" />
          <img src={Cinea} alt="Cinea" />
          {/* <img src={FamousStudios} alt="Famous Studios" className="famous-studios-logo" /> */}
          <img src={Limca} alt="Limca" />
          <img src={Parle} alt="Parle" />
          <img src={MahindraTractors} alt="Mahindra Tractors" />
          <img src={Lipton} alt="Lipton" />
          <img src={Pukka} alt="Pukka" />
          <img src={Cinea} alt="Cinea" />
          {/* <img src={FamousStudios} alt="Famous Studios" className="famous-studios-logo" /> */}
          <img src={Limca} alt="Limca" />
          <img src={Parle} alt="Parle" />
          <img src={MahindraTractors} alt="Mahindra Tractors" />
          <img src={Lipton} alt="Lipton" />
          <img src={Pukka} alt="Pukka" />
          <img src={Cinea} alt="Cinea" />
          {/* <img src={FamousStudios} alt="Famous Studios" className="famous-studios-logo" /> */}
        </div>
      </div>
      <div className="home-marquee-left"></div>
      <div className="home-marquee-right"></div>
    </section>
  );
}

export default Marquee;
