import React from 'react';
import videoSource from '../images/hero.mp4'; 

const VideoBackground = () => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        minWidth: '100%',
        minHeight: '100%',
        zIndex: -1,
    }}>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
