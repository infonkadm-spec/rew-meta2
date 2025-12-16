import { useEffect, useState } from "react";

export function useVturbVideoTime(targetSeconds: number) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const player = document.querySelector("vturb-smartplayer");
    if (!player) return;

    function onReady() {
      const interval = setInterval(() => {
        // Tenta pegar o tempo atual do player
        let currentTime = 0;
        try {
          // @ts-ignore
          if (typeof player.getCurrentTime === 'function') {
            // @ts-ignore
            currentTime = player.getCurrentTime();
          } else if (player && 'currentTime' in player) {
            // @ts-ignore
            currentTime = player.currentTime;
          }
          if (Number(currentTime) >= targetSeconds) {
            setShow(true);
            clearInterval(interval);
          }
        } catch (error) {
          console.error('Erro ao obter tempo do vídeo:', error);
        }
      }, 1000);
      // Limpa o intervalo se desmontar
      return () => clearInterval(interval);
    }

    player.addEventListener("player:ready", onReady);

    return () => {
      player.removeEventListener("player:ready", onReady);
    };
  }, [targetSeconds]);

  return show;
} 