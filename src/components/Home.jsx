import React, { Suspense, lazy } from "react";
import Banner from "./Home/Banner";
import SEO from "./SEO";
import { HomePageStructuredData } from "../structured-data/index.jsx";


const Contact = lazy(() => import("./Home/Contact"));
const Services = lazy(() => import("./Home/Services"));
const Marquee = lazy(() => import("./Home/Marquee"));
const Brands = lazy(() => import("./Home/Brands"));
const Reality = lazy(() => import("./Home/Reality"));
const Parle = lazy(() => import("./Home/Parle"));
const HoliSlider = lazy(() => import("./Home/HoliSlider"));
const Impact = lazy(() => import("./Home/Impact"));
const BTS = lazy(() => import("./Home/BTS"));
const Art = lazy(() => import("./Home/Art"));

function Home() {
  return (
    <>
      <SEO
        title="Manbhavan Productions"
        description="Manbhavan Productions crafts brand films, digital campaigns, and creative content for leading brands across India."
      />
      <HomePageStructuredData />
      <section id="home">
        <Banner />
      </section>
      <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
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
      </Suspense>
    </>
  );
}

export default Home;
