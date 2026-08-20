# 一桥入境｜垂虹文化街区

垂虹文化街区品牌交互网页的 GitHub Pages 版本，包含完整页面、品牌图片、辅助图形及交互动效。

## 上传到 GitHub

1. 在 GitHub 新建一个空仓库，建议命名为 `chuihong-cultural-street`。
2. 解压本文件包，把解压后的全部文件上传到仓库根目录，不要只上传外层文件夹。
3. 确保默认分支名称为 `main`。
4. 进入仓库的 `Settings → Pages`。
5. 在 `Build and deployment` 中，将 `Source` 选择为 `GitHub Actions`。
6. 回到仓库的 `Actions` 页面，等待 `Deploy to GitHub Pages` 工作流完成。
7. 发布成功后，网站地址通常为：`https://你的用户名.github.io/仓库名/`。

以后只要更新 `main` 分支，网站会自动重新构建和发布。

## 本地查看

安装 Node.js 22.13.0 或更高版本后，在项目目录运行：

```bash
npm ci
npm run dev
```

## 正式构建

```bash
npm run build
```

构建结果位于 `dist/` 文件夹。

## 主要文件

- `src/App.tsx`：页面内容和交互逻辑。
- `src/styles.css`：页面视觉、动效与响应式布局。
- `public/assets/`：景区照片、品牌应用图片和辅助图形。
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动发布配置。

## 品牌使用提醒

垂虹Logo底部为实心半圆形，不是半圆弧。后续修改时请勿改变Logo三个主体图形的原始轮廓和组合关系。
