import { useEffect, useState } from "react";

export function useVturbDelay(delaySeconds: number) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const player = document.querySelector("vturb-smartplayer");
    if (!player) return;

    function onReady() {
      setTimeout(() => setShow(true), delaySeconds * 1000);
    }

    player.addEventListener("player:ready", onReady);

    return () => {
      player.removeEventListener("player:ready", onReady);
    };
  }, [delaySeconds]);

  return show;
} 