<div align="center">
  <h1>⚛️ Future Style Periodic Table</h1>
  <h3>互動式未來風格元素週期表 · 沉浸式化學科普 · 中英文雙語支援</h3>
  
  <p>
    118 種元素，宇宙的 5%，盡在指尖綻放。
  </p>

  <p>
    <a href="https://github.com/ruanyf/weekly/blob/master/docs/issue-383.md">
        <img src="https://img.shields.io/badge/科技愛好者周刊-第383期推薦-ff69b4?style=flat-square&logo=rss" alt="Tech Enthusiast Weekly">
    </a>
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  </p>

  <h3>
    👉 <a href="https://open-bbug.github.io/Future-Style-Periodic-Table/">點擊進入：沉浸式體驗 (Live Demo)</a> 👈
  </h3>

  <h4>
    📖 <a href="README_zh-CN.md">简体中文版</a> | <a href="README_en.md">English Version</a>
  </h4>

</div>

---

## 📖 簡介 (Introduction)

**Future Style Periodic Table** 是一個執行於現代瀏覽器的互動式化學元素週期表。不同於傳統的靜態圖表，本專案採用深色電馭叛客（Cyberpunk）風格，融合霓虹光效、玻璃擬態（Glassmorphism，毛玻璃效果）與流暢的互動動畫，重新定義化學元素的視覺呈現。

本專案涵蓋全部 **118 種化學元素**，包含原子序數、相對原子質量（原子量）、電子組態、同位素、常見價數等詳盡資料，並支援多維度熱力圖視覺化與 3D 原子結構模擬，是學習化學知識與探索前端技術的絕佳實踐。

> **🌟 亮點：** 點擊任意元素，即可進入沉浸式詳情頁，拖曳旋轉 3D 原子模型，感受電子雲的軌域之美。支援中英文雙語切換，滿足全球使用者需求。

---

## ✨ 核心特性 (Features)

### 🎨 沉浸式視覺體驗
- **電馭叛客美學**：深色背景搭配動態網格粒子，營造科技感十足的沉浸氛圍。
- **霓虹分類高亮**：10 大元素分類採用獨特配色，懸停時邊框發光流轉。
- **全響應式適配**：從 4K 螢幕到行動裝置，均有優雅的版面配置（含橫螢幕提示）。
- **雙語支援**：一鍵切換中文／英文介面，滿足不同語言使用者的需求。

### 📊 多維度資料視覺化
- **熱力圖模式**：一鍵切換原子半徑、電負度、游離能、熔點、沸點的色譜分布。
- **分類篩選**：點擊圖例即可高亮特定類別（鹼金屬、惰性氣體、鑭系／錒系等）。
- **即時搜尋**：支援透過元素符號、中英文名稱或原子序數快速定位。

### 🔬 3D 原子結構模擬
- **CSS 3D 軌域模型**：基於電子組態演算法即時彩現電子層與旋轉電子。
- **互動升級**：支援滑鼠拖曳／觸控螢幕滑動，360° 旋轉觀察原子結構。
- **獨立放大檢視**：點擊模型左上角圖示可進入全螢幕模式，支援**滾輪縮放**查看電子層細節，沉浸感倍增。
- **詳盡資料卡片**：展示電子組態式、分層電子數、同位素穩定性、常見價數等。

---

## 📸 預覽 (Screenshots)

**週期表總覽**
![Overview](images/overview.png)

**熱力圖模式**
![Heatmap](images/heatmap.png)

<table>
  <tr>
    <th width="54%">元素詳情卡片</th>
    <th width="46%">3D 原子模型</th>
  </tr>
  <tr>
    <td valign="top"><img src="images/detail.png" alt="Element Card" width="100%"></td>
    <td valign="top"><img src="images/atom3d.png" alt="3D Atom" width="100%"></td>
  </tr>
</table>

---

## 🛠️ 技術堆疊 (Tech Stack)

本專案採用 **TypeScript + Vite** 開發，模組化架構，型別安全。

| 技術 | 用途 |
|:---|:---|
| **TypeScript** | 型別安全的業務邏輯、資料處理、事件互動 |
| **Vite** | 開發伺服器、打包建置、模組 HMR (熱替換) |
| **HTML5** | 語義化結構與 DOM 容器 |
| **CSS3** | Grid/Flexbox 佈局、3D Transforms、CSS Variables、Media Queries |

### 技術亮點

