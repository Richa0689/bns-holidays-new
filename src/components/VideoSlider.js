import React from "react";
import "./VideoSlider.css";

const VideoSlider = () => {
  return (
    <div className="video-slider">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/9NhePoseC2w?start=10&loop=1&playlist=9NhePoseC2w&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="overlay" />
      </div>
    </div>
  );
};

export default VideoSlider;