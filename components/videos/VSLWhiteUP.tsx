"use client";
import React, { useEffect } from "react";

export default function VSLWhiteUP() {
  // injeta o script do player após o elemento existir no DOM
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const existing = document.getElementById('vturb-player-68d2d8237dd56bc552048308') as HTMLScriptElement | null;
    if (existing) return;
    const s = document.createElement('script');
    s.id = 'vturb-player-68d2d8237dd56bc552048308';
    s.src = 'https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68d2d8237dd56bc552048308/v4/player.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return (
    <>
      <div style={{ minHeight: 220 }}>
        {React.createElement('vturb-smartplayer', { id: 'vid-68d2d8237dd56bc552048308', style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '100%' } })}
      </div>
    </>
  );
}

// Load ConverteAI script once on client
export function useVturbWhiteUpLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const existing = document.getElementById('vturb-player-68d2d8237dd56bc552048308');
    if (existing) return;
    const s = document.createElement('script');
    s.id = 'vturb-player-68d2d8237dd56bc552048308';
    s.src = 'https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68d2d8237dd56bc552048308/v4/player.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);
}