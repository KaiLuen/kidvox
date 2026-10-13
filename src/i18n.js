/* 介紹網站的多國語言字串（所有文案都在這裡，改完執行 `node build.js`）
 * key 對應 src/page.html 的 {{key}}（純文字）與 {{{key}}}（可含 HTML）
 * faq 是陣列，build.js 會產生頁面上的問答和 FAQPage 結構化資料；q 是純文字，a 可含 HTML
 * 用字對齊 App 內字串：念念看＝Say it／Dilo／말해보기、找找看＝Find it／Encuéntralo／찾아보기、
 *   發音評分難度＝Scoring Level／Nivel de dificultad／채점 난이도
 * SEO 關鍵字（主）：發音練習、幼兒／兒童 → pronunciation practice, toddler, kids → pronunciación, niños → 발음 연습, 유아, 어린이
 *   要出現在 meta.title、meta.desc、hero.eyebrow（頁面 H1）和內文裡，改文案時別把它們拿掉
 * SEO 關鍵字（長尾，放在 H2 和 FAQ）：學說話、生活詞彙、英文發音、發音評分、字卡
 *   → learn to talk, first words, speech, second language → aprender a hablar, primeras palabras, inglés
 *   → 첫 말, 말이 트이다, 영어 발음, 낱말 카드
 */
var PRIVACY_URL = "https://kailuen.github.io/kidspeech.privacy/";
var privacyLink = function (label) {
  return '<a href="' + PRIVACY_URL + '" target="_blank" rel="noopener">' + label + "</a>";
};

