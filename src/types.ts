
export interface MarketData {
  name: string;
  value: number;
  change: number;
}

export interface ChartDataItem {
  time: string;
  value: number;
  secondary?: number;
}

export enum DashboardTab {
  OVERVIEW = 'Overview',
  MARKET = 'Market Analysis',
  RISK = 'Risk Control',
  ASSETS = 'Asset Management'
}
