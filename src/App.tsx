
import React, { useState } from 'react';
import { useScale } from './hooks/useScale';
import { ChartWrapper } from './components/ChartWrapper';
import { EChartBase } from './components/EChartBase';
import { FinancialMap } from './components/FinancialMap';
import { FinancialSummary } from './components/FinancialSummary';
import { DashboardTab } from './types';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const scale = useScale();
  const [activeTab, setActiveTab] = useState<DashboardTab>(DashboardTab.OVERVIEW);

  // Mock data for charts
  const barOption: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLine: { lineStyle: { color: '#475569' } },
      axisLabel: { color: '#94a3b8' }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#1e293b' } },
      axisLabel: { color: '#94a3b8' }
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110],
      type: 'bar',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#06b6d4' },
          { offset: 1, color: '#3b82f6' }
        ]),
        borderRadius: [4, 4, 0, 0]
      }
    }]
  };

  const pieOption: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#0f172a',
        borderWidth: 2
      },
      label: { show: false },
      labelLine: { show: false },
      data: [
        { value: 1048, name: 'Stocks', itemStyle: { color: '#22d3ee' } },
        { value: 735, name: 'Bonds', itemStyle: { color: '#818cf8' } },
        { value: 580, name: 'Crypto', itemStyle: { color: '#f59e0b' } },
        { value: 484, name: 'Gold', itemStyle: { color: '#10b981' } }
      ]
    }]
  };

  const lineOption: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: '#475569' } },
      axisLabel: { color: '#94a3b8' }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#1e293b' } },
      axisLabel: { color: '#94a3b8' }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      lineStyle: { color: '#c084fc', width: 3 },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(192, 132, 252, 0.4)' },
          { offset: 1, color: 'rgba(192, 132, 252, 0)' }
        ])
      }
    }]
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-[#020617] relative">
      {/* Dynamic Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div 
        style={{ 
          width: '1920px', 
          height: '1080px', 
          transform: `scale(${scale.x}, ${scale.y})`,
          transformOrigin: 'center center'
        }}
        className="relative bg-slate-950/20 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Section */}
        <header className="h-[80px] w-full flex items-center justify-between px-10 relative z-10 border-b border-slate-800/50">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-slate-400 font-orbitron tracking-tighter">
              FINANCE<span className="text-cyan-400 ml-2">CORE</span>
            </h1>
          </div>

          <nav className="flex items-center space-x-2">
            {Object.values(DashboardTab).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group font-orbitron ${
                  activeTab === tab 
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>
                )}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6 text-slate-400">
            <div className="flex flex-col items-end">
              <span className="text-xs font-mono uppercase">System Status</span>
              <span className="text-emerald-400 text-xs flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                Operational
              </span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-white font-orbitron">
                {new Date().toLocaleTimeString('en-US', { hour12: false })}
              </div>
              <div className="text-[10px] opacity-60">2024-05-20</div>
            </div>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 overflow-hidden">
          
          {/* Left Column */}
          <div className="col-span-3 row-span-6 flex flex-col space-y-6">
            <ChartWrapper title="Market Indices" className="flex-1">
               <EChartBase option={barOption} />
            </ChartWrapper>
            <ChartWrapper title="Asset Allocation" className="flex-1">
               <EChartBase option={pieOption} />
            </ChartWrapper>
            <ChartWrapper title="Risk Probability" className="flex-1">
                <div className="w-full h-full flex flex-col justify-center space-y-4 px-2">
                  {[
                    { label: 'Liquidity', val: 78, color: 'bg-cyan-400' },
                    { label: 'Market Volatility', val: 45, color: 'bg-purple-400' },
                    { label: 'Credit Risk', val: 22, color: 'bg-emerald-400' },
                    { label: 'Operation Risk', val: 64, color: 'bg-rose-400' }
                  ].map(risk => (
                    <div key={risk.label} className="space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400 uppercase">
                        <span>{risk.label}</span>
                        <span>{risk.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${risk.color} rounded-full transition-all duration-1000 shadow-[0_0_8px_currentColor]`} style={{ width: `${risk.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
            </ChartWrapper>
          </div>

          {/* Middle Column (Main Map Area) */}
          <div className="col-span-6 row-span-6 flex flex-col space-y-6">
            <div className="row-span-1 h-[120px]">
              <FinancialSummary />
            </div>
            <div className="flex-1 relative bg-slate-900/20 rounded-2xl border border-slate-800/50 group">
              {/* Central Map */}
              <FinancialMap />
              
              {/* HUD Elements for aesthetic */}
              <div className="absolute top-4 left-4 border-l-2 border-t-2 border-cyan-500/30 w-12 h-12"></div>
              <div className="absolute top-4 right-4 border-r-2 border-t-2 border-cyan-500/30 w-12 h-12"></div>
              <div className="absolute bottom-4 left-4 border-l-2 border-b-2 border-cyan-500/30 w-12 h-12"></div>
              <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-cyan-500/30 w-12 h-12"></div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-950/80 border border-slate-700 rounded-lg flex items-center space-x-6 backdrop-blur-md">
                <div className="text-center">
                  <div className="text-[10px] text-slate-500 uppercase">Node Sync</div>
                  <div className="text-sm font-bold text-white">100%</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div className="text-center">
                  <div className="text-[10px] text-slate-500 uppercase">Latency</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">14ms</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div className="text-center">
                  <div className="text-[10px] text-slate-500 uppercase">Secure</div>
                  <div className="text-sm font-bold text-cyan-400">AES-256</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 row-span-6 flex flex-col space-y-6">
             <ChartWrapper title="Growth Projection" className="flex-1">
                <EChartBase option={lineOption} />
             </ChartWrapper>
             <ChartWrapper title="Recent Activity" className="flex-1">
                <div className="space-y-3 mt-2 overflow-y-auto h-full max-h-[220px] pr-2">
                  {[
                    { type: 'BUY', sym: 'AAPL', amount: '2.4K', time: '14:02' },
                    { type: 'SELL', sym: 'BTC', amount: '0.12', time: '13:58' },
                    { type: 'BUY', sym: 'ETH', amount: '15.0', time: '13:45' },
                    { type: 'BUY', sym: 'TSLA', amount: '1.2K', time: '13:30' },
                    { type: 'SELL', sym: 'GOLD', amount: '10oz', time: '13:12' }
                  ].map((trade, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-800/30 border border-slate-800">
                      <div className="flex items-center space-x-3">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${trade.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {trade.type}
                        </span>
                        <span className="text-xs text-slate-200 font-orbitron">{trade.sym}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white">{trade.amount}</div>
                        <div className="text-[9px] text-slate-500">{trade.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
             </ChartWrapper>
             <ChartWrapper title="Global Sentiment" className="flex-1">
                <div className="flex flex-col h-full justify-center items-center">
                  <div className="relative w-24 h-24">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-cyan-400" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-white font-orbitron">75</span>
                        <span className="text-[8px] text-slate-500 uppercase">BULLISH</span>
                     </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-[10px] text-slate-500">Retail</div>
                      <div className="text-xs text-emerald-400">Positive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-slate-500">Institutional</div>
                      <div className="text-xs text-cyan-400">Stable</div>
                    </div>
                  </div>
                </div>
             </ChartWrapper>
          </div>
        </main>

        {/* Footer Overlay for Tech Vibes */}
        <footer className="h-6 w-full flex items-center justify-between px-10 border-t border-slate-800/30 bg-slate-900/50">
          <div className="text-[9px] text-slate-500 font-mono tracking-widest uppercase flex items-center space-x-4">
            <span>Terminal: T-800.CORE.FINANCE</span>
            <span className="text-cyan-500/50">|</span>
            <span>Encryption: Active</span>
          </div>
          <div className="text-[9px] text-slate-500 font-mono">
             © 2024 GLOBAL FINANCE INTELLIGENCE SYSTEMS
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
