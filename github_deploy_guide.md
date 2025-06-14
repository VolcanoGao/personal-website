# GitHub Pages 部署教程

这是一个详细的教程，指导如何将您的个人网站部署到 GitHub Pages 上。

## 步骤 1: 创建 GitHub 账号

如果您还没有 GitHub 账号，请先在 [GitHub](https://github.com/) 注册一个账号。

## 步骤 2: 创建新仓库

1. 登录您的 GitHub 账号
2. 点击右上角的 "+" 图标，选择 "New repository"
3. 填写仓库名称，例如 "personal-website"
4. 添加描述（可选）
5. 选择 "Public"（公开）
6. 不要勾选 "Initialize this repository with a README"
7. 点击 "Create repository" 创建仓库

## 步骤 3: 准备您的网站文件

确保您的网站文件已经准备好，包括：
- index.html
- css/ 目录
- js/ 目录
- images/ 目录

## 步骤 4: 上传文件到 GitHub

在您的计算机上打开终端，执行以下命令：

```bash
# 进入您的网站目录
cd personal_website

# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始网站文件"

# 添加远程仓库
git remote add origin https://github.com/您的用户名/personal-website.git

# 推送到 GitHub
git push -u origin main
```

如果您的默认分支是 `master` 而不是 `main`，请将最后一条命令中的 `main` 替换为 `master`。

## 步骤 5: 配置 GitHub Pages

1. 在 GitHub 上打开您的仓库
2. 点击仓库页面顶部的 "Settings" 选项卡
3. 在左侧菜单中，滚动到 "Code and automation" 部分，点击 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 在 "Branch" 下拉菜单中，选择 "main"（或 "master"）和 "/(root)" 目录
6. 点击 "Save"

## 步骤 6: 访问您的网站

GitHub Pages 需要几分钟时间来部署您的网站。部署完成后，您可以在以下网址访问您的网站：

```
https://您的用户名.github.io/personal-website/
```

## 步骤 7: 更新您的网站

当您需要更新网站内容时，只需修改本地文件，然后执行以下命令：

```bash
git add .
git commit -m "更新网站内容"
git push
```

GitHub Pages 会自动重新部署您的网站。

## 常见问题

### 问题：我的网站没有显示或者显示 404 错误

解决方案：
- 确保您的主页文件名为 `index.html`
- 确保您正确配置了 GitHub Pages
- 检查仓库名称是否与 URL 中使用的名称相符

### 问题：我的图片或样式没有加载

解决方案：
- 确保所有文件路径正确
- 检查文件权限
- 确保您上传了所有必要的文件

### 问题：我想使用自定义域名

如果您想使用自己的域名而不是 github.io 子域名：

1. 在仓库的 GitHub Pages 设置中，在 "Custom domain" 字段中输入您的域名
2. 在您的域名注册商处，添加 DNS 记录指向 GitHub Pages 服务器
3. 等待 DNS 更改生效（最多可能需要 48 小时）

## 其他资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [使用 GitHub Desktop](https://desktop.github.com/) - 如果您不熟悉命令行