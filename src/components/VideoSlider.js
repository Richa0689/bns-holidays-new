import React, { useState, useRef } from "react";
import "./VideoSlider.css";

import v1 from "./images/video.mp4";

const VideoSlider = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleClick = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="video-slider">
      <video
        ref={videoRef}
        src={v1}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="video"
        onClick={handleClick}
      />
    </div>
    
  );
};

export default VideoSlider;