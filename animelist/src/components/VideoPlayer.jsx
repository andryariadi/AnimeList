"use client";
import YouTube from "react-youtube";
export default function VideoPlayer({ youtubeId }) {
  const option = {
    height: "350",
    width: "640",
  };

  return (
    <>
      <YouTube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} />
    </>
  );
}
