"use client";

import { useEffect, useRef, useState } from "react";

export default function NarrationAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.defaultPlaybackRate = 0.9;
    audio.playbackRate = 0.9;

    const startPlayback = () => {
      audio.playbackRate = 0.9;
      audio.play().catch(() => setAutoplayBlocked(true));
    };

    if (audio.readyState >= 2) startPlayback();
    else audio.addEventListener("canplay", startPlayback, { once: true });

    return () => audio.removeEventListener("canplay", startPlayback);
  }, []);

  return (
    <div className="border-b border-[#d8d1c6] py-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#66615a]">Narration · Onyx · 0.9×</p>
        <audio
          ref={audioRef}
          className="h-10 w-full max-w-[440px]"
          controls
          autoPlay
          preload="auto"
          onPlay={(event) => {
            event.currentTarget.playbackRate = 0.9;
            setAutoplayBlocked(false);
          }}
        >
          <source src="/audio/corinthomaniac-narration.mp3" type="audio/mpeg" />
        </audio>
      </div>
      {autoplayBlocked && (
        <p className="mt-2 text-right text-xs text-[#66615a]">
          Press play to hear the narration.
        </p>
      )}
    </div>
  );
}
