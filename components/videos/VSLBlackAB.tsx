import React, { useEffect, useRef } from "react";
import Script from "next/script";

const VSLBlackAB = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      playerRef.current &&
      !playerRef.current.querySelector("vturb-smartplayer")
    ) {
      const el = document.createElement("vturb-smartplayer");
      el.id = "ab-6940a9f67411257a2fe58565"; // 🔴 ID NOVO
      el.style.display = "block";
      el.style.margin = "0 auto";
      el.style.width = "100%";
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>

      <Script
        id="vturb-ab-6940a9f67411257a2fe58565" // 🔴 ID NOVO
        strategy="afterInteractive"
      >
        {`
          var s = document.createElement("script");
          s.src = "https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/ab-test/6940a9f67411257a2fe58565/player.js";
          s.async = true;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackAB;
