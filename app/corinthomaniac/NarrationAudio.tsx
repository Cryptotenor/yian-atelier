"use client";

import { useProjectAudio } from "../ProjectAudio";

const timestamp = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export default function NarrationAudio() {
  const audio = useProjectAudio();
  return <div className="border-b border-[#d8d1c6] py-6">
    {audio.blocked && <button type="button" onClick={audio.play} className="fixed bottom-6 right-5 z-50 border border-[#d8d1c6] bg-white px-5 py-3 text-sm text-[#111111] shadow-sm">Play audio</button>}
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[#66615a]">Narration</p>
      <div className="flex h-10 w-full max-w-[440px] items-center gap-3">
        <button type="button" title={audio.playing ? "Pause narration" : "Play narration"} aria-label={audio.playing ? "Pause narration" : "Play narration"} onClick={audio.playing ? audio.pause : audio.play} className="h-10 w-10 shrink-0 border border-[#d8d1c6]">{audio.playing ? "Ⅱ" : "▶"}</button>
        <input type="range" aria-label="Narration position" min="0" max={audio.duration || 80.45} step="0.1" value={audio.time} onChange={e => audio.seek(Number(e.target.value))} className="min-w-0 flex-1 accent-[#111111]" />
        <span className="w-24 shrink-0 text-right text-xs tabular-nums">{timestamp(audio.time)} / {timestamp(audio.duration)}</span>
      </div>
    </div>
    <label className="mt-4 flex w-fit cursor-pointer items-center gap-3 text-sm text-[#66615a]">
      <input type="checkbox" checked={audio.musicEnabled} onChange={audio.toggleMusic} className="h-4 w-4 accent-[#111111]" />
      Background music
    </label>
    {audio.error && <p role="status" className="mt-2 text-sm text-[#66615a]">Audio could not play. Please try again.</p>}
  </div>;
}
