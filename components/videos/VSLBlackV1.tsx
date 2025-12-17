import React from 'react';
import Script from 'next/script';
import Image from 'next/image';

const VSLBlackV1 = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div id="vid_69401639b4d7bfc1939e027e" style={{ position: 'relative', width: '100%', padding: '84.375% 0 0' }}>
        <Image 
          id="thumb_69401639b4d7bfc1939e027e" 
          src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/682a82f69a2f4feddf421113/thumbnail.jpg" 
          fill
          style={{ 
            objectFit: 'cover', 
            display: 'block' 
          }} 
          alt="thumbnail" 
        />
        <div 
          id="backdrop_69401639b4d7bfc1939e027e" 
          style={{ 
            WebkitBackdropFilter: 'blur(5px)', 
            backdropFilter: 'blur(5px)', 
            position: 'absolute', 
            top: 0, 
            height: '100%', 
            width: '100%' 
          }}
        />
      </div>
      <Script id="scr_69401639b4d7bfc1939e027e" strategy="afterInteractive">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/players/69401639b4d7bfc1939e027e/v4/player.js";
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV1;