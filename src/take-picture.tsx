import { Button } from "framework7-react";
import { useRef } from "react";

const start = async (ref: HTMLVideoElement) => {
  console.log("ref", ref);
  // request the user's camera and microphone as a MediaStream
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  console.log("stream", stream);

  // attach the stream to the video element

  ref.srcObject = stream;
  ref.play();
};
export const TakePicture = () => {
  const ref = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <Button onClick={() => (ref.current ? start(ref.current) : null)}>
        Cam
      </Button>
      <video height={300} width={300} ref={ref}></video>
    </>
  );
};
