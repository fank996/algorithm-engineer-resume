# 推送代码到 GitHub 仓库

由于沙箱环境无法交互式输入 GitHub 用户名和密码，你需要手动在本地电脑上推送代码。

## 方法 1：使用 Git 命令推送（推荐）

### 步骤 1：下载项目代码

1. 在沙箱中打包项目：
```bash
cd /workspace/projects
tar -czf resume.tar.gz --exclude='node_modules' --exclude='.git' .
```

2. 将 `resume.tar.gz` 下载到你的本地电脑
3. 在本地解压：
```bash
tar -xzf resume.tar.gz
cd projects
```

### 步骤 2：在本地推送到 GitHub

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "feat: 初始化算法工程师个人简历"

# 添加远程仓库
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git

# 推送代码（首次推送）
git branch -M main
git push -u origin main
```

执行 `git push` 时，系统会提示你输入 GitHub 用户名和密码（或 Personal Access Token）。

## 方法 2：使用 Personal Access Token（推荐）

如果你启用了两步验证，需要使用 Personal Access Token：

### 创建 Personal Access Token

1. 登录 GitHub
2. 进入 `Settings` > `Developer settings` > `Personal access tokens` > `Tokens (classic)`
3. 点击 `Generate new token` > `Generate new token (classic)`
4. 设置 token 名称，勾选 `repo` 权限
5. 点击 `Generate token`，**复制 token（只显示一次）**

### 使用 Token 推送

```bash
# 推送时使用 token 作为密码
git push -u origin main
# Username: fank996
# Password: <粘贴你的 Personal Access Token>
```

## 方法 3：使用 GitHub CLI（可选）

如果你已安装 GitHub CLI：

```bash
# 登录 GitHub
gh auth login

# 推送代码
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git
git branch -M main
git push -u origin main
```

## 推送成功后

### 启用 GitHub Pages

1. 访问你的仓库：https://github.com/fank996/algorithm-engineer-resume
2. 进入 `Settings` > `Pages`
3. 在 `Build and deployment` 部分，将 `Source` 设置为 `GitHub Actions`
4. 保存设置

### 访问你的网站

等待自动部署完成（约 1-2 分钟）后，访问：
```
https://fank996.github.io/algorithm-engineer-resume/
```

## 验证部署

1. 在仓库中点击 `Actions` 标签
2. 查看最新的 workflow 运行状态
3. 状态变为绿色 ✓ 表示部署成功
4. 点击 `Deploy to GitHub Pages` 查看部署详情和访问链接

## 常见问题

### Q: 推送失败，提示 "Authentication failed"
A: 检查你的用户名和密码（或 Personal Access Token）是否正确

### Q: 推送时提示 "remote already exists"
A: 删除旧的远程仓库：
```bash
git remote remove origin
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git
```

### Q: GitHub Pages 显示 404
A: 确保在仓库设置中正确配置了 GitHub Pages，并等待几分钟让 DNS 生效

## 项目配置已就绪

你的项目已包含：
- ✅ 完整的简历代码
- ✅ GitHub Actions 自动部署配置（`.github/workflows/deploy.yml`）
- ✅ 响应式设计
- ✅ 个人信息（FANG XIN，华中科技大学生物医学工程）

只需推送代码并启用 GitHub Pages，即可在线访问你的简历网站！
