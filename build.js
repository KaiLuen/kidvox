#!/usr/bin/env node
/* 產生各語系的靜態頁面：node build.js
 *
 *   src/page.html + src/i18n.js  →  index.html（繁中）、en/、es/、ko/ 的 index.html、sitemap.xml
 *
 * 每個語系一個網址，Google 才會分別收錄；頁面之間用 hreflang 互相標註。
 * 產生出來的檔案不要手改，改 src/ 之後重跑這支。
 */
const fs = require("fs");
const path = require("path");

const SITE = "https://kailuen.github.io/kidvox/";
const DEFAULT_LANG = "en"; // x-default：搜尋者的語言不在這四種裡時給英文版
const ROOT = __dirname;

const I18N = require("./src/i18n.js");
const TEMPLATE = fs.readFileSync(path.join(ROOT, "src/page.html"), "utf8");
const LANGS = Object.keys(I18N);

const escapeHtml = (v) =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 放進 <script> 的 JSON 不能出現 </script>
const inlineJson = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

const pageUrl = (lang) => SITE + I18N[lang].path;

function hreflangTags() {
  const tags = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${I18N[l].htmlLang}" href="${pageUrl(l)}">`
  );
  tags.push(`<link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG)}">`);
  return tags.join("\n");
}

// App 本身 + 常見問題（FAQPage 的內容要跟頁面上看得到的一致，所以兩邊都從 d.faq 產生）
function jsonLd(lang) {
  const d = I18N[lang];
  const app = {
    "@type": "MobileApplication",
    name: d["footer.name"],
    alternateName: lang === "zh" ? "Kidvox" : "童語萌芽",
    description: d["meta.desc"],
    url: pageUrl(lang),
    image: SITE + "assets/img/icon-512.png",
    screenshot: ["say", "list", "home", "rec", "result"].map(
      (name) => `${SITE}assets/img/screens/${lang}/${name}.webp`
    ),
    inLanguage: d.htmlLang,
    operatingSystem: "iOS, Android",
    applicationCategory: "EducationalApplication",
    typicalAgeRange: "2-3",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "CityFun" },
    sameAs: [
      "https://apps.apple.com/tw/app/id6804128361",
      "https://play.google.com/store/apps/details?id=com.cityforfun.kidspeech",
    ],
  };
  const faq = {
    "@type": "FAQPage",
    mainEntity: d.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return inlineJson({ "@context": "https://schema.org", "@graph": [app, faq] });
}

// 問題是純文字，答案可含 HTML（隱私權政策的連結）
function faqHtml(lang) {
  return I18N[lang].faq
    .map(
      ({ q, a }) =>
        `          <details>\n            <summary>${escapeHtml(q)}</summary>\n            <p>${a}</p>\n          </details>`
    )
    .join("\n");
}

function build(lang) {
  const d = I18N[lang];
  const root = d.path ? "../" : "";
  const hrefTo = (l) => root + I18N[l].path || "./";

  const langMenu = LANGS.map((l) => {
    const checked = l === lang ? "true" : "false";
    return `            <li role="none"><a role="menuitemradio" aria-checked="${checked}" href="${hrefTo(l)}" hreflang="${I18N[l].htmlLang}" lang="${I18N[l].htmlLang}" data-lang="${l}">${escapeHtml(I18N[l].langName)}</a></li>`;
  }).join("\n");

  // 給 main.js 的語言提示列用：每個語系的網址和「也有 X 語版」的文字
  const langsJson = inlineJson(
    Object.fromEntries(
      LANGS.map((l) => [l, { href: hrefTo(l), hint: I18N[l].hint, go: I18N[l].hintGo }])
    )
  );

  const ctx = {
    ...d,
    lang,
    root,
    site: SITE,
    url: pageUrl(lang),
    hreflang: hreflangTags(),
    jsonld: jsonLd(lang),
    faqHtml: faqHtml(lang),
    langMenu,
    langsJson,
  };

  return TEMPLATE.replace(/\{\{\{([\w.]+)\}\}\}|\{\{([\w.]+)\}\}/g, (_, raw, text) => {
    const key = raw || text;
    if (!(key in ctx)) throw new Error(`[${lang}] i18n 少了 key：${key}`);
    return raw ? String(ctx[key]) : escapeHtml(ctx[key]);
  });
}

function sitemap() {
  const alternates = LANGS.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${I18N[l].htmlLang}" href="${pageUrl(l)}"/>`
  )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG)}"/>`)
    .join("\n");
  const today = new Date().toISOString().slice(0, 10);
  const urls = LANGS.map(
    (l) => `  <url>\n    <loc>${pageUrl(l)}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

for (const lang of LANGS) {
  const out = path.join(ROOT, I18N[lang].path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, build(lang));
  console.log("寫入", path.relative(ROOT, out));
}
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap());
console.log("寫入 sitemap.xml");
