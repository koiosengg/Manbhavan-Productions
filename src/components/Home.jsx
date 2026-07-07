import React from "react";
import Contact from "./Home/Contact";
import Services from "./Home/Services";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
// import Testimony from "./Home/Testimony";
import Brands from "./Home/Brands";
import Reality from "./Home/Reality";
import Parle from "./Home/Parle";
import HoliSlider from "./Home/HoliSlider";
import Impact from "./Home/Impact";
import BTS from "./Home/BTS";
import Art from "./Home/Art";

function Home() {
  return (
    <>
      <section id="home">
        <Banner />
      </section>
      <Marquee />
      <section id="about">
        <Reality />
      </section>
      <Parle />
      <Brands />
      <HoliSlider />
      <Impact />
      <section id="services">
        <Services />
      </section>
      <Art />
      <BTS />
      {/* <Testimony /> */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
