import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackV2 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'ab-69401e34b50e82e7e2e3be0e';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script id="vturb-ab-69401e34b50e82e7e2e3be0e" strategy="afterInteractive">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/ab-test/69401e34b50e82e7e2e3be0e/player.js";
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV2;