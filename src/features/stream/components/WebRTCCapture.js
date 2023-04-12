import React, { useEffect, useRef, useState } from 'react';

function WebRTCCapture() {

  const [mediaStream, setMediaStream] = useState();
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = {
      audio: true,
      video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        console.log('Media stream captured successfully');
        videoRef.current.srcObject = stream;
        setMediaStream(stream);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default WebRTCCapture;