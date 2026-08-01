import React from "react";

const HusbandAndWife = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Husband_and_Wife_vjlew0.mp4";
const Grandparents = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Grandparents_w1sjqk.mp4";
const MotherAndDaughter = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Mother_and_Daughter_ujvzts.mp4";
const Family = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Family_rx0gwl.mp4";

function Campaign1() {
  return (
    <article className="home-parle-set">
      <video
        key={HusbandAndWife}
        src={HusbandAndWife}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="home-parle-set-video-1"
      />
      <video
        key={Grandparents}
        src={Grandparents}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="home-parle-set-video-2"
      />
      <p className="l-regular">
        Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
        ultricies risus. Metus nulla rutrum id proin in vulputate egestas
        phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
        suspendisse.
      </p>
      <video
        key={MotherAndDaughter}
        src={MotherAndDaughter}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="home-parle-set-video-3"
      />
      <video
        key={Family}
        src={Family}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="home-parle-set-video-4"
      />
    </article>
  );
}

export default Campaign1;
