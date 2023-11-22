import React, { useState, useEffect } from 'react';

interface LinearProgressBarProps {
  duration: number; // Total duration for the progress (in milliseconds)
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if needed
    };
  }, [duration]);

  return (
    <div style={{ width: '100%', height: '20px', backgroundColor: '#eee' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#4caf50',
          transition: 'width 0.3s ease', // Optional: Add a transition effect
        }}
      />
    </div>
  );
};

export default LinearProgressBar;