module.exports = {
  zh: {
    htmlLang: "zh-Hant",
    langName: "繁體中文",
    path: "",
    ogLocale: "zh_TW",
    hint: "這個網頁也有繁體中文版",
    hintGo: "切換",
    "meta.title": "兒童發音練習字卡 App｜童語萌芽 Kidvox，陪 2–3 歲幼兒學說話",
    "meta.desc": "給 2–3 歲幼兒的發音練習字卡 App。看圖卡、聽發音，按住麥克風跟著念，馬上看到發音分數。動物、水果、交通工具等生活詞彙，陪寶寶學說話；換成英文也能練英文發音。沒有廣告、不用註冊。",

    "brand.name": "童語萌芽",
    "brand.sub": "Kidvox",
    "nav.home": "首頁",
    "nav.lang": "語言",

    "hero.eyebrow": "給 2–3 歲幼兒的發音練習字卡",
    "hero.title": "讓孩子自己<br><mark>愛上開口說話</mark>",
    "hero.lead": "看圖卡、聽發音、跟著念。按住麥克風念一次，放開手就看到發音分數，念錯也只會聽到「再念一次看看」。",
    "hero.pill1": "沒有廣告",
    "hero.pill2": "不用註冊",
    "hero.pill3": "部分主題免費",
    "badge.ios": "下載於",
    "badge.play": "立即取得",

    "video.kicker": "實際玩給你看",
    "video.title": "看孩子自己練習發音的樣子",
    "video.body": "選主題、點圖卡聽發音、按住麥克風跟著念，念完馬上看到分數。孩子自己就玩得起來。",
    "video.note": "",
    "video.link": "在 YouTube 上看",
    "video.iframe": "孩子自己用童語萌芽練習發音",

    "steps.kicker": "怎麼玩",
    "steps.title": "三個步驟，不識字也會玩",
    "step1.title": "選主題",
    "step1.body": "動物、交通工具、水果、蔬菜、顏色、身體……挑一個孩子喜歡的開始。",
    "step2.title": "念念看",
    "step2.body": "點圖卡聽發音，按住麥克風跟著念，放開手就給發音分數。",
    "step3.title": "找找看",
    "step3.body": "小測驗把剛學的詞找出來，全部答對拿三顆星。",

    "kids.kicker": "為孩子設計",
    "kids.title": "為 2–3 歲幼兒設計的每個細節",
    "k1.title": "一次一張大圖卡",
    "k1.body": "畫面乾淨，孩子不會分心。",
    "k2.title": "只有點一下和按住",
    "k2.body": "還不會認字，也能自己玩。",
    "k3.title": "念錯不責備",
    "k3.body": "只會說「再念一次看看」，害羞的孩子也敢開口。",
    "k4.title": "想念幾次都可以",
    "k4.body": "每個詞都能重複聽、重複念，沒有次數限制。",

    "parents.kicker": "家長放心",
    "parents.title": "家長在意的事，我們先做好了",
    "p1.title": "沒有廣告",
    "p1.body": "App 裡沒有任何第三方廣告，不會有東西跳出來打斷孩子。",
    "p2.title": "家長確認關卡",
    "p2.body": "設定和訂閱擋在一道算數題後面，孩子自己點不進去。",
    "p3.title": "不用註冊",
    "p3.body": "沒有帳號、不用登入，不蒐集姓名、生日或任何個人資料。",
    "p4.title": "錄音用完就刪",
    "p4.body": "只有按住按鈕時才錄音，評分完立刻刪除，我們不留存任何錄音。",

    "topics.kicker": "學什麼",
    "topics.title": "從生活詞彙開始學說話",
    "topics.lead": "從兒童身邊看得到、摸得到的東西開始認識詞彙、練習發音，主題陸續增加中。",
    "t.animals": "動物",
    "t.vehicles": "交通工具",
    "t.streets": "城市街道",
    "t.fruits": "水果",
    "t.vegetables": "蔬菜",
    "t.food": "食物與飲料",
    "t.colors": "顏色",
    "t.body": "身體",
    "t.clothes": "衣服",

    "langs.kicker": "多國語言",
    "langs.title": "四種語言，也能練英文發音",
    "langs.lead": "在設定裡換語言，圖卡的詞、發音示範和評分都會跟著換。想讓孩子練英文發音，換成 English 就可以。",

    "faq.kicker": "FAQ",
    "faq.title": "常見問題",
    faq: [
      {
        q: "和一般的字卡有什麼不同？",
        a: "一般字卡多半只能看圖、聽發音。童語萌芽多了「念念看」：孩子按住麥克風念一次，App 會聽、會給發音分數，念完馬上知道自己念對了沒，也就更願意一直開口練習。"
      },
      {
        q: "適合幾歲的兒童？",
        a: "以 2–3 歲剛開始學說話的幼兒為主。大一點的兒童，或正在學英文的孩子，也可以拿來認識新詞、練習發音。"
      },
      {
        q: "孩子還不太會說話，也可以玩嗎？",
        a: "可以。先點圖卡聽發音，等孩子願意了再按住麥克風念念看。圖卡一次一張、每個詞都能重複聽，念錯也只會聽到「再念一次看看」。不過這是陪孩子練習開口的小遊戲，不是語言治療工具；每個孩子開口的時間不一樣，如果擔心孩子的語言發展，請諮詢小兒科醫師或語言治療師。"
      },
      {
        q: "可以練英文發音嗎？",
        a: "可以。在設定裡把語言換成 English，圖卡的詞、發音示範和評分就會變成英文（App 介面也會一起換成英文）。也可以換成西班牙文或韓文。"
      },
      {
        q: "發音分數怎麼算？太嚴格怎麼辦？",
        a: "孩子念完，App 會用語音辨識比對正確的發音，給出 0–100 的發音分數，達到及格分數就算念對。家長可以在設定裡調整「發音評分難度」：簡單（40 分）、中等（60 分，預設）、高級（80 分），剛開始學說話的孩子可以從簡單開始。"
      },
      {
        q: "要付費嗎？",
        a: "App 免費下載。動物、交通工具、城市街道、水果這四個主題免費，可以完整玩「念念看」和「找找看」；其他主題要訂閱才能解鎖，訂閱也包含之後新增的主題。有月費和年費方案，價格以 App 內顯示為準。"
      },
      {
        q: "需要連網路嗎？",
        a: "「念念看」的發音評分需要網路。每個主題的圖卡和聲音第一次打開時會下載，之後就存在裝置上。"
      },
      {
        q: "孩子的錄音會被保存嗎？",
        a: "不會。只有按住麥克風時才錄音（單次最長 10 秒），錄音會傳送到語音辨識服務評分，結束後裝置上的暫存檔立刻刪除。我們沒有自己的伺服器，不留存、不分析、也不販售任何錄音。詳見" + privacyLink("隱私權政策") + "。"
      },
      {
        q: "可以在哪些裝置上玩？",
        a: "iPhone、iPad，以及 Android 手機和平板。"
      }
    ],

    "cta.title": "今天就陪寶寶開口說說看",
    "cta.lead": "免費下載，不用註冊，打開就能玩。",
    "cta.qr": "用手機相機掃描 QR Code",

    "footer.name": "童語萌芽 Kidvox",
    "footer.tagline": "給 2–3 歲幼兒的發音練習字卡",
    "footer.privacy": "隱私權政策",
    "footer.contact": "聯絡我們",

    "alt.list": "動物主題的圖卡列表",
    "alt.say": "念念看發音練習畫面：念對了，發音分數 90",
    "alt.home": "主題選單畫面",
    "alt.rec": "按住麥克風跟著念",
    "alt.result": "找找看全部答對，拿到三顆星"
  },

  en: {
    htmlLang: "en",
    langName: "English",
    path: "en/",
    ogLocale: "en_US",
    hint: "This page is also available in English.",
    hintGo: "Switch",
    "meta.title": "Kidvox – Toddler Speech & Pronunciation Practice App, Ages 2–3",
    "meta.desc": "Speech flashcards that help toddlers and young kids (ages 2–3) learn first words. Say the word into the mic and get an instant pronunciation score. No ads.",

    "brand.name": "Kidvox",
    "brand.sub": "",
    "nav.home": "Home",
    "nav.lang": "Language",

    "hero.eyebrow": "Pronunciation practice flashcards for toddlers aged 2–3",
    "hero.title": "Help your toddler<br><mark>love to talk</mark>",
    "hero.lead": "Look at a card, hear the word, say it out loud. Hold the mic, say it once, and let go to see a pronunciation score. A missed word only ever hears “Try saying it again.”",
    "hero.pill1": "No ads",
    "hero.pill2": "No sign-up",
    "hero.pill3": "Some topics free",
    "badge.ios": "Download on the",
    "badge.play": "GET IT ON",

    "video.kicker": "See it in action",
    "video.title": "Watch a toddler practice on their own",
    "video.body": "Pick a topic, tap a card to hear the word, hold the mic and say it, and see the score right away. Little ones get the hang of it by themselves.",
    "video.note": "The video is in Chinese.",
    "video.link": "Watch on YouTube",
    "video.iframe": "A toddler playing Kidvox on their own",

    "steps.kicker": "How it works",
    "steps.title": "Three steps, no reading required",
    "step1.title": "Pick a topic",
    "step1.body": "Animals, vehicles, fruits, vegetables, colors, body parts… start with one your child loves.",
    "step2.title": "Say it",
    "step2.body": "Tap a card to hear the word, hold the mic and say it, then let go to see the score.",
    "step3.title": "Find it",
    "step3.body": "A mini quiz to spot the words just learned. Get them all right for three stars.",

    "kids.kicker": "For kids",
    "kids.title": "Designed around what toddlers aged 2–3 can do",
    "k1.title": "One big card at a time",
    "k1.body": "A clean screen, so little ones stay focused.",
    "k2.title": "Just tap and hold",
    "k2.body": "Children who can’t read yet can still play on their own.",
    "k3.title": "Never scolded",
    "k3.body": "A missed word just hears “Try saying it again”, so shy kids keep talking.",
    "k4.title": "Repeat as often as you like",
    "k4.body": "Hear and say every word again and again, with no limits.",

    "parents.kicker": "For parents",
    "parents.title": "Built with parents in mind",
    "p1.title": "No ads",
    "p1.body": "No third-party ads anywhere, so nothing pops up to interrupt your child.",
    "p2.title": "Parental gate",
    "p2.body": "Settings and the subscription page sit behind a simple math question.",
    "p3.title": "No sign-up",
    "p3.body": "No account, no login, and no names, birthdays or other personal details collected.",
    "p4.title": "Recordings deleted right away",
    "p4.body": "The mic only runs while the button is held, and each clip is deleted as soon as it’s scored. We keep no recordings.",

    "topics.kicker": "What they learn",
    "topics.title": "First words from everyday life",
    "topics.lead": "Start with the things kids see and touch every day, building vocabulary one word at a time. New topics are added over time.",
    "t.animals": "Animals",
    "t.vehicles": "Vehicles",
    "t.streets": "City streets",
    "t.fruits": "Fruits",
    "t.vegetables": "Vegetables",
    "t.food": "Food & drinks",
    "t.colors": "Colors",
    "t.body": "Body",
    "t.clothes": "Clothes",

    "langs.kicker": "Languages",
    "langs.title": "Practice in four languages",
    "langs.lead": "Switch the language in Settings and the words, audio and scoring all change with it. Great for bilingual families.",

    "faq.kicker": "FAQ",
    "faq.title": "Questions parents ask",
    faq: [
      {
        q: "How is it different from regular flashcards?",
        a: "Most flashcards only let kids look and listen. Kidvox adds “Say it”: your child holds the mic, says the word, and gets a pronunciation score right away, so they know if they got it and want to keep talking."
      },
      {
        q: "What age is it for?",
        a: "Mainly toddlers aged 2–3 who are just starting to talk. Older kids, or children learning a second language, can use it to pick up new words and practice pronunciation too."
      },
      {
        q: "My toddler isn’t talking much yet. Can they still play?",
        a: "Yes. Start by tapping cards to hear the words, then try the mic when your child is ready. Cards come one at a time, every word can be replayed, and a missed word only hears “Try saying it again.” It’s a practice game, not a speech therapy tool. Every child starts talking at their own pace, so if you’re concerned about your child’s language development, please talk to your pediatrician or a speech-language therapist."
      },
      {
        q: "Can my child practice another language?",
        a: "Yes. Switch the language in Settings to Traditional Chinese, Spanish or Korean, and the words, audio and pronunciation scoring all switch (the app’s menus switch too)."
      },
      {
        q: "How is the pronunciation score worked out? What if it’s too strict?",
        a: "After your child says the word, speech recognition compares it with the correct pronunciation and gives a score from 0 to 100. Reach the passing score and the word counts as correct. Parents can change the Scoring Level in Settings: Easy (40), Medium (60, the default) or Hard (80). Kids just starting to talk can begin with Easy."
      },
      {
        q: "Does it cost anything?",
        a: "The app is free to download. Four topics are free (Animals, Vehicles, City streets and Fruits), with “Say it” and “Find it” fully playable. The other topics unlock with a subscription, which also covers topics added later. Monthly and yearly plans are available, and the price in your currency is shown in the app."
      },
      {
        q: "Does it need the internet?",
        a: "Pronunciation scoring in “Say it” needs a connection. Each topic’s cards and sounds download the first time it’s opened, then stay on the device."
      },
      {
        q: "Are my child’s recordings kept?",
        a: "No. The mic only records while the button is held (up to 10 seconds). The clip is sent to a speech recognition service for scoring, and the temporary file is deleted from the device as soon as it’s done. We run no servers of our own and never keep, analyze or sell recordings. See the " + privacyLink("privacy policy") + "."
      },
      {
        q: "Which devices does it run on?",
        a: "iPhone, iPad, and Android phones and tablets."
      }
    ],

    "cta.title": "Start talking together today",
    "cta.lead": "Free to download. No sign-up, just open it and play.",
    "cta.qr": "Scan with your phone camera",

    "footer.name": "Kidvox",
    "footer.tagline": "Pronunciation flashcards for toddlers and kids aged 2–3",
    "footer.privacy": "Privacy Policy",
    "footer.contact": "Contact us",

    "alt.list": "Animal word cards",
    "alt.say": "Say it pronunciation practice: correct, score 95",
    "alt.home": "Topic menu",
    "alt.rec": "Holding the mic to record",
    "alt.result": "Find it finished with three stars"
  },

  es: {
    htmlLang: "es",
    langName: "Español",
    path: "es/",
    ogLocale: "es_MX",
    hint: "Esta página también está en español.",
    hintGo: "Cambiar",
    "meta.title": "Kidvox – Práctica de pronunciación para niños de 2 a 3 años",
    "meta.desc": "App infantil para aprender a hablar: niños de 2 a 3 años dicen la palabra y reciben su puntuación de pronunciación al instante. Animales, frutas y más. Sin anuncios ni registro.",

    "brand.name": "Kidvox",
    "brand.sub": "",
    "nav.home": "Inicio",
    "nav.lang": "Idioma",

    "hero.eyebrow": "Tarjetas de pronunciación para niños de 2 a 3 años",
    "hero.title": "Que tu peque<br><mark>se anime a hablar</mark>",
    "hero.lead": "Ver la tarjeta, escuchar y repetir. Mantén presionado el micrófono, di la palabra y al soltar aparece la puntuación. Si se equivoca, solo escucha «¡Intenta decirlo otra vez!».",
    "hero.pill1": "Sin anuncios",
    "hero.pill2": "Sin registro",
    "hero.pill3": "Algunos temas gratis",
    "badge.ios": "Descárgalo en el",
    "badge.play": "DISPONIBLE EN",

    "video.kicker": "Míralo en acción",
    "video.title": "Mira cómo practica un peque solito",
    "video.body": "Elige un tema, toca la tarjeta para escuchar, mantén presionado el micrófono y dilo: la puntuación aparece al instante. Los peques aprenden a jugar solos.",
    "video.note": "El video está en chino.",
    "video.link": "Ver en YouTube",
    "video.iframe": "Un niño jugando solo con Kidvox",

    "steps.kicker": "Cómo se juega",
    "steps.title": "Tres pasos, no hace falta saber leer",
    "step1.title": "Elige un tema",
    "step1.body": "Animales, vehículos, frutas, verduras, colores, el cuerpo… empieza por el que más le guste.",
    "step2.title": "Dilo",
    "step2.body": "Toca la tarjeta para escuchar la pronunciación, mantén presionado el micrófono y repite. Al soltar, aparece la puntuación.",
    "step3.title": "Encuéntralo",
    "step3.body": "Un juego para encontrar las palabras que aprendió. Si acierta todas, gana tres estrellas.",

    "kids.kicker": "Para los niños",
    "kids.title": "Cada detalle, pensado para niños de 2 a 3 años",
    "k1.title": "Una tarjeta grande a la vez",
    "k1.body": "Pantalla limpia para que no se distraiga.",
    "k2.title": "Solo tocar y mantener",
    "k2.body": "Puede jugar solo aunque todavía no sepa leer.",
    "k3.title": "Nadie lo regaña",
    "k3.body": "Si se equivoca, solo escucha «¡Intenta decirlo otra vez!» y se anima a seguir.",
    "k4.title": "Todas las veces que quiera",
    "k4.body": "Cada palabra se puede escuchar y repetir sin límite.",

    "parents.kicker": "Para los padres",
    "parents.title": "Lo que les importa a los padres",
    "p1.title": "Sin anuncios",
    "p1.body": "No hay publicidad de terceros que interrumpa al niño.",
    "p2.title": "Solo para padres",
    "p2.body": "La configuración y la suscripción están detrás de una suma sencilla.",
    "p3.title": "Sin registro",
    "p3.body": "Sin cuentas ni inicio de sesión. No recopilamos nombre, fecha de nacimiento ni otros datos personales.",
    "p4.title": "Las grabaciones se borran",
    "p4.body": "Solo graba mientras se mantiene presionado el botón, y el audio se borra en cuanto se califica. No guardamos ninguna grabación.",

    "topics.kicker": "Qué aprenden",
    "topics.title": "Primeras palabras de todos los días",
    "topics.lead": "Empieza con lo que los niños ven y tocan a diario, y su vocabulario crece palabra por palabra. Seguimos agregando temas.",
    "t.animals": "Animales",
    "t.vehicles": "Vehículos",
    "t.streets": "La ciudad",
    "t.fruits": "Frutas",
    "t.vegetables": "Verduras",
    "t.food": "Comida y bebidas",
    "t.colors": "Colores",
    "t.body": "El cuerpo",
    "t.clothes": "La ropa",

    "langs.kicker": "Idiomas",
    "langs.title": "Cuatro idiomas, también para practicar inglés",
    "langs.lead": "Cambia el idioma en la configuración y cambian las palabras, los audios y la puntuación. Para practicar inglés, elige English.",

    "faq.kicker": "FAQ",
    "faq.title": "Preguntas frecuentes",
    faq: [
      {
        q: "¿En qué se diferencia de las tarjetas normales?",
        a: "Con las tarjetas normales solo se mira y se escucha. Kidvox agrega «Dilo»: tu peque mantiene presionado el micrófono, dice la palabra y recibe su puntuación de pronunciación al instante. Así sabe si lo dijo bien y se anima a seguir hablando."
      },
      {
        q: "¿Para qué edad es?",
        a: "Principalmente para niños de 2 a 3 años que están empezando a hablar. Los más grandes, o los que están aprendiendo otro idioma, también pueden aprender palabras nuevas y practicar la pronunciación."
      },
      {
        q: "Mi hijo todavía habla poco, ¿puede usarla?",
        a: "Sí. Puede empezar tocando las tarjetas para escuchar las palabras y usar el micrófono cuando se anime. Las tarjetas salen de una en una, cada palabra se puede repetir y, si se equivoca, solo escucha «¡Intenta decirlo otra vez!». Es un juego para practicar, no una herramienta de terapia del lenguaje. Cada niño empieza a hablar a su ritmo; si te preocupa el desarrollo del lenguaje de tu hijo, consulta con su pediatra o con un terapeuta del lenguaje."
      },
      {
        q: "¿Sirve para practicar inglés?",
        a: "Sí. En la configuración cambia el idioma a English y las palabras, los audios y la puntuación pasan a inglés (los menús de la App también cambian). También puedes elegir chino tradicional o coreano."
      },
      {
        q: "¿Cómo se calcula la puntuación? ¿Y si es muy estricta?",
        a: "Cuando tu peque dice la palabra, el reconocimiento de voz la compara con la pronunciación correcta y da una puntuación de 0 a 100; si llega a la puntuación mínima, cuenta como correcta. En la configuración puedes cambiar el nivel de dificultad: Fácil (40), Medio (60, el predeterminado) o Difícil (80). Si apenas empieza a hablar, prueba con Fácil."
      },
      {
        q: "¿Tiene costo?",
        a: "La App se descarga gratis. Cuatro temas son gratuitos (Animales, Vehículos, La ciudad y Frutas) y en ellos puedes jugar completo a «Dilo» y «Encuéntralo». Los demás temas se desbloquean con la suscripción, que también incluye los temas nuevos. Hay plan mensual y anual, y el precio en tu moneda se muestra en la App."
      },
      {
        q: "¿Necesita internet?",
        a: "La puntuación de pronunciación de «Dilo» necesita conexión. Las tarjetas y los sonidos de cada tema se descargan la primera vez y luego quedan en el dispositivo."
      },
      {
        q: "¿Se guardan las grabaciones de mi hijo?",
        a: "No. Solo se graba mientras se mantiene presionado el botón (máximo 10 segundos). El audio se envía a un servicio de reconocimiento de voz para calificarlo y el archivo temporal se borra del dispositivo en cuanto termina. No tenemos servidores propios: no guardamos, no analizamos ni vendemos ninguna grabación. Consulta la " + privacyLink("política de privacidad") + "."
      },
      {
        q: "¿En qué dispositivos funciona?",
        a: "iPhone, iPad y teléfonos y tabletas Android."
      }
    ],

    "cta.title": "Empiecen a hablar juntos hoy",
    "cta.lead": "Descarga gratis. Sin registro: ábrela y a jugar.",
    "cta.qr": "Escanea con la cámara de tu teléfono",

    "footer.name": "Kidvox",
    "footer.tagline": "Tarjetas de pronunciación para niños pequeños, de 2 a 3 años",
    "footer.privacy": "Política de privacidad",
    "footer.contact": "Contacto",

    "alt.list": "Tarjetas de animales",
    "alt.say": "Práctica de pronunciación en Dilo: ¡Muy bien!, puntuación 90",
    "alt.home": "Menú de temas",
    "alt.rec": "Mantén presionado el micrófono y dilo",
    "alt.result": "Encuéntralo terminado con tres estrellas"
  },

  ko: {
    htmlLang: "ko",
    langName: "한국어",
    path: "ko/",
    ogLocale: "ko_KR",
    hint: "이 페이지는 한국어로도 볼 수 있어요.",
    hintGo: "보기",
    "meta.title": "Kidvox – 유아·어린이 발음 연습 낱말 카드 앱 (2~3세)",
    "meta.desc": "2~3세 유아를 위한 발음 연습 낱말 카드 앱이에요. 마이크를 누른 채로 따라 말하면 바로 발음 점수가 나와요. 동물, 과일, 탈것 등 어린이가 매일 보는 낱말로 첫 말을 도와주고, 언어를 바꾸면 영어 발음 연습도 돼요. 광고도 가입도 없어요.",

    "brand.name": "Kidvox",
    "brand.sub": "",
    "nav.home": "홈",
    "nav.lang": "언어",

    "hero.eyebrow": "2~3세 유아를 위한 발음 연습 낱말 카드",
    "hero.title": "아이가 스스로<br><mark>말하고 싶어지게</mark>",
    "hero.lead": "그림 카드를 보고, 발음을 듣고, 따라 말해요. 마이크를 누른 채로 한 번 말하고 손을 떼면 바로 발음 점수가 나와요. 틀려도 “한 번 더 말해 보세요!”라고만 해요.",
    "hero.pill1": "광고 없음",
    "hero.pill2": "가입 없음",
    "hero.pill3": "일부 주제 무료",
    "badge.ios": "다운로드하기",
    "badge.play": "다운로드하기",

    "video.kicker": "직접 보세요",
    "video.title": "아이 혼자 발음 연습하는 모습을 보세요",
    "video.body": "주제를 고르고, 카드를 눌러 발음을 듣고, 마이크를 누른 채로 따라 말하면 바로 점수가 나와요. 아이 혼자서도 금방 익혀요.",
    "video.note": "중국어 영상이에요.",
    "video.link": "YouTube에서 보기",
    "video.iframe": "아이가 혼자 Kidvox를 하는 모습",

    "steps.kicker": "이렇게 놀아요",
    "steps.title": "글자를 몰라도 할 수 있는 세 단계",
    "step1.title": "주제 고르기",
    "step1.body": "동물, 탈것, 과일, 채소, 색깔, 몸… 아이가 좋아하는 주제로 시작해요.",
    "step2.title": "말해보기",
    "step2.body": "카드를 눌러 발음을 듣고, 마이크를 누른 채로 따라 말해요. 손을 떼면 바로 점수가 나와요.",
    "step3.title": "찾아보기",
    "step3.body": "배운 낱말을 찾아보는 간단한 퀴즈예요. 모두 맞히면 별 세 개를 받아요.",

    "kids.kicker": "유아를 위해",
    "kids.title": "2~3세 유아를 위한 세심한 설계",
    "k1.title": "한 번에 큰 카드 한 장",
    "k1.body": "화면이 깔끔해서 아이가 산만해지지 않아요.",
    "k2.title": "누르기와 길게 누르기뿐",
    "k2.body": "글자를 몰라도 혼자 할 수 있어요.",
    "k3.title": "틀려도 혼내지 않아요",
    "k3.body": "“한 번 더 말해 보세요!”라고만 해서 수줍은 아이도 계속 말해요.",
    "k4.title": "몇 번이든 다시",
    "k4.body": "낱말마다 횟수 제한 없이 다시 듣고 다시 말할 수 있어요.",

    "parents.kicker": "부모님을 위해",
    "parents.title": "부모님이 걱정하시는 부분, 먼저 챙겼어요",
    "p1.title": "광고 없음",
    "p1.body": "제3자 광고가 전혀 없어서 노는 중에 광고가 튀어나오지 않아요.",
    "p2.title": "보호자 확인",
    "p2.body": "설정과 구독 화면은 간단한 덧셈 문제 뒤에 있어서 아이 혼자 들어갈 수 없어요.",
    "p3.title": "가입 없음",
    "p3.body": "계정도 로그인도 없고, 이름·생년월일 등 개인정보를 수집하지 않아요.",
    "p4.title": "녹음은 바로 삭제",
    "p4.body": "버튼을 누르고 있는 동안에만 녹음하고, 채점이 끝나면 바로 삭제해요. 어떤 녹음도 보관하지 않아요.",

    "topics.kicker": "무엇을 배우나요",
    "topics.title": "첫 말은 매일 보는 낱말부터",
    "topics.lead": "어린이가 매일 보고 만지는 것부터 하나씩 어휘를 늘려요. 주제는 계속 늘어나요.",
    "t.animals": "동물",
    "t.vehicles": "탈것",
    "t.streets": "거리",
    "t.fruits": "과일",
    "t.vegetables": "채소",
    "t.food": "음식과 음료",
    "t.colors": "색깔",
    "t.body": "몸",
    "t.clothes": "옷",

    "langs.kicker": "언어",
    "langs.title": "4개 언어, 영어 발음 연습도 돼요",
    "langs.lead": "설정에서 언어를 바꾸면 낱말, 발음 소리, 채점이 모두 바뀌어요. 영어 발음을 연습하려면 English를 고르세요.",

    "faq.kicker": "FAQ",
    "faq.title": "자주 묻는 질문",
    faq: [
      {
        q: "일반 낱말 카드와 뭐가 다른가요?",
        a: "일반 낱말 카드는 보고 듣기만 해요. Kidvox에는 ‘말해보기’가 있어서 아이가 마이크를 누른 채로 말하면 바로 발음 점수가 나와요. 잘 말했는지 바로 알 수 있어서 계속 말하고 싶어져요."
      },
      {
        q: "몇 살 어린이에게 맞나요?",
        a: "막 말을 시작한 2~3세 유아를 위해 만들었어요. 더 큰 어린이나 영어 같은 다른 언어를 배우는 아이도 새 낱말을 익히고 발음을 연습할 수 있어요."
      },
      {
        q: "아직 말을 잘 못 하는 아이도 할 수 있나요?",
        a: "네. 먼저 카드를 눌러 소리를 듣다가, 아이가 준비되면 마이크로 말해 보세요. 카드는 한 장씩 나오고, 낱말마다 몇 번이든 다시 들을 수 있고, 틀려도 “한 번 더 말해 보세요!”라고만 해요. 말하기를 연습하는 놀이이며 언어 치료 도구는 아니에요. 아이마다 말이 트이는 시기가 다르니, 언어 발달이 걱정된다면 소아청소년과 의사나 언어치료사와 상담해 주세요."
      },
      {
        q: "영어 발음 연습도 되나요?",
        a: "네. 설정에서 언어를 English로 바꾸면 낱말, 발음 소리, 채점이 모두 영어로 바뀌어요(앱 메뉴도 함께 바뀌어요). 중국어(번체)나 스페인어로도 바꿀 수 있어요."
      },
      {
        q: "발음 점수는 어떻게 매기나요? 너무 엄격하면요?",
        a: "아이가 말하면 음성 인식으로 정확한 발음과 비교해 0~100점으로 점수를 매기고, 통과 점수를 넘으면 정답이에요. 보호자는 설정의 ‘채점 난이도’에서 쉬움(40점), 보통(60점, 기본), 어려움(80점) 중에 고를 수 있어요. 막 말을 시작한 아이라면 쉬움부터 해 보세요."
      },
      {
        q: "유료인가요?",
        a: "앱은 무료로 내려받을 수 있어요. 동물, 탈것, 거리, 과일 네 가지 주제는 무료이고 ‘말해보기’와 ‘찾아보기’를 모두 이용할 수 있어요. 나머지 주제는 구독하면 열리고, 앞으로 추가되는 주제도 포함돼요. 월간·연간 플랜이 있고, 가격은 앱에서 현지 통화로 표시돼요."
      },
      {
        q: "인터넷이 필요한가요?",
        a: "‘말해보기’의 발음 채점은 인터넷 연결이 필요해요. 주제별 그림 카드와 소리는 처음 열 때 내려받고, 그 뒤로는 기기에 저장돼요."
      },
      {
        q: "아이 녹음이 저장되나요?",
        a: "아니요. 버튼을 누르고 있는 동안에만 녹음돼요(한 번에 최대 10초). 녹음은 채점을 위해 음성 인식 서비스로 전송되고, 끝나면 기기의 임시 파일은 바로 삭제돼요. 저희는 자체 서버가 없으며 어떤 녹음도 보관·분석·판매하지 않아요. 자세한 내용은 " + privacyLink("개인정보 처리방침") + "을 확인해 주세요."
      },
      {
        q: "어떤 기기에서 쓸 수 있나요?",
        a: "iPhone, iPad, Android 휴대폰과 태블릿에서 쓸 수 있어요."
      }
    ],

    "cta.title": "오늘부터 아이와 함께 말해 보세요",
    "cta.lead": "무료로 내려받고, 가입 없이 바로 시작해요.",
    "cta.qr": "휴대폰 카메라로 스캔하세요",

    "footer.name": "Kidvox",
    "footer.tagline": "2~3세 유아·어린이를 위한 발음 연습 낱말 카드",
    "footer.privacy": "개인정보 처리방침",
    "footer.contact": "문의하기",

    "alt.list": "동물 낱말 카드 목록",
    "alt.say": "말해보기 발음 연습 화면: 맞았어요, 발음 점수 86",
    "alt.home": "주제 메뉴",
    "alt.rec": "마이크를 누른 채로 말해 보세요",
    "alt.result": "찾아보기 완료, 별 세 개"
  }
};
