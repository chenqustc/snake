# 贪吃蛇游戏 - 诺基亚风格

一个模仿 90 年代诺基亚手机风格的贪吃蛇游戏，使用 HTML、CSS 和 JavaScript 开发。

## 游戏特色

- 🎮 经典贪吃蛇游戏玩法
- 🟢 90 年代诺基亚手机风格设计
- 🔲 绿色背景配黑色像素块
- 🔴 红色食物，与蛇身明显区分
- ⌨️ 方向键控制
- 📊 实时分数显示
- ⚡ 随着分数增加，游戏速度逐渐提高

## 项目结构

```
snake/
├── index.html      # 游戏主体结构
├── style.css       # 诺基亚风格样式
├── script.js       # 贪吃蛇游戏逻辑
├── vercel.json     # Vercel 部署配置
└── README.md       # 项目说明文档
```

## 本地运行

1. 在项目目录中启动 HTTP 服务器：
   ```bash
   python -m http.server 8000
   ```

2. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

## 部署到公网

### 方法 1：GitHub Pages

1. 在 GitHub 上创建一个新仓库
2. 将项目推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
3. 在 GitHub 仓库的 "Settings" 中，找到 "Pages" 选项
4. 选择 "main" 分支，点击 "Save"
5. 等待几分钟，游戏将可以通过 `https://<username>.github.io/<repo-name>/` 访问

### 方法 2：Netlify

1. 访问 https://www.netlify.com/
2. 点击 "Sign Up" 注册账号
3. 点击 "New site from Git"
4. 选择 "GitHub" 并授权
5. 选择你的贪吃蛇游戏仓库
6. 保持默认配置，点击 "Deploy site"
7. 部署完成后，Netlify 将提供一个公网可访问的 URL

### 方法 3：Vercel

1. 访问 https://vercel.com/
2. 注册或登录账号
3. 点击 "New Project"
4. 选择 "Import Project"
5. 选择你的贪吃蛇游戏仓库
6. 保持默认配置，点击 "Deploy"
7. 部署完成后，Vercel 将提供一个公网可访问的 URL

### 方法 4：Cloudflare Pages

1. 访问 https://pages.cloudflare.com/
2. 注册或登录账号
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择你的贪吃蛇游戏仓库
6. 保持默认配置，点击 "Save and Deploy"
7. 部署完成后，Cloudflare Pages 将提供一个公网可访问的 URL

## 游戏说明

- 使用方向键控制蛇的移动
- 吃到红色食物可以增加分数
- 游戏速度会随着分数的增加而提高
- 撞墙或撞到自己的身体时游戏结束
- 游戏结束后，按空格键可以重新开始

## 技术栈

- **HTML5**：游戏主体结构和 Canvas 绘图
- **CSS3**：诺基亚手机风格设计
- **JavaScript**：游戏逻辑和交互

## 浏览器兼容性

支持所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT License