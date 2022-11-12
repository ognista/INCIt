import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: { exact: 'environment' },
};

const WebcamCapture = () => {
  const [photo, setPhoto] = useState('');

  const webcamRef = useRef(null);

  const capture = () => setPhoto(webcamRef.current.getScreenshot());

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
      <img src={photo} alt='' />
      <button
        onClick={(event) => {
          event.preventDefault();
          capture();
        }}
      >
        Take a photo
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          setPhoto();
        }}
      >
        Retake
      </button>
    </>
  );
};

export default WebcamCapture;
