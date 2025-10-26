import { useEffect, useRef } from "react";

function WebcamPreview() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Webcam access denied:", err);
      });
  }, []);

  return (
    <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", border: "2px solid #007bff" }}></video>
  );
}

export default WebcamPreview;
