# kidvox
KidSpeech – A fun speech learning app for toddlers aged 2–3, featuring interactive flashcards, pronunciation practice, and educational games.

童語萌芽 Kidvox 的介紹網站，純靜態頁面。

## 結構

```
src/page.html           版面模板：AppBar（Brand / 首頁 / Language）→ Content → Footer
src/i18n.js             四種語言的所有文案（zh / en / es / ko）
build.js                產生各語系頁面和 sitemap.xml
assets/css/style.css    樣式（配色對齊 App 的 ProjectColors）
assets/js/main.js       語言選單、「也有 X 語版」提示列
assets/img/screens/     各語言的 App 截圖（600×1300 webp）

index.html              ← 產生出來的，不要手改
en/ es/ ko/index.html   ← 同上
sitemap.xml             ← 同上
```

## 改文案

1. 改 `src/i18n.js`（或改版面就改 `src/page.html`）
2. 執行 `node build.js`
3. 把產生出來的 `index.html`、`en/`、`es/`、`ko/`、`sitemap.xml` 一起 commit

## SEO

- 每個語系各一個網址：`/`（繁中）、`/en/`、`/es/`、`/ko/`，用 hreflang 互相標註，x-default 指向英文版
- 不依瀏覽器語言自動轉址（Googlebot 用英文環境抓，自動轉址會讓中文版收錄不到），改成在頁面上方提示「也有 X 語版」
- 主關鍵字要留在 `meta.title`、`meta.desc`、`hero.eyebrow`（頁面的 H1）和內文：
  發音練習 / 幼兒 / 兒童、pronunciation practice / toddler / kids、pronunciación / niños、발음 연습 / 유아 / 어린이
- 長尾關鍵字放在 H2 和 FAQ：學說話、生活詞彙、英文發音、發音評分、字卡（各語言對應詞見 `src/i18n.js` 開頭）
- FAQ 同時產生頁面上的問答和 FAQPage 結構化資料，只要改 `src/i18n.js` 的 `faq`
- 網址寫在 `build.js` 的 `SITE`，之後換自訂網域要改這裡

## 本機預覽

`python3 -m http.server` 之後開 http://localhost:8000/ 。直接雙擊 index.html 也能看，但 YouTube 影片會播不出來。

## 上線

GitHub repo → Settings → Pages → Source 選 `main` 分支、根目錄，網址會是 https://kailuen.github.io/kidvox/

上線後到 Google Search Console 新增「網址前置字元」資源 `https://kailuen.github.io/kidvox/`，驗證後提交 `sitemap.xml`。
