# 本地推送代码到 GitHub 的步骤

由于沙箱环境无法交互式输入 GitHub 认证信息，请按照以下步骤在你的本地电脑上推送代码。

## 方式 1：手动下载并推送（推荐）

### 步骤 1：下载项目代码

**方法 A：从沙箱下载文件**
1. 访问沙箱文件管理器
2. 下载以下文件和目录到你的本地电脑：
   - 所有源代码文件（`src/` 目录）
   - 配置文件（`.github/`, `vite.config.ts`, `package.json`, `tsconfig.json` 等）
   - 文档文件（`README.md`, `DEPLOY_GUIDE.md`）
   - 不需要下载：`node_modules/`, `dist/`, `.git/`

**方法 B：使用 Git 克隆（如果已有仓库）**
```bash
# 在你的本地电脑上
git clone https://github.com/fank996/algorithm-engineer-resume.git
cd algorithm-engineer-resume
```

### 步骤 2：在本地初始化并推送

```bash
# 进入项目目录
cd algorithm-engineer-resume

# 安装依赖
pnpm install

# 初始化 Git（如果还没有 .git 目录）
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

执行 `git push` 时，会提示输入：
- **Username**: `fank996`
- **Password**: 输入你的 GitHub 密码或 Personal Access Token

## 方式 2：使用 GitHub Desktop（图形界面，适合新手）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)

2. 打开 GitHub Desktop，点击 `File` > `Clone Repository`

3. 输入仓库地址：
   ```
   https://github.com/fank996/algorithm-engineer-resume.git
   ```

4. 将项目文件复制到克隆的目录

5. 在 GitHub Desktop 中：
   - 查看更改
   - 填写提交信息："feat: 初始化算法工程师个人简历"
   - 点击 `Commit to main`
   - 点击 `Publish repository` 或 `Push origin`

## 方式 3：使用 Personal Access Token（推荐用于两步验证）

### 创建 Token

1. 登录 GitHub
2. 访问：https://github.com/settings/tokens
3. 点击 `Generate new token (classic)`
4. 设置名称：`resume-push`
5. 勾选权限：`repo`（Full control of private repositories）
6. 点击 `Generate token`
7. **复制 token（只显示一次！）**

### 使用 Token 推送

```bash
git push -u origin main
# Username: fank996
# Password: <粘贴你的 Personal Access Token>
```

## 推送成功后的验证

### 1. 检查仓库

访问：https://github.com/fank996/algorithm-engineer-resume
- 确认所有文件都已上传
- 检查代码是否正确

### 2. 启用 GitHub Pages

1. 在仓库中点击 `Settings`
2. 左侧菜单找到 `Pages`
3. 在 `Build and deployment` 部分：
   - `Source` 选择 `GitHub Actions`
   - 点击 `Save`

### 3. 查看部署状态

1. 点击仓库的 `Actions` 标签
2. 查看最新的 workflow 运行
3. 等待状态变为绿色 ✓（约 1-2 分钟）

### 4. 访问网站

部署成功后，访问：
```
https://fank996.github.io/algorithm-engineer-resume/
```

## 常见问题

### Q: 推送失败，提示 "Authentication failed"
**A**: 检查以下几点：
- 用户名是否为 `fank996`
- 密码是否正确（或 Personal Access Token 是否有效）
- Token 是否有 `repo` 权限

### Q: 提示 "remote already exists"
**A**: 删除旧的远程仓库配置：
```bash
git remote remove origin
git remote add origin https://github.com/fank996/algorithm-engineer-resume.git
git push -u origin main
```

### Q: 推送时提示 "Updates were rejected"
**A**: GitHub 仓库已有内容，强制推送：
```bash
git push -u origin main --force
```
**注意**：这会覆盖远程仓库的所有内容

### Q: GitHub Pages 显示 404
**A**:
1. 确认在 `Settings` > `Pages` 中已启用 GitHub Pages
2. 检查 `Source` 是否设置为 `GitHub Actions`
3. 等待几分钟让 DNS 生效
4. 清除浏览器缓存后重试

### Q: 部署失败，Actions 报错
**A**:
1. 检查 `.github/workflows/deploy.yml` 文件是否存在
2. 查看 Actions 的错误日志
3. 确认 `pnpm run build` 在本地能成功运行

## 快速检查清单

推送前确保：
- [ ] 已安装 Node.js 和 pnpm
- [ ] 已安装 Git
- [ ] GitHub 仓库已创建（https://github.com/fank996/algorithm-engineer-resume）
- [ ] 已准备好 GitHub 用户名和密码/Token

推送后检查：
- [ ] 所有文件已上传到 GitHub
- [ ] GitHub Actions 自动部署运行成功
- [ ] 网站可以正常访问

## 需要帮助？

- GitHub 官方文档：https://docs.github.com
- Git 官方文档：https://git-scm.com/doc
- GitHub Pages 指南：https://pages.github.com/

---

**祝部署顺利！** 🎉
