import React from 'react';
import '../pages/css/Infomation.css'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Information = () => {
  return (
    <div className="information-section">
      <div className="information-item">
        <div className="video-wrapper">
          <video controls>
            <source src={video1} type="video/mp4" />
          </video>
          <div className="play-icon"></div>
        </div>
        <div className="description">
          <h3 className="title">Video 1 Title</h3>
          <p className="content">
            Description for Video 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="information-item">
        <div className="video-wrapper">
          <video controls>
            <source src={video2} type="video/mp4" />
          </video>
          <div className="play-icon"></div>
        </div>
        <div className="description">
          <h3 className="title">Video 2 Title</h3>
          <p className="content">
            Description for Video 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
