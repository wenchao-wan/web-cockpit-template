<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1j1M1FC10OSnzSYTJlsZTUg9L5GfDRTAU

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
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
