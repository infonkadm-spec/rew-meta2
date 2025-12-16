import Script from "next/script";
import React from "react";

export default function VSLWhite() {
  return (
    <>
      {React.createElement('vturb-smartplayer', { id: 'vid-68d2d80e77496602ab608e6d', style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' } })}
      <Script id="vturb-player-68d2d80e77496602ab608e6d" strategy="afterInteractive">
        {`var s=document.createElement("script"); s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68d2d80e77496602ab608e6d/v4/player.js", s.async=!0,document.head.appendChild(s);`}
      </Script>
    </>
  );
}