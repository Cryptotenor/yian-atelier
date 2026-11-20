import type { Metadata } from "next";
import "./globals.css";
import ProjectAudioProvider from "./ProjectAudio";

export const metadata: Metadata = {
  title: {
    default: "Yi-An Chen",
    template: "%s — Yi-An Chen",
  },
  description: "Visual artist based in Lucerne, Switzerland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ProjectAudioProvider>{children}</ProjectAudioProvider></body>
    </html>
  );
}
