import React, { useEffect, useRef } from 'react';
import { Score } from '../types';

interface RadarDataset {
  data: Score;
  label: string;
  color: string;
  fillColor: string;
}

interface RadarChartProps {
  datasets: RadarDataset[];
  labels: string[];
}

const RadarChart: React.FC<RadarChartProps> = ({ datasets, labels }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;

    ctx.clearRect(0, 0, width, height);

    // Draw background circles
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axes
    const angleStep = (Math.PI * 2) / labels.length;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    labels.forEach((label, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '10px Inter';
      ctx.textAlign = 'center';
      const labelX = centerX + Math.cos(angle) * (radius + 20);
      const labelY = centerY + Math.sin(angle) * (radius + 20);
      ctx.fillText(label, labelX, labelY);
    });

    // Draw datasets
    datasets.forEach((dataset) => {
      const values = [
        dataset.data.expression,
        dataset.data.attachment,
        dataset.data.security,
        dataset.data.dominance,
        dataset.data.rational,
        dataset.data.adventure,
        dataset.data.loyalty,
        dataset.data.emotionality,
      ];

      ctx.beginPath();
      ctx.strokeStyle = dataset.color;
      ctx.fillStyle = dataset.fillColor;
      ctx.lineWidth = 2;

      values.forEach((val, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = val * radius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw points
      values.forEach((val, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = val * radius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        ctx.fillStyle = dataset.color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    });

  }, [datasets, labels]);

  return (
    <div className="relative w-full max-w-[400px] aspect-square">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center gap-4">
        {datasets.map((ds, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ds.color }} />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{ds.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadarChart;
