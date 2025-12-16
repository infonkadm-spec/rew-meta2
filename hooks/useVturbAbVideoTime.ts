import { useEffect, useState } from "react";

export function useVturbAbVideoTime(
  videoIdA: string,
  videoIdB: string,
  thresholdASeconds: number,
  thresholdBSeconds: number
) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;

    let waitElInterval: number | undefined;
    let checkInterval: number | undefined;

    const findVideoTimeKey = () => {
      const allKeys = Object.keys(localStorage);
      return allKeys.find(key => key.endsWith('-resume'));
    };

    const checkTime = () => {
      try {
        // Pega o ID do teste A/B ativo
        const abTestEl = document.querySelector("vturb-smartplayer");
        const rawTestId = abTestEl?.getAttribute("id");
        const cleanTestId = rawTestId?.replace('vid-', '') || '';

        // Encontra a chave do localStorage que armazena o tempo
        const timeKey = findVideoTimeKey();
        if (!timeKey) return;

        // Pega o tempo atual do localStorage
        const currentTime = Number(localStorage.getItem(timeKey) || 0);

        // Determina a variante baseado no valor do teste A/B
        const currentVideoId = timeKey.replace('-resume', '');
        
        // Verifica se o teste A/B está ativo e qual variante está sendo exibida
        const isA = cleanTestId === videoIdA || currentVideoId === videoIdA;
        const target = isA ? thresholdASeconds : thresholdBSeconds;

        if (currentTime >= target) {
          setShow(true);
          if (checkInterval) clearInterval(checkInterval);
        }
      } catch (error) {
        console.error('Error checking time:', error);
      }
    };

    // Espera o elemento existir e inicia checagem
    waitElInterval = window.setInterval(() => {
      const player = document.querySelector("vturb-smartplayer");
      if (!player) return;
      
      clearInterval(waitElInterval);

      // Inicia checagem periódica
      checkInterval = window.setInterval(checkTime, 1000);
    }, 300);

    return () => {
      if (waitElInterval) clearInterval(waitElInterval);
      if (checkInterval) clearInterval(checkInterval);
    };
  }, [show, videoIdA, videoIdB, thresholdASeconds, thresholdBSeconds]);

  return show;
}


