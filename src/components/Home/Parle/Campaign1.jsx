import React from "react";
import HusbandAndWife from "../../../assets/Home/Parle/Campaign 1/Husband and Wife.mp4";
import Grandparents from "../../../assets/Home/Parle/Campaign 1/Grandparents.mp4";
import MotherAndDaughter from "../../../assets/Home/Parle/Campaign 1/Mother and Daughter.mp4";
import Family from "../../../assets/Home/Parle/Campaign 1/Family.mp4";
import VideoPlayer from "../../VideoPlayer";

function Campaign1() {
  return (
    <article className="home-parle-set">
      <VideoPlayer
        src={HusbandAndWife}
        loop
        className="home-parle-set-video-1"
      />
      <VideoPlayer
        src={Grandparents}
        loop
        className="home-parle-set-video-2"
      />
      <p className="l-regular">
        Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
        ultricies risus. Metus nulla rutrum id proin in vulputate egestas
        phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
        suspendisse.
      </p>
      <VideoPlayer
        src={MotherAndDaughter}
        loop
        className="home-parle-set-video-3"
      />
      <VideoPlayer
        src={Family}
        loop
        className="home-parle-set-video-4"
      />
    </article>
  );
}

export default Campaign1;
