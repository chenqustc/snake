# Vercel 手动部署指南

由于环境限制，无法直接在当前环境中安装Node.js和Vercel CLI。以下是详细的手动部署步骤，您可以按照这些步骤将贪吃蛇游戏部署到Vercel。

## 步骤1：准备项目文件

项目中已包含所有必要的文件：
- `index.html` - 游戏主体结构
- `style.css` - 诺基亚风格样式
- `script.js` - 贪吃蛇游戏逻辑
- `vercel.json` - Vercel 部署配置

## 步骤2：手动部署到Vercel

### 方法1：通过Vercel官网上传部署

1. **访问Vercel官网**
   - 打开浏览器，访问 https://vercel.com/
   - 登录或注册Vercel账号

2. **创建新项目**
   - 点击右上角的"New Project"按钮
   - 选择"Import Project"
   - 选择"Upload"选项卡

3. **上传项目文件**
   - 点击"Select Files"按钮
   - 同时选择项目中的所有文件：`index.html`、`style.css`、`script.js`、`vercel.json`
   - 点击"Continue"

4. **配置项目**
   - 项目名称：`snake-game-nokia`（或您喜欢的名称）
   - Framework Preset：选择"Other"
   - Root Directory：保持默认
   - Build Command：留空
   - Output Directory：留空
   - 点击"Deploy"

5. **获取部署URL**
   - 部署完成后，Vercel会显示一个成功页面
   - 复制显示的URL，例如：`https://snake-game-nokia.vercel.app`
   - 您的游戏现在已经部署到公网，可以通过这个URL访问

### 方法2：通过GitHub部署

1. **创建GitHub仓库**
   - 访问 https://github.com/new
   - 仓库名称：`snake-game-nokia`
   - 点击"Create repository"

2. **上传项目文件**
   - 在仓库页面，点击"Add file" -> "Upload files"
   - 拖拽或选择所有项目文件上传
   - 输入提交信息，点击"Commit changes"

3. **连接Vercel和GitHub**
   - 在Vercel官网，点击"New Project"
   - 选择"Import Project"
   - 选择"GitHub"选项卡
   - 搜索并选择您刚创建的GitHub仓库
   - 点击"Import"

4. **配置并部署**
   - 保持默认配置，点击"Deploy"
   - 部署完成后，复制生成的URL

## 步骤3：验证部署

部署完成后，在浏览器中访问生成的URL，您应该能够看到贪吃蛇游戏正常运行。

## 游戏功能

- 🟢 90年代诺基亚手机风格
- 🔲 蛇为黑色，食物为红色，明显区分
- ⌨️ 方向键控制蛇的移动
- 📊 实时分数显示
- ⚡ 随着分数增加，游戏速度逐渐提高
- 🎮 游戏结束后按空格键重新开始

## 故障排除

如果部署后游戏无法正常运行：

1. **检查文件是否完整**
   - 确保所有必要的文件都已上传
   - 检查文件名是否正确（区分大小写）

2. **检查vercel.json配置**
   - 确保vercel.json文件内容正确
   - 验证routes配置是否正确

3. **查看Vercel日志**
   - 在Vercel项目页面，点击"Logs"选项卡
   - 查看部署日志，寻找错误信息

4. **联系Vercel支持**
   - 如果问题仍然存在，可以联系Vercel支持团队

## 其他部署选项

除了Vercel，您还可以将游戏部署到其他平台：

- **GitHub Pages**：免费，易于设置
- **Netlify**：无需配置，一键部署
- **Cloudflare Pages**：高性能CDN加速

详细的部署指南请参考 `README.md` 文件。