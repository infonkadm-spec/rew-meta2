/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Script from "next/script";

export default function VSLGray() {

  return (
    <>
      <div id="vid_6818a773ddd0bd786828d77b" style={{ position: "relative", width: "100%", padding: "84.375% 0 0" }}>
        <Image
          alt="Video"
          width={64}
          height={54}
          id="thumb_6818a773ddd0bd786828d77b" src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/6818a773ddd0bd786828d77b/thumbnail.jpg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          unoptimized
        />
        <div id="backdrop_6818a773ddd0bd786828d77b"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }} />
      </div>
      <Script id="scr_6818a773ddd0bd786828d77b" strategy="afterInteractive">
        var s=document.createElement("script"); s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/6818a773ddd0bd786828d77b/player.js", s.async=!0,document.head.appendChild(s);
      </Script>
    </>
  );
  
};