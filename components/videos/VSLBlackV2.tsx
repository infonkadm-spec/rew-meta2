import React, { useEffect, useRef } from "react";
import Script from "next/script";

const VSLBlackV2 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector("vturb-smartplayer")) {
      const el = document.createElement("vturb-smartplayer");
      el.id = "vid-69401639f415b42f2b140ffd";
      el.style.display = "block";
      el.style.margin = "0 auto";
      el.style.width = "100%";
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>

      <Script id="vturb-vid-69401639f415b42f2b140ffd" strategy="afterInteractive">
        {`
          var s = document.createElement("script");
          s.src = "https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/players/69401639f415b42f2b140ffd/v4/player.js";
          s.async = true;
          document.head.appendChild(s);
        `}
      </Script>
      <Script id="utmify-pixel" strategy="afterInteractive">
        {`
          window.pixelId = "6920f79745ab396fb596faa4";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV2;
