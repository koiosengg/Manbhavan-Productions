import React from "react";

const HusbandAndWife = "https://res.cloudinary.com/hozb8ehy/video/upload/q_auto/v1784111515/Husband_and_Wife_vjlew0.mp4";
const Grandparents = "https://res.cloudinary.com/hozb8ehy/video/upload/q_auto/v1784111508/Grandparents_w1sjqk.mp4";
const MotherAndDaughter = "https://res.cloudinary.com/hozb8ehy/video/upload/q_auto/v1784111514/Mother_and_Daughter_ujvzts.mp4";
const Family = "https://res.cloudinary.com/hozb8ehy/video/upload/q_auto/v1784111501/Family_rx0gwl.mp4";

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
        className="home-parle-set-video-1"
      />
      <video
        key={Grandparents}
        src={Grandparents}
        muted
        autoPlay
        loop
        playsInline
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
        className="home-parle-set-video-3"
      />
      <video
        key={Family}
        src={Family}
        muted
        autoPlay
        loop
        playsInline
        className="home-parle-set-video-4"
      />
    </article>
  );
}

export default Campaign1;
