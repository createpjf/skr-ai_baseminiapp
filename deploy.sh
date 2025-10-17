#!/bin/bash

# Skr.AI Base Mini App 部署脚本

echo "🚀 开始部署 Skr.AI Base Mini App..."

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ 未找到 Vercel CLI，正在安装..."
    npm install -g vercel
fi

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

echo "✅ 构建成功"

# 部署到 Vercel
echo "🌐 部署到 Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
    echo ""
    echo "📋 下一步："
    echo "1. 访问 https://base.org/build/account-association"
    echo "2. 输入您的 Vercel 应用 URL"
    echo "3. 生成 accountAssociation 凭据"
    echo "4. 更新 minikit.config.ts 文件"
    echo "5. 重新部署应用"
    echo "6. 访问 https://base.dev/preview 测试您的应用"
else
    echo "❌ 部署失败，请检查错误信息"
    exit 1
fi
