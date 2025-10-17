# Skr.AI Base Mini App

一个基于 Base Mini App 的智能AI搜索助手，支持多语言、实时搜索和推理模式。

## 🚀 功能特性

- **智能搜索** - AI驱动的搜索，理解用户意图
- **多语言支持** - 支持中英文切换
- **实时联网搜索** - 可开关的实时信息获取
- **推理模式** - 深度思考和分析能力
- **搜索历史** - 本地存储的搜索记录
- **Base集成** - 与Base生态系统的无缝集成
- **响应式设计** - 适配移动端和桌面端

## 📦 安装和运行

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### 部署到Vercel

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 确保部署保护已关闭（Settings → Deployment Protection）
4. 部署完成后，更新环境变量 `NEXT_PUBLIC_APP_URL`

## 🔧 Base Mini App 配置

### 1. 更新配置文件

编辑 `minikit.config.ts` 文件，更新您的应用信息：

```typescript
export const minikitConfig = {
  accountAssociation: {
    // 这将在步骤2中生成
    "header": "",
    "payload": "",
    "signature": ""
  },
  miniapp: {
    version: "1",
    name: "Skr.AI",
    subtitle: "AI Search Assistant",
    description: "Intelligent AI-powered search with real-time web search and multi-language support",
    // ... 其他配置
  },
} as const;
```

### 2. 生成账户关联凭证

1. 确保应用已部署并可通过HTTPS访问
2. 访问 [Base Build Account Association Tool](https://base.org/build/account-association)
3. 输入您的应用URL（例如：`your-app.vercel.app`）
4. 生成 `accountAssociation` 凭据
5. 更新 `minikit.config.ts` 文件中的 `accountAssociation` 部分

### 3. 测试和发布

1. 访问 [base.dev/preview](https://base.dev/preview) 测试您的应用
2. 验证所有功能正常工作
3. 在Base应用中发布您的Mini App

## 📁 项目结构

```
skr-ai-miniapp/
├── app/
│   ├── .well-known/
│   │   └── farcaster.json          # Farcaster清单文件
│   ├── api/
│   │   ├── search/
│   │   │   └── route.ts            # 搜索API端点
│   │   └── webhook/
│   │       └── route.ts            # Webhook端点
│   ├── globals.css                 # 全局样式
│   └── layout.tsx                  # 根布局
├── src/
│   ├── components/                 # React组件
│   │   ├── SearchBar.tsx
│   │   ├── SearchResults.tsx
│   │   ├── SearchHistory.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── HomeButton.tsx
│   │   └── FlowingLights.tsx
│   ├── lib/
│   │   └── translations.ts         # 多语言翻译
│   └── app/
│       └── page.tsx                # 主页面
├── public/                         # 静态资源
│   └── icon.svg                    # 应用图标
├── minikit.config.ts               # Base Mini App配置
└── package.json
```

## 🎨 自定义

### 添加新功能

1. 在 `src/components/` 中创建新组件
2. 在 `src/lib/translations.ts` 中添加多语言支持
3. 在 `src/app/page.tsx` 中集成新组件

### 修改样式

项目使用Tailwind CSS，您可以在组件中直接修改样式类名。

### 添加API端点

在 `app/api/` 目录下创建新的API路由。

## 🔗 相关链接

- [Base Mini Apps 文档](https://docs.base.org/mini-apps/overview)
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 📄 许可证

MIT License