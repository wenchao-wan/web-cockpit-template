
import React from 'react';

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`relative flex flex-col bg-slate-900/40 border border-slate-700/50 rounded-xl p-4 overflow-hidden backdrop-blur-sm group hover:border-cyan-500/50 transition-colors duration-300 ${className}`}>
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center mb-2 space-x-2">
        <div className="w-1 h-4 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        <h3 className="text-slate-200 font-medium text-sm tracking-wider uppercase font-orbitron">{title}</h3>
      </div>
      <div className="flex-1 w-full relative">
        {children}
      </div>
    </div>
  );
};
