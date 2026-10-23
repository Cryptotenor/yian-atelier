"use client";

import { useEffect, useRef } from "react";

export default function ProjectVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyPlaybackRate = () => {
      video.defaultPlaybackRate = 0.5;
      video.playbackRate = 0.5;
    };

    applyPlaybackRate();
    video.addEventListener("loadedmetadata", applyPlaybackRate);
    return () => video.removeEventListener("loadedmetadata", applyPlaybackRate);
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-[2/1] w-full bg-[#111111] object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/videos/corinthomaniac-random-walk-fast-poster.jpg"
      aria-label="Fast-forwarded Corinthomaniac drawing process with a changing Future beside the Canvas"
    >
      <source src="/videos/corinthomaniac-random-walk-fast.mp4" type="video/mp4" />
    </video>
  );
}
