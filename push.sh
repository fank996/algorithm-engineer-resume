#!/bin/bash

# GitHub 推送脚本
# 使用方法：bash push.sh

set -e

echo "=========================================="
echo "  算法工程师简历 - GitHub 推送脚本"
echo "=========================================="
echo ""

# 检查是否在 Git 仓库中
if [ ! -d ".git" ]; then
    echo "正在初始化 Git 仓库..."
    git init
    echo "✓ Git 仓库初始化完成"
fi

echo ""
echo "正在添加所有文件..."
git add .
echo "✓ 文件已添加"

echo ""
echo "正在提交更改..."
git commit -m "feat: 初始化算法工程师个人简历

- 使用 React 19 + TypeScript + Vite 构建
- 集成 shadcn/ui 组件库和 Tailwind CSS
- 实现完整的简历模板
- 配置 GitHub Pages 自动部署
" || echo "⚠️  没有新的更改需要提交"

echo ""
echo "正在配置远程仓库..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git
echo "✓ 远程仓库已配置"

echo ""
echo "=========================================="
echo "  正在推送到 GitHub..."
echo "=========================================="
echo ""
echo "请准备好 GitHub 认证信息："
echo "  Username: fank996"
echo "  Password: 你的 GitHub 密码或 Personal Access Token"
echo ""
git branch -M main
git push -u origin main

echo ""
echo "=========================================="
echo "  推送成功！"
echo "=========================================="
echo ""
echo "下一步："
echo "1. 访问仓库：https://github.com/fank996/algorithm-engineer-resume"
echo "2. 进入 Settings > Pages"
echo "3. 将 Source 设置为 'GitHub Actions'"
echo "4. 保存后等待自动部署完成"
echo ""
echo "部署成功后访问："
echo "https://fank996.github.io/algorithm-engineer-resume/"
echo ""
