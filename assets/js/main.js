(function () {
  // 每個語系是各自的靜態頁面(build.js 產生)，這裡只處理語言選單和「也有 X 語版」提示
  var current = document.currentScript.dataset.lang;
  var LANGS = JSON.parse(document.getElementById("kidvox-langs").textContent);
  var STORE_KEY = "kidvox-lang";

  function getSaved() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  // 使用者偏好的語言：自己選過的 → 瀏覽器語言
  function preferredLang() {
    var saved = getSaved();
    if (LANGS[saved]) return saved;
    var prefs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).toLowerCase().split("-")[0];
      if (LANGS[code]) return code;
    }
    return null;
  }

  // ---- 語言提示列：不自動轉址(會害 Google 收錄不到)，只提示有別的語言版 ----
  var hint = document.querySelector(".langhint");
  var want = preferredLang();
  if (want && want !== current) {
    hint.querySelector(".langhint__text").textContent = LANGS[want].hint;
    var go = hint.querySelector(".langhint__go");
    go.textContent = LANGS[want].go;
    go.href = LANGS[want].href;
    go.lang = want;
    go.addEventListener("click", function () { save(want); });
    hint.querySelector(".langhint__close").addEventListener("click", function () {
      // 關掉就當作要留在這個語言，之後不再提示
      save(current);
      hint.hidden = true;
    });
    hint.hidden = false;
  }

  // ---- 語言選單 ----
  var btn = document.querySelector(".lang__btn");
  var menu = document.getElementById("lang-menu");

  function openMenu(open) {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var currentItem = menu.querySelector('[aria-checked="true"]') || menu.querySelector("a");
      currentItem.focus();
    }
  }

  btn.addEventListener("click", function () { openMenu(menu.hidden); });

  menu.addEventListener("click", function (e) {
    var item = e.target.closest("[data-lang]");
    if (item) save(item.dataset.lang);
  });

  menu.addEventListener("keydown", function (e) {
    var items = Array.prototype.slice.call(menu.querySelectorAll("a"));
    var i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });

  document.addEventListener("click", function (e) {
    if (!menu.hidden && !e.target.closest(".lang")) openMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) { openMenu(false); btn.focus(); }
  });

  // ---- 三步驟：窄螢幕是左右滑動，圓點顯示目前第幾步，點圓點可以切換 ----
  var steps = document.querySelector(".steps");
  var cards = steps.querySelectorAll(".step");
  var dots = document.querySelectorAll(".steps__dot");

  function stepWidth() {
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function currentStep() {
    // 捲到底時最後一張可能沒辦法對齊左邊，直接算最後一張
    if (steps.scrollLeft + steps.clientWidth >= steps.scrollWidth - 2) return cards.length - 1;
    return Math.round(steps.scrollLeft / stepWidth());
  }

  function updateDots() {
    var active = currentStep();
    dots.forEach(function (dot, i) {
      dot.setAttribute("aria-current", i === active ? "true" : "false");
    });
  }

  steps.addEventListener("scroll", updateDots, { passive: true });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      steps.scrollTo({ left: i * stepWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  // ---- 首頁：已在首頁時捲回最上面 ----
  document.querySelectorAll('a[href="./"]:not([data-lang])').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0 });
    });
  });
})();
