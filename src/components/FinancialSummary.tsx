
import React from 'react';

const StatCard = ({ label, value, trend, isUp }: { label: string, value: string, trend: string, isUp: boolean }) => (
  <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex flex-col justify-between hover:bg-slate-800/60 transition-colors">
    <span className="text-slate-400 text-xs uppercase tracking-widest">{label}</span>
    <div className="flex items-baseline justify-between mt-2">
      <span className="text-2xl font-bold text-white font-orbitron">{value}</span>
      <span className={`text-xs px-1.5 py-0.5 rounded ${isUp ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
        {isUp ? '▲' : '▼'} {trend}
      </span>
    </div>
  </div>
);

export const FinancialSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full h-full">
      <StatCard label="Total Assets" value="$1,248.5B" trend="+2.4%" isUp={true} />
      <StatCard label="Daily Volume" value="48.2M" trend="-0.8%" isUp={false} />
      <StatCard label="Active Traders" value="124.9K" trend="+12%" isUp={true} />
      <StatCard label="Net Profit" value="$3.2B" trend="+5.7%" isUp={true} />
    </div>
  );
};
