/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Script from "next/script";

export default function Gracias() {

  return (
    <>
      <div id="vid_6785ce127a4aec436c6859be" style={{ position: "relative", width: "100%", padding: "84.375% 0 0", borderRadius: "20px" }}>
        <Image
          alt="Video"
          width={64}
          height={54}
          id="thumb_6785ce127a4aec436c6859be" src="https://images.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/6785ce127a4aec436c6859be/thumbnail.jpg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          unoptimized
        />
        <div id="backdrop_6785ce127a4aec436c6859be"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }} />
      </div>
      <Script id="scr_6785ce127a4aec436c6859be" strategy="afterInteractive">
        var s=document.createElement("script"); s.src="https://scripts.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/6785ce127a4aec436c6859be/player.js", s.async=!0,document.head.appendChild(s);
      </Script>
    </>
  );

};