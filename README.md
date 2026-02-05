## 项目结构

```
global-finance-intelligence-cockpit/
├── src/                      # 源代码目录
│   ├── components/          # React 组件
│   │   ├── ChartWrapper.tsx
│   │   ├── EChartBase.tsx
│   │   ├── FinancialMap.tsx
│   │   └── FinancialSummary.tsx
│   ├── hooks/               # 自定义 Hooks
│   │   └── useScale.ts
│   ├── App.tsx              # 主应用组件
│   ├── index.tsx            # 应用入口
│   └── types.ts             # TypeScript 类型定义
├── public/                   # 静态资源
│   └── index.html
├── .env.local               # 环境变量
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
└── vite.config.ts           # Vite 配置
```

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
