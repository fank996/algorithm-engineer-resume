# GitHub Pages 部署指南

本指南将帮助你将算法工程师个人简历网站部署到 GitHub Pages。

## 步骤 1：准备代码

1. 确保你已经在本地完成了项目的构建
2. 将 `/workspace/projects` 目录下的所有文件复制到你的本地开发环境

## 步骤 2：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)
2. 点击右上角的 `+` 号，选择 `New repository`
3. 填写仓库信息：
   - **Repository name**: `resume` 或 `yourname-resume`（你的名字-resume）
   - **Description**: 算法工程师个人简历
   - **Public/Private**: 根据需要选择（推荐 Public）
   - **不要勾选** "Add a README file"
   - **不要勾选** "Add .gitignore"
   - **不要选择** "Choose a license"
4. 点击 `Create repository`

## 步骤 3：推送代码到 GitHub

在你的本地终端中执行以下命令：

```bash
# 进入项目目录
cd /path/to/your/project

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "feat: 初始化算法工程师个人简历网站"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/yourusername/resume.git

# 推送代码
git branch -M main
git push -u origin main
```

## 步骤 4：配置 GitHub Pages

### 方式 1：使用 GitHub Actions 自动部署（推荐）

1. 在仓库根目录创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. 提交并推送这个文件：
```bash
git add .github/workflows/deploy.yml
git commit -m "chore: 添加 GitHub Pages 自动部署配置"
git push
```

3. 在 GitHub 仓库中：
   - 进入 `Settings` > `Pages`
   - 在 `Build and deployment` 部分，将 `Source` 设置为 `GitHub Actions`
   - 保存后，GitHub Actions 会自动运行部署流程

### 方式 2：手动部署 dist 目录

如果你不想使用 GitHub Actions，可以手动部署：

1. 构建项目：
```bash
pnpm run build
```

2. 将 `dist` 目录内容移动到 `gh-pages` 分支：
```bash
git checkout -b gh-pages
git add -f dist
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. 在 GitHub 仓库中：
   - 进入 `Settings` > `Pages`
   - 在 `Build and deployment` 部分，将 `Source` 设置为 `Deploy from a branch`
   - 选择 `gh-pages` 分支和 `/ (root)` 目录
   - 点击 `Save`

## 步骤 5：访问你的网站

部署成功后，你的网站将可以通过以下 URL 访问：

```
https://yourusername.github.io/resume/
```

其中 `yourusername` 是你的 GitHub 用户名，`resume` 是你的仓库名称。

## 自定义简历内容

### 修改个人信息

编辑 `src/components/Resume.tsx` 文件，修改以下部分：

1. **个人信息**（头像、姓名、联系方式等）
2. **个人简介**（About 部分）
3. **技能栈**（Skills 部分）
4. **工作经历**（Experiences 部分）
5. **项目经验**（Projects 部分）
6. **教育背景**（Education 部分）
7. **荣誉奖项**（Awards 部分）

### 修改颜色主题

在 `src/components/Resume.tsx` 中搜索颜色类名，如：
- `blue-600`、`blue-800` - 蓝色主题
- `gray-50`、`gray-100` - 灰色背景

你可以将其替换为其他 Tailwind CSS 颜色，例如：
- `green-600` - 绿色
- `purple-600` - 紫色
- `red-600` - 红色
- `indigo-600` - 靛青色

### 添加头像图片

1. 将你的头像图片放到 `public/` 目录下（如果没有则创建该目录）
2. 修改 `src/components/Resume.tsx` 中的头像部分：

```tsx
// 替换原有的头像 div
<img
  src="/your-avatar.jpg"
  alt="张三"
  className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
/>
```

## 更新网站内容

修改内容后，重新部署：

```bash
# 1. 提交更改
git add .
git commit -m "feat: 更新简历内容"
git push

# 2. 等待 GitHub Actions 自动部署完成（约 1-2 分钟）
# 3. 访问你的网站查看更新
```

## 常见问题

### Q: 部署后显示 404 错误

A: 确保：
1. 仓库名称正确
2. 分支名称正确
3. GitHub Pages 设置中的源和分支配置正确

### Q: 样式显示不正确

A: 检查：
1. 构建是否成功（`pnpm run build`）
2. `dist/index.html` 中引用的 CSS 和 JS 文件路径是否正确
3. 浏览器缓存（尝试强制刷新：Ctrl+F5 或 Cmd+Shift+R）

### Q: 如何使用自定义域名？

A:
1. 在你的域名 DNS 设置中添加 CNAME 记录：
   - 主机记录：`www`（或空）
   - 记录值：`yourusername.github.io`

2. 在 GitHub 仓库中：
   - 进入 `Settings` > `Pages`
   - 在 `Custom domain` 中输入你的域名
   - 点击 `Save`
   - 等待 DNS 生效

## 技术栈

- **框架**: React 19
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **图标**: Lucide React

## 许可证

本项目采用 MIT 许可证，你可以自由使用和修改。

---

如有问题，请查看 GitHub Pages 官方文档：https://docs.github.com/en/pages
