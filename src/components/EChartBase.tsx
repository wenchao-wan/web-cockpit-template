
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EChartBaseProps {
  option: echarts.EChartsOption;
  className?: string;
  onReady?: (instance: echarts.ECharts) => void;
}

export const EChartBase: React.FC<EChartBaseProps> = ({ option, className = "w-full h-full", onReady }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize ECharts with SVG renderer as requested
    chartInstance.current = echarts.init(chartRef.current, 'dark', {
      renderer: 'svg'
    });

    if (onReady) {
      onReady(chartInstance.current);
    }

    const resizeObserver = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      chartInstance.current?.dispose();
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chartInstance.current && option) {
      chartInstance.current.setOption(option, true);
    }
  }, [option]);

  return <div ref={chartRef} className={className} />;
};
