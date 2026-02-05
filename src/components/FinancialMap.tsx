
import React, { useMemo, useEffect, useState } from 'react';
import { EChartBase } from './EChartBase';
import * as echarts from 'echarts';

export const FinancialMap: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Fetch world map data and register it with ECharts
    // Using a reliable CDN for the world geojson
    const loadMap = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json');
        if (!response.ok) throw new Error('Map data load failed');
        const worldJson = await response.json();
        echarts.registerMap('world', worldJson);
        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading world map:', error);
        // Fallback: register an empty map structure to prevent crashing
        echarts.registerMap('world', { 
          type: 'FeatureCollection', 
          features: [] 
        } as any);
        setMapLoaded(true);
      }
    };

    loadMap();
  }, []);

  const option: echarts.EChartsOption = useMemo(() => ({
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      borderColor: '#38bdf8',
      textStyle: { color: '#fff' }
    },
    geo: {
      map: 'world',
      roam: false,
      zoom: 1.2,
      label: { show: false },
      emphasis: {
        label: { show: false },
        itemStyle: { areaColor: '#1e293b' }
      },
      itemStyle: {
        areaColor: 'rgba(56, 189, 248, 0.05)',
        borderColor: 'rgba(56, 189, 248, 0.4)',
        borderWidth: 1
      }
    },
    series: [
      {
        name: 'Capital Routes',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 4,
          trailLength: 0.4,
          color: '#22d3ee',
          symbolSize: 3
        },
        lineStyle: {
          color: '#22d3ee',
          width: 1,
          opacity: 0.1,
          curveness: 0.2
        },
        data: [
          { coords: [[-74.006, 40.7128], [116.4074, 39.9042]] }, // NY to Beijing
          { coords: [[139.6917, 35.6895], [114.1694, 22.3193]] }, // Tokyo to HK
          { coords: [[-0.1278, 51.5074], [103.8198, 1.3521]] },  // London to Singapore
          { coords: [[-74.006, 40.7128], [-0.1278, 51.5074]] },   // NY to London
          { coords: [[116.4074, 39.9042], [139.6917, 35.6895]] }  // Beijing to Tokyo
        ]
      },
      {
        name: 'Financial Hubs',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke',
          scale: 4,
          period: 4
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#94a3b8',
          fontSize: 10,
          fontFamily: 'Orbitron'
        },
        itemStyle: {
          color: '#fbbf24',
          shadowBlur: 10,
          shadowColor: '#fbbf24'
        },
        data: [
          { name: 'New York', value: [-74.006, 40.7128, 95] },
          { name: 'Beijing', value: [116.4074, 39.9042, 90] },
          { name: 'London', value: [-0.1278, 51.5074, 88] },
          { name: 'Tokyo', value: [139.6917, 35.6895, 85] },
          { name: 'Singapore', value: [103.8198, 1.3521, 82] }
        ]
      }
    ]
  }), [mapLoaded]);

  if (!mapLoaded) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        <span className="text-cyan-500 font-orbitron text-xs tracking-widest animate-pulse">SYNCHRONIZING GLOBAL DATA...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <EChartBase option={option} className="w-full h-full" />
      {/* Decorative HUD overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-cyan-500/5 rounded-full"></div>
      </div>
    </div>
  );
};
