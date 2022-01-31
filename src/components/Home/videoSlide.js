import React from "react";
import { Container } from "react-bootstrap";

export const VideoSlide = () => {
  return (
    <Container fluid id="videoLayer">
      <div className="video-responsive">
        <iframe
          id="videoContainer"
          src="https://www.youtube.com/embed/Qy7HrO0s6vc?rel=0&amp;autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=Qy7HrO0s6vc&modestbranding=1"
          frameBorder="0"
          allowFullScreen
          title="video"
        />
      </div>
    </Container>
  );
};

export default VideoSlide;
