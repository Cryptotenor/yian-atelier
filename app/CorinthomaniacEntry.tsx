"use client";

import Link from "next/link";
import { useProjectAudio } from "./ProjectAudio";

export default function CorinthomaniacEntry({children}: {children: React.ReactNode}) {
  const {enter} = useProjectAudio();
  return <Link className="group relative block aspect-square overflow-hidden bg-white" href="/corinthomaniac" aria-label="Enter Corinthomaniac" onClick={event => {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) enter();
  }}>{children}</Link>;
}
