# 高旭个人网站

这是一个简洁、现代的个人网站项目，用于展示高旭的个人信息、教育经历、工作经历、学术成果和个人爱好。

## 项目结构

```
personal_website/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── profile.jpg (可选)
├── index.html
└── README.md
```

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 现代化UI设计，包含渐变色和阴影效果
- 平滑滚动和导航栏高亮效果
- 时间线布局展示教育和工作经历
- 网格布局展示个人爱好
- 使用Font Awesome图标增强视觉效果

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 动画效果)
- JavaScript (原生JS，无框架)
- Font Awesome (图标库)

## 如何使用

1. 克隆或下载此仓库
2. 在浏览器中打开`index.html`文件即可查看网站
3. 根据需要修改内容和样式

## 自定义

- 在`index.html`中修改个人信息
- 在`css/style.css`中调整样式
- 在`js/script.js`中添加或修改交互效果
- 在`images/`目录中添加个人照片和其他图片

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

## 许可证

MIT许可证

## 如何部署到互联网

有多种方法可以将此网站部署到互联网上，以下是几种常见的方法：

### 1. 使用GitHub Pages（免费）

1. 在GitHub上创建一个新的仓库
2. 将网站文件上传到仓库
3. 在仓库设置中启用GitHub Pages
4. 网站将在 `https://你的用户名.github.io/仓库名` 上可访问

详细步骤：
```
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

然后在GitHub仓库设置中，找到"Pages"选项并启用。

### 2. 使用Netlify（免费）

1. 注册Netlify账号
2. 创建新站点，选择"从Git导入"
3. 连接到您的GitHub/GitLab/Bitbucket仓库
4. 选择包含网站的仓库
5. 点击部署

### 3. 使用Vercel（免费）

类似Netlify的流程，注册后连接到您的代码仓库。

### 4. 使用传统虚拟主机

1. 注册一个虚拟主机服务（如阿里云、腾讯云等）
2. 购买域名（可选）
3. 使用FTP工具（如FileZilla）上传网站文件到主机
4. 配置域名指向您的主机

## 本地测试

在部署前，您可以在本地测试网站：

```
cd personal_website
python -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000` 