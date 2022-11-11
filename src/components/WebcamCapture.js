import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: { exact: 'environment' },
};

const webcamRef = useRef(null);

const WebcamCapture = () => {
  return (
    <>
      <h1>Here you can take a photo</h1>
      <div>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints}
        />
      </div>
      <button>Take a photo</button>
      <button>Retake</button>
    </>
  );
};

export default WebcamCapture;
