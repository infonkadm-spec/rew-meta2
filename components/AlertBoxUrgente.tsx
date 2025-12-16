import React, { useEffect } from 'react';
import { useVturbAbVideoTime } from '@/hooks/useVturbAbVideoTime';

interface AlertBoxUrgenteProps {
  videoIdA: string;
  videoIdB: string;
  thresholdASeconds?: number;
  thresholdBSeconds?: number;
}

const AlertBoxUrgente: React.FC<AlertBoxUrgenteProps> = ({
  videoIdA,
  videoIdB,
  thresholdASeconds = 573,
  thresholdBSeconds = 702,
}) => {
  const show = useVturbAbVideoTime(
    videoIdA,
    videoIdB,
    thresholdASeconds,
    thresholdBSeconds
  );

  // Debug logs
  useEffect(() => {
    console.log('AlertBoxUrgente Props:', {
      videoIdA,
      videoIdB,
      thresholdASeconds,
      thresholdBSeconds
    });
    
    // Monitorar localStorage
    const checkStorage = () => {
      const timeA = localStorage.getItem(videoIdA);
      const timeB = localStorage.getItem(videoIdB);
      console.log('Storage Times:', { timeA, timeB });
    };
    
    const interval = setInterval(checkStorage, 1000);
    return () => clearInterval(interval);
  }, [videoIdA, videoIdB, thresholdASeconds, thresholdBSeconds]);

  useEffect(() => {
    console.log('AlertBoxUrgente show state:', show);
  }, [show]);

  if (!show) return null;

  const staticBorderColor = '#e53e3e';
  const normalBackgroundColor = '#ffebee';
  // Mantém o restante do estilo estático para simplificar

  return (
    <div
      style={{
        backgroundColor: normalBackgroundColor,
        color: '#c53030',
        fontWeight: 'bold',
        fontSize: '16px',
        border: `2px dashed ${staticBorderColor}`,
        borderRadius: '8px',
        padding: '16px',
        margin: '16px auto',
        width: '100%',
        maxWidth: '640px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <span role="img" aria-label="lock" style={{ fontSize: '24px', marginRight: '12px' }}>
        🔐
      </span>
      <span>
        The system will close your access if you do not confirm now. YouTube only maintains active requests with immediate return.
      </span>
    </div>
  );
};

export default AlertBoxUrgente; 