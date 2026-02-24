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

## 环境与版本要求

- Node.js: `18.x`（当前开发与调试环境）
- npm: `>= 9`（建议使用与 Node 18 配套的默认 npm 版本）

建议使用 `nvm` 锁定 Node 版本，避免本地环境差异导致启动失败：

```bash
nvm install 18
nvm use 18
node -v
npm -v
```

**Prerequisites:** Node.js 18.x


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
