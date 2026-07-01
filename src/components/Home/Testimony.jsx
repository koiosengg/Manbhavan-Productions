import React, { useEffect, useRef } from "react";
import Comma from "../../assets/Home/Testimony/Comma.png";

function Testimony() {
  const testimonyRef = useRef(null);



  return (
    <section className="home-brands-wrapper" ref={testimonyRef}>
      <div className="home-testimony">
        <div className="template-heading">
          <h3 className="h3-semibold">
            Client{" "}
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
            ,
            <br className="heading-br-desktop" />
            Unfiltered
          </h3>
        </div>
        <div className="home-testimony-container">
          <div className="home-marquee-wrapper">
            <div className="home-marquee-container">
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Michael Chen</h5>
                    <p className="s-regular">San Francisco, USA</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Innovative Arts Studio specializes in interactive
                    installations and immersive art experiences, pushing the
                    boundaries of creativity and engagement in the digital
                    realm.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Shubham</h5>
                    <p className="s-regular">Kolkata, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Visionary Films creates compelling cinematic experiences and
                    documentaries, dedicated to exploring human stories and
                    capturing unique perspectives.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Rajiv Kumar</h5>
                    <p className="s-regular">Bengaluru, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Kriti</h5>
                    <p className="s-regular">Mumbai, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Michael Chen</h5>
                    <p className="s-regular">San Francisco, USA</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Innovative Arts Studio specializes in interactive
                    installations and immersive art experiences, pushing the
                    boundaries of creativity and engagement in the digital
                    realm.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Shubham</h5>
                    <p className="s-regular">Kolkata, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Visionary Films creates compelling cinematic experiences and
                    documentaries, dedicated to exploring human stories and
                    capturing unique perspectives.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Rajiv Kumar</h5>
                    <p className="s-regular">Bengaluru, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Kriti</h5>
                    <p className="s-regular">Mumbai, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Michael Chen</h5>
                    <p className="s-regular">San Francisco, USA</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Innovative Arts Studio specializes in interactive
                    installations and immersive art experiences, pushing the
                    boundaries of creativity and engagement in the digital
                    realm.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Shubham</h5>
                    <p className="s-regular">Kolkata, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Visionary Films creates compelling cinematic experiences and
                    documentaries, dedicated to exploring human stories and
                    capturing unique perspectives.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Rajiv Kumar</h5>
                    <p className="s-regular">Bengaluru, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Kriti</h5>
                    <p className="s-regular">Mumbai, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Michael Chen</h5>
                    <p className="s-regular">San Francisco, USA</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Innovative Arts Studio specializes in interactive
                    installations and immersive art experiences, pushing the
                    boundaries of creativity and engagement in the digital
                    realm.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Shubham</h5>
                    <p className="s-regular">Kolkata, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Visionary Films creates compelling cinematic experiences and
                    documentaries, dedicated to exploring human stories and
                    capturing unique perspectives.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Rajiv Kumar</h5>
                    <p className="s-regular">Bengaluru, India</p>
                  </div>
                </div>
              </article>
              <article className="home-testimony-set">
                <img src={Comma} alt="Comma" />
                <div className="home-testimony-set-content">
                  <p className="l-regular">
                    Culinary Horizons offers unique culinary experiences and
                    gourmet dining, focusing on farm-to-table practices and
                    sustainable ingredients from local producers.
                  </p>
                  <div className="home-testimony-set-heading">
                    <h5 className="m-semibold">Kriti</h5>
                    <p className="s-regular">Mumbai, India</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="home-marquee-left"></div>
            <div className="home-marquee-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
