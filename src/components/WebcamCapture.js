import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: 'environment',
};

const WebcamCapture = () => {
  const [photo, setPhoto] = useState('');

  const webcamRef = useRef(null);

  const capture = () => setPhoto(webcamRef.current.getScreenshot());

  return (
    <>
      <h1>Here you can take a photo</h1>
      <div>
        {photo === '' ? (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={photo} alt='' />
        )}
      </div>
      <div>
        {photo === '' ? (
          <button
            onClick={(event) => {
              event.preventDefault();
              capture();
            }}
          >
            Take a photo
          </button>
        ) : (
          <button
            onClick={(event) => {
              event.preventDefault();
              setPhoto('');
            }}
          >
            Retake
          </button>
        )}
      </div>
    </>
  );
};

export default WebcamCapture;
