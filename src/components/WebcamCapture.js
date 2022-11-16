import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

const videoConstraints = {
  facingMode: 'environment',
};

const WebcamCapture = () => {
  const [photo, setPhoto] = useState('');
  const [text, setText] = useState('');

  const webcamRef = useRef(null);

  const capture = () => setPhoto(webcamRef.current.getScreenshot());

  const convertPhotoToText = () => {
    Tesseract.recognize(photo, 'eng', { logger: (m) => console.log(m) })
      .catch((error) => console.log(error))
      .then((result) => setText(result.data.text));
  };

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
      <button onClick={convertPhotoToText}>Convert to text</button>
      <h2>Your text output is: {text}</h2>
    </>
  );
};

export default WebcamCapture;
