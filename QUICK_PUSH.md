# 🚀 快速推送指南

## 问题说明
由于沙箱环境无法交互式输入 GitHub 认证信息，**你需要在自己电脑上执行推送操作**。

## 方法 1：使用一键推送脚本（最简单）

### 步骤 1：下载项目

1. 从沙箱下载 `/tmp/resume.tar.gz`（40KB）
2. 在本地解压：
```bash
tar -xzf resume.tar.gz
cd projects
```

### 步骤 2：安装依赖

```bash
pnpm install
```

### 步骤 3：运行推送脚本

```bash
chmod +x push.sh
bash push.sh
```

脚本会自动：
- 初始化 Git 仓库
- 添加所有文件
- 提交更改
- 配置远程仓库
- 推送到 GitHub

执行 `git push` 时输入：
- **Username**: `fank996`
- **Password**: 你的 GitHub 密码或 Personal Access Token

---

## 方法 2：手动推送命令

```bash
cd projects

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化算法工程师个人简历"

# 添加远程仓库
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git

# 推送
git branch -M main
git push -u origin main
```

---

## 推送成功后

### 1. 启用 GitHub Pages

1. 访问：https://github.com/fank996/algorithm-engineer-resume
2. 进入 `Settings` > `Pages`
3. 将 `Source` 设置为 `GitHub Actions`
4. 保存

### 2. 等待部署

- 进入 `Actions` 标签查看部署状态
- 约 1-2 分钟后完成

### 3. 访问网站

```
https://fank996.github.io/algorithm-engineer-resume/
```

---

## 详细文档

- 完整推送指南：`LOCAL_PUSH_INSTRUCTIONS.md`
- 部署指南：`DEPLOY_GUIDE.md`
- 项目说明：`README.md`

---

## 快速检查

✅ 下载 `resume.tar.gz` 到本地
✅ 解压并进入目录
✅ 安装依赖：`pnpm install`
✅ 运行脚本：`bash push.sh`
✅ 输入 GitHub 认证信息
✅ 等待 GitHub Actions 自动部署
✅ 访问你的简历网站！

---

**祝部署顺利！** 🎉