- 📐 **CSS Grid**：精確繪製非規則的週期表網格版面配置。
- 🎭 **CSS 3D Transforms**：`transform-style: preserve-3d` 實作電子軌域旋轉。
- 🎨 **CSS Variables**：主題顏色統一管理，便於自訂。
- 📱 **Responsive Design**：多斷點媒體查詢，適配各類螢幕尺寸。
- 🔒 **TypeScript Strict Mode**：完整的型別覆蓋，編譯期捕捉錯誤。
- 🧩 **模組化設計**：功能拆分為獨立模組（table、modal、atom3d、heatmap 等），職責清晰。

---

## 📂 目錄結構 (Structure)

專案採用清晰的模組化結構，TypeScript + Vite 建置。

```
Future-Style-Periodic-Table/
├── public/images/           # 預覽截圖
├── src/                     # 原始碼
│   ├── css/
│   │   └── styles.css       # 樣式檔案
│   ├── types/
│   │   ├── app.ts           # 列舉、型別定義 (Mode, Tab, Language)
│   │   └── element.ts       # 元素資料介面 (Element, RawElement, Category)
│   ├── config/
│   │   ├── categories.ts    # 10 大元素分類 + 顏色
│   │   └── electron.ts      # 電子組態演算法 (軌域填充規則 + 例外)
│   ├── data/
│   │   ├── elements.json    # 118 種元素的完整資料
│   │   └── index.ts         # 資料處理函式
│   ├── i18n/
│   │   ├── zh.ts            # 中文翻譯
│   │   ├── en.ts            # 英文翻譯
│   │   └── index.ts         # t() 翻譯函式 + 工具
│   ├── state/
│   │   └── index.ts         # 集中式狀態管理
│   ├── modules/
│   │   ├── table.ts         # 週期表彩現 + 定位演算法
│   │   ├── legend.ts        # 分類圖例 + 篩選
│   │   ├── heatmap.ts       # 熱力圖模式 (7 種)
│   │   ├── atom3d.ts        # 3D 原子模型 + 拖曳／縮放
│   │   ├── modal.ts         # 詳情彈窗 + 5 個分頁
│   │   ├── media.ts         # 圖片懶載入 + 逾時重試
│   │   └── search.ts        # 搜尋過濾
│   ├── utils/
│   │   └── dom.ts           # DOM 輔助函式
│   └── main.ts              # 進入點：初始化 + 事件繫結
├── index.html               # 進入點 HTML
├── package.json             # 套件管理
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 建置配置
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages 自動部署
├── README.md                # 繁體中文文件
├── README_zh-CN.md          # 簡體中文文件
├── README_en.md             # 英文文件
└── LICENSE                  # MIT 開源授權協定
```

---

## 🚀 快速開始 (How to Run)

### 開發環境

```bash
# 複製專案
git clone https://github.com/open-bbug/Future-Style-Periodic-Table.git
cd Future-Style-Periodic-Table

# 安裝套件
npm install

# 啟動開發伺服器
npm run dev
```

然後造訪 `http://localhost:5173/Future-Style-Periodic-Table/`

### 建置部署

```bash
# 生產建置
npm run build

# 預覽建置結果
npm run preview
```

推送到 `main` 分支會透過 GitHub Actions 自動部署到 GitHub Pages。

### 瀏覽器相容性
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## ⚠️ 科學聲明

本專案中的 **3D 原子模型為簡化的波耳模型視覺化**，僅用於教學演示目的，**並非真實的電子雲機率分布**。實際電子行為遵循量子力學原理，電子以機率雲形式存在於原子軌域中。

---

## 🤝 致謝 (Credits)

本專案的完善離不開社群的支援，特別感謝以下貢獻者：

- **程式碼貢獻**：感謝 [Melody Young (@keepwow)](https://github.com/keepwow) 提供的英文適配與國際化支援。

- **資料來源**：
  - 主要元素資料來自 [Bowserinator/Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)，採用 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 授權
  - 價數與同位素資料基於公開資料整理

- **原始靈感**：[抖音影片連結](https://www.douyin.com/video/7575067444734622385)
>  - *如果您希望參與貢獻或修改署名方式，請隨時提交 Pull Request 或 Issue。*
  ---

## 📄 開源授權 (License)

本專案採用 [MIT License](LICENSE) 開源授權協定。

- ✅ 你可以自由地使用、複製、修改和分發本專案。
- 📝 請在衍生作品中保留原作者的版權聲明。

---

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=open-bbug/Future-Style-Periodic-Table&type=Date)](https://star-history.com/#open-bbug/Future-Style-Periodic-Table&Date)

---
<div align="center">
  <sub>Designed with ❤️ by Sean Wong</sub>
</div>
