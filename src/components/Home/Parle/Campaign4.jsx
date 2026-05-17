import React from "react";
import Campaign11 from "../../../assets/Home/Parle/Campaign 1/Campaign 1 1.mp4";

function Campaign4() {
  return (
    <article className="home-parle-set">
      <video
        src={Campaign11}
        muted
        autoPlay
        loop
        className="home-parle-set-video-1"
      />
      <video
        src={Campaign11}
        muted
        autoPlay
        loop
        className="home-parle-set-video-2"
      />
      <p className="l-regular">
        Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
        ultricies risus. Metus nulla rutrum id proin in vulputate egestas
        phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
        suspendisse.
      </p>
      <video
        src={Campaign11}
        muted
        autoPlay
        loop
        className="home-parle-set-video-3"
      />
      <video
        src={Campaign11}
        muted
        autoPlay
        loop
        className="home-parle-set-video-4"
      />
    </article>
  );
}

export default Campaign4;
