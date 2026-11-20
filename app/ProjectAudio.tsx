"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const AudioContext = createContext<{
  enter: () => void; play: () => void; pause: () => void; seek: (time: number) => void;
  toggleMusic: () => void; playing: boolean; musicEnabled: boolean;
  blocked: boolean; error: boolean; time: number; duration: number;
} | null>(null);

export function useProjectAudio() {
  const value = useContext(AudioContext);
  if (!value) throw new Error("ProjectAudioProvider missing");
  return value;
}

export default function ProjectAudioProvider({ children }: { children: React.ReactNode }) {
  const narration = useRef<HTMLAudioElement>(null);
  const music = useRef<HTMLAudioElement>(null);
  const enabled = useRef(true);
  const entering = useRef(false);
  const generation = useRef(0);
  const path = usePathname();
  const [playing, setPlaying] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const [error, setError] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = useCallback(() => {
    const ticket = ++generation.current;
    // Call both elements synchronously inside the entry click's user activation.
    const requests = [narration.current?.play()];
    if (enabled.current) requests.push(music.current?.play());
    void Promise.all(requests).then(() => {
      if (ticket === generation.current) { setBlocked(false); setError(false); }
    }).catch((reason: DOMException) => {
      if (ticket !== generation.current) return;
      if (reason.name === "NotAllowedError") setBlocked(true);
      else if (reason.name !== "AbortError") setError(true);
    });
  }, []);

  const enter = () => {
    entering.current = true;
    enabled.current = true;
    setMusicEnabled(true);
    if (narration.current) narration.current.currentTime = 0;
    if (music.current) music.current.currentTime = 0;
    play();
  };

  useEffect(() => {
    if (path === "/corinthomaniac") {
      if (!entering.current) play();
      entering.current = false;
    } else {
      generation.current++;
      narration.current?.pause();
      music.current?.pause();
    }
  }, [path, play]);

  const toggleMusic = () => {
    enabled.current = !enabled.current;
    setMusicEnabled(enabled.current);
    if (!enabled.current) music.current?.pause();
    else void music.current?.play().catch(() => setBlocked(true));
  };

  return <AudioContext.Provider value={{enter, play, pause: () => narration.current?.pause(), seek: value => {
    if (narration.current) narration.current.currentTime = value;
  }, toggleMusic, playing, musicEnabled, blocked, error, time, duration}}>
    {children}
    <audio ref={narration} preload="metadata" aria-label="Narration audio" onPlay={e => {
      setPlaying(true);
      if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration);
    }} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onTimeUpdate={e => setTime(e.currentTarget.currentTime)} onDurationChange={e => { if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration); }} onLoadedMetadata={e => setDuration(e.currentTarget.duration)} onError={() => setError(true)}>
      <source src="/audio/corinthomaniac-narration.mp3?v=20261120" type="audio/mpeg" />
    </audio>
    <audio ref={music} preload="metadata" loop aria-label="Background audio" onError={() => setError(true)}>
      <source src="/audio/corinthomaniac-ambience.mp3?v=plus2db-20261120" type="audio/mpeg" />
    </audio>
  </AudioContext.Provider>;
}
