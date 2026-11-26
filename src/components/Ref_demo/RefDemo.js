import React from "react";
import SimpaleRef from "./SimpaleRef";
import VideoPlayer from "./VIdeoPlayer";

const RefDemo = () => {
  return (
    <div>
      <h3>Ref Demo</h3>

      <SimpaleRef />

      <VideoPlayer src="https://samplelib.com/mp4/sample-10s-720p.mp4" />
    </div>
  );
};

export default RefDemo;
