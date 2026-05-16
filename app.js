const MIDDLE = [
  { char: 'ก', name: 'ko kai',    nameAlt: ['ko kai','kokai'],                     sound: 'g',     soundAlt: ['g'] },
  { char: 'จ', name: 'cho chan',  nameAlt: ['cho chan','jo jan','jorchan'],      sound: 'j',     soundAlt: ['j'] },
  { char: 'ด', name: 'do dek',    nameAlt: ['do dek','dodek'],                             sound: 'd',     soundAlt: ['d'] },
  { char: 'ต', name: 'to tao',    nameAlt: ['to tao','totao'],                             sound: 'dt',    soundAlt: ['dt'] },
  { char: 'บ', name: 'bo baimai', nameAlt: ['bo baimai','bo bai mai'],                  sound: 'b',     soundAlt: ['b'] },
  { char: 'ป', name: 'po pla',    nameAlt: ['po pla','popla'],                             sound: 'bp',    soundAlt: ['bp'] },
  { char: 'อ', name: 'o ang',     nameAlt: ['o ang','oang'],                               sound: 'o',     soundAlt: ['o','ʔ','silent','-'] },
  { char: 'ฎ', name: 'do chada',  nameAlt: ['do chada','dochada'],                       sound: 'd',     soundAlt: ['d'] },
  { char: 'ฏ', name: 'to patak',  nameAlt: ['to patak','topatak'],                      sound: 'dt',    soundAlt: ['dt'] },
];

const HIGH = [
  { char: 'ข', name: 'kho khai',   nameAlt: ['kho khai','khokhai'],                    sound: 'k',     soundAlt: ['k'] },
  { char: 'ฃ', name: 'kho khuat',  nameAlt: ['kho khuat','khokhuat'],                 sound: 'k',     soundAlt: ['k'] },
  { char: 'ฉ', name: 'cho ching',  nameAlt: ['cho ching','choching'],                 sound: 'ch',    soundAlt: ['ch'] },
  { char: 'ฐ', name: 'tho thahan', nameAlt: ['tho thahan','thothahan'],              sound: 't',     soundAlt: ['t'] },
  { char: 'ถ', name: 'tho thung',  nameAlt: ['tho thung','thothung'],                 sound: 't',     soundAlt: ['t'] },
  { char: 'ผ', name: 'pho phueng', nameAlt: ['pho phueng','phophueng'],              sound: 'p',     soundAlt: ['p'] },
  { char: 'ฝ', name: 'fo fa',      nameAlt: ['fo fa','fofa'],                             sound: 'f',     soundAlt: ['f'] },
  { char: 'ศ', name: 'so sala',    nameAlt: ['so sala','sosala'],                        sound: 's',     soundAlt: ['s'] },
  { char: 'ษ', name: 'so ruesi',   nameAlt: ['so ruesi','soruesi','so rue si'],          sound: 's',     soundAlt: ['s'] },
  { char: 'ส', name: 'so suea',    nameAlt: ['so suea','sosuea','so sua'],                sound: 's',     soundAlt: ['s'] },
  { char: 'ห', name: 'ho hip',     nameAlt: ['ho hip','hohip'],                          sound: 'h',     soundAlt: ['h'] },
];

const LOW = [
  { char: 'ค', name: 'kho khwai',     nameAlt: ['kho khwai','khokhwai'],              sound: 'k',     soundAlt: ['k'] },
  { char: 'ฅ', name: 'kho khon',      nameAlt: ['kho khon','khokhon'],                 sound: 'k',     soundAlt: ['k'] },
  { char: 'ฆ', name: 'kho rakhang',   nameAlt: ['kho rakhang','khorakhang'],        sound: 'k',     soundAlt: ['k'] },
  { char: 'ง', name: 'ngo ngu',       nameAlt: ['ngo ngu','ngongu'],                    sound: 'ng',    soundAlt: ['ng'] },
  { char: 'ช', name: 'cho chang',     nameAlt: ['cho chang','chochange'],               sound: 'ch',    soundAlt: ['ch'] },
  { char: 'ซ', name: 'so so',         nameAlt: ['so so','soso'],                          sound: 's',     soundAlt: ['s'] },
  { char: 'ฌ', name: 'cho choe',      nameAlt: ['cho choe','chochoe'],                   sound: 'ch',    soundAlt: ['ch'] },
  { char: 'ญ', name: 'yo ying',       nameAlt: ['yo ying','yoying'],                    sound: 'y',     soundAlt: ['y'] },
  { char: 'ฑ', name: 'tho nangmontho',nameAlt: ['tho nangmontho','thonangmontho'],sound: 't',     soundAlt: ['t'] },
  { char: 'ฒ', name: 'tho phuthao',   nameAlt: ['tho phuthao','thophuthao'],       sound: 't',     soundAlt: ['t'] },
  { char: 'ณ', name: 'no nen',        nameAlt: ['no nen','nonen'],                       sound: 'n',     soundAlt: ['n'] },
  { char: 'ท', name: 'tho thahan',    nameAlt: ['tho thahan','thothahan'],           sound: 't',     soundAlt: ['t'] },
  { char: 'ธ', name: 'tho thong',     nameAlt: ['tho thong','thothong'],              sound: 't',     soundAlt: ['t'] },
  { char: 'น', name: 'no nu',         nameAlt: ['no nu','nonu'],                          sound: 'n',     soundAlt: ['n'] },
  { char: 'พ', name: 'pho phan',      nameAlt: ['pho phan','phophan'],                 sound: 'p',     soundAlt: ['p'] },
  { char: 'ฟ', name: 'fo fan',        nameAlt: ['fo fan','fofan'],                       sound: 'f',     soundAlt: ['f'] },
  { char: 'ภ', name: 'pho samphan',   nameAlt: ['pho samphan','phosamphan'],        sound: 'p',     soundAlt: ['p'] },
  { char: 'ม', name: 'mo ma',         nameAlt: ['mo ma','moma'],                          sound: 'm',     soundAlt: ['m'] },
  { char: 'ย', name: 'yo yak',        nameAlt: ['yo yak','yoyak'],                       sound: 'y',     soundAlt: ['y'] },
  { char: 'ร', name: 'ro ruea',       nameAlt: ['ro ruea','roruea','ro rua'],             sound: 'r',     soundAlt: ['r'] },
  { char: 'ฤ', name: 'ro han',        nameAlt: ['ro han','rohan','reu'],                   sound: 'reu',   soundAlt: ['reu'] },
  { char: 'ล', name: 'lo ling',       nameAlt: ['lo ling','loling'],                    sound: 'l',     soundAlt: ['l'] },
  { char: 'ว', name: 'wo waen',       nameAlt: ['wo waen','wowaen'],                     sound: 'w',     soundAlt: ['w'] },
  { char: 'ฬ', name: 'lo chula',      nameAlt: ['lo chula','lochula'],                  sound: 'l',     soundAlt: ['l'] },
  { char: 'ฮ', name: 'ho nokhuk',     nameAlt: ['ho nokhuk','honokhuk'],              sound: 'h',     soundAlt: ['h'] },
];

const SHORT_VOWELS = [
  { char: 'กะ',  name: 'sara a',   nameAlt: ['sara a','สระอะ'],                   sound: 'a',  soundAlt: ['a'] },
  { char: 'กิ',  name: 'sara i',   nameAlt: ['sara i','สระอิ'],                   sound: 'i',  soundAlt: ['i'] },
  { char: 'กึ',  name: 'sara eu',  nameAlt: ['sara eu','sara ue','สระอึ'],        sound: 'eu', soundAlt: ['eu'] },
  { char: 'กุ',  name: 'sara u',   nameAlt: ['sara u','สระอุ'],                   sound: 'u',  soundAlt: ['u'] },
  { char: 'เกะ', name: 'sara e',   nameAlt: ['sara e','สระเอะ'],                  sound: 'e',  soundAlt: ['e'] },
  { char: 'แกะ', name: 'sara ae (short)', nameAlt: ['sara ae','sara ae short','สระแอะ'], sound: 'ae', soundAlt: ['ae'] },
  { char: 'โกะ', name: 'sara o',   nameAlt: ['sara o','สระโอะ'],                  sound: 'o',  soundAlt: ['o'] },
  { char: 'เกาะ',name: 'sara or (short)', nameAlt: ['sara or','sara or short','sara aw','สระเอาะ'], sound: 'or', soundAlt: ['or'] },
];

const LONG_VOWELS = [
  { char: 'กา',  name: 'sara aa',  nameAlt: ['sara aa','สระอา'],                 sound: 'aa', soundAlt: ['aa'] },
  { char: 'กี',  name: 'sara ii',  nameAlt: ['sara ii','สระอี'],                 sound: 'ii', soundAlt: ['ii'] },
  { char: 'กือ', name: 'sara euu', nameAlt: ['sara euu','sara uee','สระอือ'],   sound: 'euu',soundAlt: ['euu'] },
  { char: 'กู',  name: 'sara uu',  nameAlt: ['sara uu','สระอู'],                 sound: 'uu', soundAlt: ['uu'] },
  { char: 'เก',  name: 'sara ee',  nameAlt: ['sara ee','sara e','สระเอ'],        sound: 'ee', soundAlt: ['ee'] },
  { char: 'แก',  name: 'sara ae (long)',  nameAlt: ['sara ae','sara ae long','สระแอ'],  sound: 'ae', soundAlt: ['ae'] },
  { char: 'โก',  name: 'sara oo',  nameAlt: ['sara oo','sara o','สระโอ'],        sound: 'oh', soundAlt: ['oh'] },
  { char: 'กอ',  name: 'sara or (long)',  nameAlt: ['sara or','sara or long','sara aw','สระออ'],  sound: 'or', soundAlt: ['or'] },
];

const SPECIAL_VOWELS = [
  { char: 'เกีย', name: 'sara ia',  nameAlt: ['sara ia','สระเอีย'],              sound: 'ia',  soundAlt: ['ia'] },
  { char: 'เกือ', name: 'sara eua', nameAlt: ['sara eua','sara uea','สระเอือ'], sound: 'eua', soundAlt: ['eua'] },
  { char: 'เกิ',  name: 'sara er',  nameAlt: ['sara er','สระเอิ'],              sound: 'er',  soundAlt: ['er'] },
  { char: 'กัว',  name: 'sara ua',  nameAlt: ['sara ua','สระอัว'],               sound: 'uua', soundAlt: ['uua'] },
  { char: 'กวย',  name: 'sara uai', nameAlt: ['sara uai','สระวย'],              sound: 'uai', soundAlt: ['uai'] },
  { char: 'กอย',  name: 'sara oi',  nameAlt: ['sara oi','สระอย'],               sound: 'oi',  soundAlt: ['oi'] },
  { char: 'ไก',  name: 'sara ai mai malai', nameAlt: ['sara ai','mai malai','สระไอ'], sound: 'ai', soundAlt: ['ai'] },
  { char: 'ใก',  name: 'sara ai mai muan',  nameAlt: ['sara ai','mai muan','สระใอ'],  sound: 'ai', soundAlt: ['ai'] },
  { char: 'เกา', name: 'sara ao',   nameAlt: ['sara ao','สระเอา'],               sound: 'ao',  soundAlt: ['ao'] },
  { char: 'กำ',  name: 'sara am',   nameAlt: ['sara am','สระอำ'],               sound: 'am',  soundAlt: ['am'] },
];

const TONE_RULES = [
  { char: 'กา',  subtitle: 'กลาง · нет знака',      name: 'mid',     nameAlt: ['mid','samai','สามัญ','level'] },
  { char: 'ก่า', subtitle: 'กลาง · ่  (май эк)',     name: 'low',     nameAlt: ['low','ek','เอก'] },
  { char: 'ก้า', subtitle: 'กลาง · ้  (май тхо)',    name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'ก๊า', subtitle: 'กลาง · ๊  (май три)',    name: 'high',    nameAlt: ['high','tri','ตรี'] },
  { char: 'ก๋า', subtitle: 'กลาง · ๋  (май джатта)', name: 'rising',  nameAlt: ['rising','jattawa','จัตวา'] },
  { char: 'ขา',  subtitle: 'สูง · нет знака',        name: 'rising',  nameAlt: ['rising','jattawa','จัตวา'] },
  { char: 'ข่า', subtitle: 'สูง · ่  (май эк)',       name: 'low',     nameAlt: ['low','ek','เอก'] },
  { char: 'ข้า', subtitle: 'สูง · ้  (май тхо)',      name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'คา',  subtitle: 'ต่ำ · нет знака',         name: 'mid',     nameAlt: ['mid','samai','สามัญ','level'] },
  { char: 'ค่า', subtitle: 'ต่ำ · ่  (май эк)',        name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'ค้า', subtitle: 'ต่ำ · ้  (май тхо)',       name: 'high',    nameAlt: ['high','tri','ตรี'] },
];

const FINAL_SOUNDS = {
  // unaspirated initial → plain stop final
  'ก': 'k',  'ต': 't',  'ฏ': 't',
  // voiced → unvoiced
  'บ': 'p',  'ด': 't',  'ฎ': 't',  'จ': 't',
  // aspirated → plain stop
  'ข': 'k',  'ฃ': 'k',
  'ค': 'k',  'ฅ': 'k',  'ฆ': 'k',
  'ถ': 't',  'ฐ': 't',
  'ท': 't',  'ธ': 't',  'ฑ': 't',  'ฒ': 't',
  'ผ': 'p',  'พ': 'p',  'ภ': 'p',
  'ฝ': 'p',  'ฟ': 'p',
  // sibilants → t
  'ส': 't',  'ศ': 't',  'ษ': 't',  'ซ': 't',
  // affricates → t
  'ช': 't',  'ฉ': 't',  'ฌ': 't',
  // liquids / glides → n
  'ร': 'n',  'ล': 'n',  'ฬ': 'n',  'ญ': 'n',  'ย': 'i',  'ว': 'o',
};

[...MIDDLE, ...HIGH, ...LOW].forEach(l => {
  const sf = FINAL_SOUNDS[l.char];
  if (sf && sf !== l.sound) {
    l.soundFinal    = sf;
    l.soundFinalAlt = [sf];
  }
});

let activeLetters = [];
let queue = [];
let retry = [];
let pos = 0;
let correctSet = new Set();
let answered = false;
let isVowelMode   = false;
let isToneMode    = false;
let isReverseMode = false;
let isVocabMode   = false;
let lastStart     = null;
let quizHistory   = [];
let reverseTimer  = null;

// --- Vocab state ---
let vocabQueue   = [];
let vocabRetry   = [];
let vocabPos     = 0;
let vocabCorrect = 0;
let vocabTotal   = 0;
let vocabLevel   = 0;
let vocabAnswered = false;
let vocabNextTimer = null;
let vocabHistory  = [];

function vocabKey(item) { return 'v:' + item.en; }

function recordVocabResult(item, ok) {
  const s = loadStats();
  const k = vocabKey(item);
  if (!s[k]) s[k] = { c: 0, w: 0 };
  if (ok) s[k].c++; else s[k].w++;
  saveStats(s);
}

function buildVocabQueue(specialOnly = false, level = 0) {
  let list = specialOnly ? VOCAB.filter(v => v.special) : VOCAB;
  if (level) list = list.filter(v => v.level === level);
  return shuffle([...list]);
}


function normTrans(s) {
  return s.trim().toLowerCase().replace(/\s*\([^)]*\)/g, '').replace(/[-\s?!.,\/]/g, '').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

const VOCAB_SESSION_KEY = 'studyThai_vocab_sessions';

function saveVocabSession() {
  memVocabSessions[vocabLevel] = {
    queue:   vocabQueue.map(v => v.en),
    retry:   vocabRetry.map(v => v.en),
    pos:     vocabPos,
    correct: vocabCorrect,
    level:   vocabLevel,
    total:   vocabTotal,
  };
  fsWrite();
}

function loadVocabSession(level) {
  try {
    const s = memVocabSessions[level];
    if (!s) return null;
    const byEn = Object.fromEntries(VOCAB.map(v => [v.en, v]));
    const queue = s.queue.map(en => byEn[en]).filter(Boolean);
    const retry = (s.retry || []).map(en => byEn[en]).filter(Boolean);
    if (!queue.length) return null;
    return { queue, retry, pos: s.pos || 0, correct: s.correct || 0, level: s.level || 0, total: s.total || queue.length };
  } catch(e) { return null; }
}

function clearVocabSession() {
  delete memVocabSessions[vocabLevel];
  fsWrite();
}

function vocabSessionInfo(lv) {
  try {
    const s = memVocabSessions[lv];
    if (!s || !s.queue || !s.queue.length) return null;
    return { done: s.pos || 0, correct: s.correct || 0, total: s.queue.length };
  } catch(e) { return null; }
}

function startVocabQuiz(resume = false, specialOnly = false, level = 0) {
  isVocabMode  = true;
  vocabAnswered = false;

  const saved = resume ? loadVocabSession(level) : null;
  if (saved) {
    vocabQueue   = saved.queue;
    vocabRetry   = saved.retry;
    vocabPos     = saved.pos;
    vocabCorrect = saved.correct;
    vocabLevel   = saved.level;
    vocabTotal   = saved.total;
  } else {
    vocabLevel   = level;
    vocabQueue   = buildVocabQueue(specialOnly, vocabLevel);
    vocabTotal   = vocabQueue.length;
    vocabRetry   = [];
    vocabPos     = 0;
    vocabCorrect = 0;
    saveVocabSession();
    vocabHistory = [];
  }

  lastStart = () => startVocabQuiz(false, specialOnly, vocabLevel);
  const levelLabel = vocabLevel ? ` · Уровень ${vocabLevel}` : '';
  const title = specialOnly ? 'SPECIAL WORDS' : `СЛОВАРЬ${levelLabel}`;
  document.getElementById('card').innerHTML = `
    <button class="btn-back" onclick="showMenu('${specialOnly ? 'special' : 'vocab'}')">← Меню</button>
    <div class="class-title">${title}</div>
    <div class="progress" id="progress"></div>
    <div class="vocab-en" id="vocab-en"></div>
    <div class="vocab-thai" id="vocab-thai"></div>
    <div class="fields">
      <input type="text" id="inp-trans" placeholder="транскрипция..."
             onkeydown="handleVocabKey(event)" autocomplete="off" spellcheck="false">
    </div>
    <button id="action-btn" onclick="checkVocabAnswer()">Проверить →</button>
    <button id="skip-btn" class="btn-outline" onclick="skipVocab()" style="margin-top:8px;font-size:15px;padding:10px;">Пропустить</button>
    <button id="prev-btn" class="btn-outline" onclick="prevVocab()" style="margin-top:8px;font-size:15px;padding:10px;display:none;">← Назад</button>
    <div class="feedback" id="feedback"></div>
    <div class="answer-reveal" id="reveal"></div>
  `;
  renderVocabCard();
  updateVocabProgress();
  document.getElementById('inp-trans').focus();
}

function renderVocabCard() {
  const item = vocabQueue[vocabPos];
  document.getElementById('vocab-en').textContent = '';
  document.getElementById('vocab-thai').textContent = item.thai || '';
}

function updateVocabProgress() {
  const remaining = (vocabQueue.length - vocabPos) + vocabRetry.length;
  document.getElementById('progress').textContent =
    `осталось: ${remaining} | правильно: ${vocabCorrect} / ${vocabTotal}`;
}

function updatePrevBtn(hist) {
  const btn = document.getElementById('prev-btn');
  if (!btn) return;
  btn.style.display = hist.length > 0 ? 'block' : 'none';
}

function prevVocab() {
  if (vocabHistory.length === 0) return;
  if (vocabNextTimer) { clearTimeout(vocabNextTimer); vocabNextTimer = null; }
  const snap = vocabHistory.pop();
  vocabPos     = snap.pos;
  vocabRetry   = snap.retry;
  vocabCorrect = snap.correct;
  vocabQueue   = snap.queue;
  vocabAnswered = false;
  document.getElementById('inp-trans').value     = '';
  document.getElementById('inp-trans').className = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  document.getElementById('reveal').textContent   = '';
  document.getElementById('action-btn').textContent  = 'Проверить →';
  document.getElementById('skip-btn').style.display  = 'block';
  renderVocabCard();
  updateVocabProgress();
  updatePrevBtn(vocabHistory);
  document.getElementById('inp-trans').focus();
}

function checkVocabAnswer() {
  if (vocabAnswered) { nextVocab(); return; }
  const inp = document.getElementById('inp-trans').value;
  if (!inp) return;

  vocabHistory.push({ pos: vocabPos, retry: [...vocabRetry], correct: vocabCorrect, queue: [...vocabQueue] });

  const item = vocabQueue[vocabPos];
  const ok = normTrans(inp) === normTrans(item.trans);
  recordVocabResult(item, ok);
  vocabAnswered = true;

  document.getElementById('inp-trans').className = ok ? 'ok' : 'bad';
  document.getElementById('vocab-en').textContent = item.en;

  const fb = document.getElementById('feedback');
  if (ok) {
    vocabCorrect++;
    fb.textContent = '✓ Правильно!';
    fb.className = 'feedback correct';
    document.getElementById('reveal').innerHTML = `<span>${item.trans}</span>`;
    if (vocabPos + 1 >= vocabQueue.length && vocabRetry.length === 0) {
      setTimeout(showVocabDone, 800); return;
    }
  } else {
    vocabRetry.push(item);
    fb.textContent = '✗ Неверно';
    fb.className = 'feedback wrong';
    document.getElementById('reveal').innerHTML = `Правильно: <span>${item.trans}</span>`;
  }

  document.getElementById('action-btn').textContent = 'Следующая →';
  document.getElementById('skip-btn').style.display = 'none';
  saveVocabSession();
  updateVocabProgress();
  updatePrevBtn(vocabHistory);
}

function nextVocab() {
  if (vocabNextTimer) { clearTimeout(vocabNextTimer); vocabNextTimer = null; }
  vocabPos++;
  if (vocabPos >= vocabQueue.length) {
    if (vocabRetry.length === 0) { clearVocabSession(); showVocabDone(); return; }
    vocabQueue = shuffle(vocabRetry);
    vocabRetry = [];
    vocabPos   = 0;
    vocabHistory = [];
  }
  saveVocabSession();
  vocabAnswered = false;
  document.getElementById('inp-trans').value     = '';
  document.getElementById('inp-trans').className = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  document.getElementById('reveal').textContent   = '';
  document.getElementById('action-btn').textContent    = 'Проверить →';
  document.getElementById('skip-btn').style.display   = 'block';
  renderVocabCard();
  updateVocabProgress();
  updatePrevBtn(vocabHistory);
  document.getElementById('inp-trans').focus();
}

function skipVocab() {
  if (vocabAnswered) return;
  if (vocabNextTimer) { clearTimeout(vocabNextTimer); vocabNextTimer = null; }
  vocabHistory.push({ pos: vocabPos, retry: [...vocabRetry], correct: vocabCorrect, queue: [...vocabQueue] });
  const item = vocabQueue.splice(vocabPos, 1)[0];
  vocabQueue.push(item);
  if (vocabPos >= vocabQueue.length) vocabPos = 0;
  vocabAnswered = false;
  saveVocabSession();
  document.getElementById('inp-trans').value     = '';
  document.getElementById('inp-trans').className = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  document.getElementById('reveal').textContent   = '';
  renderVocabCard();
  updateVocabProgress();
  updatePrevBtn(vocabHistory);
  document.getElementById('inp-trans').focus();
}

function showVocabDone() {
  const repeatBtn = lastStart
    ? `<button onclick="repeatQuiz()" style="margin-bottom:12px;">Повторить</button>`
    : '';
  document.getElementById('card').innerHTML = `
    <div style="font-size:28px; color:#4ecca3; margin-bottom:20px;">Словарь пройден!</div>
    ${repeatBtn}
    <button onclick="showMenu()">Меню</button>
  `;
}

function handleVocabKey(e) {
  if (e.key === 'Enter') checkVocabAnswer();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) { return s.trim().toLowerCase().replace(/\s+/g,' '); }
function matchAny(input, accepted) {
  const inp = normalize(input);
  return accepted.some(a => inp === normalize(a));
}
function soundCheck(input, item) {
  if (!item.soundFinal) return matchAny(input, item.soundAlt);
  const tokens = normalize(input).split(/[\s\/\-,]+/).filter(Boolean);
  const hasInitial = item.soundAlt.some(a => tokens.includes(normalize(a)));
  const hasFinal   = item.soundFinalAlt.some(a => tokens.includes(normalize(a)));
  return hasInitial && hasFinal;
}
function current() { return queue[pos]; }

// --- File System Access (Chrome) ---
let fsHandle = null;
let fsReady  = false;

async function fsOpenDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('studyThai_fs', 1);
    r.onupgradeneeded = e => e.target.result.createObjectStore('h');
    r.onsuccess = e => res(e.target.result);
    r.onerror = () => rej(r.error);
  });
}
async function fsPersistHandle(h) {
  const db = await fsOpenDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('h', 'readwrite');
    tx.objectStore('h').put(h, 'f');
    tx.oncomplete = res; tx.onerror = () => rej(tx.error);
  });
}
async function fsGetHandle() {
  try {
    const db = await fsOpenDB();
    return await new Promise((res, rej) => {
      const tx = db.transaction('h', 'readonly');
      const r = tx.objectStore('h').get('f');
      r.onsuccess = () => res(r.result || null);
      r.onerror = () => rej(r.error);
    });
  } catch(e) { return null; }
}
async function fsRead() {
  if (!fsHandle) return;
  try {
    const text = await (await fsHandle.getFile()).text();
    if (text.trim()) {
      const data = JSON.parse(text);
      if (data[LS_KEY]) memStats = data[LS_KEY];
      if (data[VOCAB_SESSION_KEY]) memVocabSessions = data[VOCAB_SESSION_KEY];
    }
    fsReady = true;
  } catch(e) { fsReady = false; }
}
function fsWrite() {
  if (!fsHandle) return;
  const data = {};
  if (Object.keys(memStats).length) data[LS_KEY] = memStats;
  if (Object.keys(memVocabSessions).length) data[VOCAB_SESSION_KEY] = memVocabSessions;
  fsHandle.createWritable()
    .then(w => w.write(JSON.stringify(data)).then(() => w.close()))
    .catch(() => {});
}
async function fsConnect() {
  try {
    let handle;
    try {
      // No `types` filter on purpose: a JSON/UTI filter makes macOS grey out
      // the file right after the app's own atomic rewrite (createWritable),
      // so it can't be picked until the OS re-resolves the file's type.
      [handle] = await window.showOpenFilePicker();
    } catch(e) {
      handle = await window.showSaveFilePicker({
        suggestedName: 'studyThai_progress.json',
        types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }],
      });
    }
    fsHandle = handle;
    await fsPersistHandle(handle);
    await fsRead();
    fsWrite();
    showMenu();
  } catch(e) {}
}
async function fsInit() {
  const handle = await fsGetHandle();
  if (!handle) return;
  try {
    const perm = await handle.queryPermission({ mode: 'readwrite' });
    if (perm === 'granted') {
      fsHandle = handle; await fsRead();
    } else if (perm === 'prompt') {
      const p = await handle.requestPermission({ mode: 'readwrite' });
      if (p === 'granted') { fsHandle = handle; await fsRead(); }
    }
  } catch(e) {}
}

// --- In-memory stats (persisted to file) ---
const LS_KEY = 'studyThai_v1';
let memStats = {};
let memVocabSessions = {};

function loadStats() { return { ...memStats }; }
function saveStats(s) { memStats = s; fsWrite(); }

function recordResult(char, ok) {
  const s = loadStats();
  if (!s[char]) s[char] = { c: 0, w: 0 };
  if (ok) s[char].c++; else s[char].w++;
  saveStats(s);
}

function buildQueue(letters) {
  return shuffle([...letters]);
}

const WORD_HINTS = {
  'ก': { word: 'chicken',    thai: 'ไก่'      },
  'จ': { word: 'plate',      thai: 'จาน'      },
  'ด': { word: 'child',      thai: 'เด็ก'     },
  'ต': { word: 'turtle',     thai: 'เต่า'     },
  'บ': { word: 'leaf',       thai: 'ใบไม้'    },
  'ป': { word: 'fish',       thai: 'ปลา'      },
  'อ': { word: 'basin',      thai: 'อ่าง'     },
  'ฎ': { word: 'headdress',  thai: 'ชฎา'      },
  'ฏ': { word: 'goad',       thai: 'ปฏัก'     },
  'ข': { word: 'egg',        thai: 'ไข่'      },
  'ฃ': { word: 'bottle',     thai: 'ขวด'      },
  'ฉ': { word: 'cymbals',    thai: 'ฉิ่ง'     },
  'ฐ': { word: 'pedestal',   thai: 'ฐาน'      },
  'ถ': { word: 'bag',        thai: 'ถุง'      },
  'ผ': { word: 'bee',        thai: 'ผึ้ง'     },
  'ฝ': { word: 'lid',        thai: 'ฝา'       },
  'ศ': { word: 'pavilion',   thai: 'ศาลา'     },
  'ษ': { word: 'hermit',     thai: 'ฤๅษี'     },
  'ส': { word: 'tiger',      thai: 'เสือ'     },
  'ห': { word: 'chest',      thai: 'หีบ'      },
  'ค': { word: 'buffalo',    thai: 'ควาย'     },
  'ฅ': { word: 'person',     thai: 'คน'       },
  'ฆ': { word: 'bell',       thai: 'ระฆัง'    },
  'ง': { word: 'snake',      thai: 'งู'       },
  'ช': { word: 'elephant',   thai: 'ช้าง'     },
  'ซ': { word: 'chain',      thai: 'โซ่'      },
  'ฌ': { word: 'tree',       thai: 'เฌอ'      },
  'ญ': { word: 'woman',      thai: 'หญิง'     },
  'ฑ': { word: 'Montho',     thai: 'นางมณโฑ'  },
  'ฒ': { word: 'elder',      thai: 'ผู้เฒ่า'  },
  'ณ': { word: 'novice monk',thai: 'เณร'      },
  'ท': { word: 'soldier',    thai: 'ทหาร'     },
  'ธ': { word: 'flag',       thai: 'ธง'       },
  'น': { word: 'mouse',      thai: 'หนู'      },
  'พ': { word: 'tray',       thai: 'พาน'      },
  'ฟ': { word: 'tooth',      thai: 'ฟัน'      },
  'ภ': { word: 'sailboat',   thai: 'สำเภา'    },
  'ม': { word: 'horse',      thai: 'ม้า'      },
  'ย': { word: 'giant',      thai: 'ยักษ์'    },
  'ร': { word: 'boat',       thai: 'เรือ'     },
  'ล': { word: 'monkey',     thai: 'ลิง'      },
  'ว': { word: 'ring',       thai: 'แหวน'     },
  'ฬ': { word: 'kite',       thai: 'จุฬา'     },
  'ฮ': { word: 'owl',        thai: 'นกฮูก'    },
};

const LETTER_CLASS = {};
MIDDLE.forEach(l => LETTER_CLASS[l.char] = 'mid');
HIGH.forEach(l => LETTER_CLASS[l.char] = 'high');
LOW.forEach(l => LETTER_CLASS[l.char] = 'low');

const VOWEL_TYPE = {};
SHORT_VOWELS.forEach(l => VOWEL_TYPE[l.char] = 'short');
LONG_VOWELS.forEach(l => VOWEL_TYPE[l.char] = 'long');
SPECIAL_VOWELS.forEach(l => VOWEL_TYPE[l.char] = 'special');

function updateWordHint() {
  const ln = document.getElementById('letter-name');
  if (ln) ln.textContent = current().name;
  const wh = document.getElementById('word-hint');
  if (wh) {
    const h = WORD_HINTS[current().char];
    wh.textContent = h ? `${h.thai}  ·  ${h.word}` : '';
  }
  const cl = document.getElementById('letter-cls');
  if (cl) {
    const cls = LETTER_CLASS[current().char];
    const vtype = VOWEL_TYPE[current().char];
    cl.textContent = cls ? `${cls} class` : (vtype ?? '');
  }
  const sp = document.getElementById('inp-sound');
  if (sp) sp.placeholder = current().soundFinal ? 'нач. / кон. звук...' : 'звук...';
}

function getDistractors(correct, count = 3) {
  const pool = isVowelMode
    ? [...SHORT_VOWELS, ...LONG_VOWELS, ...SPECIAL_VOWELS]
    : [...MIDDLE, ...HIGH, ...LOW];
  return shuffle(pool.filter(l => l.char !== correct.char && l.sound !== correct.sound)).slice(0, count);
}

function startReverse(mode) {
  if      (mode === 'middle')        activeLetters = MIDDLE;
  else if (mode === 'high')          activeLetters = HIGH;
  else if (mode === 'low')           activeLetters = LOW;
  else if (mode === 'vowel-short')   activeLetters = SHORT_VOWELS;
  else if (mode === 'vowel-long')    activeLetters = LONG_VOWELS;
  else if (mode === 'vowel-special') activeLetters = SPECIAL_VOWELS;
  else if (mode === 'vowel-all')     activeLetters = [...SHORT_VOWELS, ...LONG_VOWELS, ...SPECIAL_VOWELS];
  else                               activeLetters = [...MIDDLE, ...HIGH, ...LOW];

  isReverseMode = true;
  isVowelMode   = mode.startsWith('vowel');
  isToneMode    = false;
  lastStart     = () => startReverse(mode);
  queue         = buildQueue(activeLetters);
  retry         = [];
  pos           = 0;
  correctSet    = new Set();
  answered      = false;
  quizHistory   = [];
  if (reverseTimer) { clearTimeout(reverseTimer); reverseTimer = null; }

  const label = {
    middle: 'Middle class', high: 'High class', low: 'Low class', all: 'All consonants',
    'vowel-short': 'Short vowels', 'vowel-long': 'Long vowels',
    'vowel-special': 'Special vowels', 'vowel-all': 'All vowels',
  }[mode] ?? mode;

  document.getElementById('card').innerHTML = `
    <button class="btn-back" onclick="showMenu()">← Меню</button>
    <div class="class-title">обратный · ${label}</div>
    <div class="progress" id="progress"></div>
    <div class="rev-prompt">
      <div class="letter-cls" id="rev-cls"></div>
      <div class="rev-name" id="rev-name"></div>
      <div class="rev-hint" id="rev-hint"></div>
    </div>
    <div class="rev-grid" id="rev-choices"></div>
    <div class="feedback" id="feedback"></div>
    <div class="answer-reveal" id="reveal"></div>
    <button id="next-btn" onclick="nextReverse()" style="display:none; margin-top:10px;">Следующая →</button>
    <button id="prev-btn" class="btn-outline" onclick="prevQuiz()" style="margin-top:8px;font-size:15px;padding:10px;display:none;">← Назад</button>
  `;
  renderReverseCard();
  updateProgress();
}

function renderReverseCard() {
  const item = current();

  const revCls = document.getElementById('rev-cls');
  if (revCls) {
    const cls = LETTER_CLASS[item.char];
    const vtype = VOWEL_TYPE[item.char];
    revCls.textContent = cls ? `${cls} class` : (vtype ?? '');
  }

  document.getElementById('rev-name').textContent = item.name;
  const h  = WORD_HINTS[item.char];
  const sf = (item.soundFinal && item.soundFinal !== item.sound)
    ? `${item.sound} / ${item.soundFinal}` : item.sound;
  document.getElementById('rev-hint').textContent =
    h ? `${h.thai}  ·  ${h.word}  ·  ${sf}` : sf;

  const choices = shuffle([item, ...getDistractors(item)]);
  const btnFont = isVowelMode ? 'font-size:36px;padding:14px 6px;' : '';
  document.getElementById('rev-choices').innerHTML = choices.map(l =>
    `<button class="choice-btn" style="${btnFont}" data-char="${l.char}" onclick="pickChoice(this.dataset.char)">${l.char}</button>`
  ).join('');
}

function pickChoice(char) {
  if (answered) return;
  answered = true;

  const item = current();
  const ok   = char === item.char;
  quizHistory.push({ pos, retry: [...retry], correctSet: new Set(correctSet), queue: [...queue] });
  recordResult(item.char, ok);

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.char === item.char)       btn.classList.add('choice-correct');
    else if (btn.dataset.char === char && !ok) btn.classList.add('choice-wrong');
  });

  const fb = document.getElementById('feedback');
  if (ok) {
    correctSet.add(item.char);
    fb.textContent = '✓ Правильно!';
    fb.className   = 'feedback correct';
    if (pos + 1 >= queue.length && retry.length === 0) { reverseTimer = setTimeout(showDone, 700); return; }
    reverseTimer = setTimeout(nextReverse, 700);
  } else {
    retry.push(item);
    fb.textContent = '✗ Неверно';
    fb.className   = 'feedback wrong';
    document.getElementById('next-btn').style.display = 'block';
  }
  updateProgress();
  updatePrevBtn(quizHistory);
}

function nextReverse() {
  pos++;
  if (pos >= queue.length) {
    if (retry.length === 0) { showDone(); return; }
    queue = shuffle(retry);
    retry = [];
    pos   = 0;
    quizHistory = [];
  }
  answered = false;
  document.getElementById('feedback').textContent  = '';
  document.getElementById('feedback').className    = 'feedback';
  document.getElementById('reveal').textContent    = '';
  document.getElementById('next-btn').style.display = 'none';
  renderReverseCard();
  updateProgress();
  updatePrevBtn(quizHistory);
}

let menuTab = 'consonants';

function showHomophones() {
  const PAIRS = [
    {
      sound: 'ae',
      note: 'краткая vs долгая',
      a: { char: 'แกะ', name: 'sara ae (short)', type: 'short' },
      b: { char: 'แก',  name: 'sara ae (long)',  type: 'long'  },
    },
    {
      sound: 'or',
      note: 'краткая vs долгая',
      a: { char: 'เกาะ', name: 'sara or (short)', type: 'short' },
      b: { char: 'กอ',   name: 'sara or (long)',  type: 'long'  },
    },
    {
      sound: 'ai',
      note: 'разное написание, один звук',
      a: { char: 'ไก', name: 'mai malai (ไ)', type: 'special' },
      b: { char: 'ใก', name: 'mai muan (ใ)',  type: 'special' },
    },
  ];

  const groups = PAIRS.map(p => `
    <div class="hp-group">
      <div class="hp-sound">${p.sound} <span class="hp-note">${p.note}</span></div>
      <div class="hp-pair">
        <div class="hp-card">
          <div class="hp-char">${p.a.char}</div>
          <div class="hp-name">${p.a.name}</div>
          <div class="hp-type">${p.a.type}</div>
        </div>
        <div class="hp-vs">vs</div>
        <div class="hp-card">
          <div class="hp-char">${p.b.char}</div>
          <div class="hp-name">${p.b.name}</div>
          <div class="hp-type">${p.b.type}</div>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('card').innerHTML = `
    <button class="btn-back" onclick="showMenu('vowels')">← Гласные</button>
    <div class="class-title" style="margin-bottom:20px;">ОДИНАКОВЫЙ ЗВУК</div>
    ${groups}
  `;
}

function showMenu(tab) {
  isVocabMode = false;
  if (tab) menuTab = tab;

  const tabs = [
    { id: 'consonants', label: 'Согласные' },
    { id: 'vowels',     label: 'Гласные'   },
    { id: 'tones',      label: 'Тоны'      },
    { id: 'vocab',      label: 'Словарь'   },
    { id: 'special',    label: 'Special'   },
  ];

  const tabBar = tabs.map(t =>
    `<button class="tab-btn ${menuTab === t.id ? 'tab-active' : ''}" onclick="showMenu('${t.id}')">${t.label}</button>`
  ).join('');

  let content = '';

  if (menuTab === 'consonants') {
    const rows = [
      ['Средний класс (9)',  'middle'],
      ['Высокий класс (11)', 'high'],
      ['Низкий класс (24)',  'low'],
      ['Все согласные (44)', 'all'],
    ];
    content = rows.map(([label, mode]) => `
      <div class="menu-section">
        <div class="menu-row-label">${label}</div>
        <div class="mode-btns">
          <button class="btn-menu" onclick="startQuiz('${mode}')">Прямой</button>
          <button class="btn-menu" onclick="startReverse('${mode}')">Обратный</button>
        </div>
      </div>
    `).join('');
  } else if (menuTab === 'vowels') {
    const rows = [
      ['Краткие (8)',          'vowel-short'],
      ['Долгие (8)',           'vowel-long'],
      ['Особые / дифтонги (7)','vowel-special'],
      ['Все гласные (23)',     'vowel-all'],
    ];
    content = rows.map(([label, mode]) => `
      <div class="menu-section">
        <div class="menu-row-label">${label}</div>
        <div class="mode-btns">
          <button class="btn-menu" onclick="startQuiz('${mode}')">Прямой</button>
          <button class="btn-menu" onclick="startReverse('${mode}')">Обратный</button>
        </div>
      </div>
    `).join('') + `
      <div class="menu-section" style="margin-top:8px;">
        <button class="btn-menu" onclick="showHomophones()" style="width:100%;color:#e94560;border-color:#e9456044;">Одинаковый звук →</button>
      </div>`;
  } else if (menuTab === 'tones') {
    content = `
      <div class="menu-section">
        <div class="menu-row-label">11 комбинаций знак × класс</div>
        <button class="btn-menu" onclick="startQuiz('tones')" style="width:100%">Начать</button>
      </div>
    `;
  } else if (menuTab === 'vocab') {
    const l1 = VOCAB.filter(v => v.level === 1).length;
    const l2 = VOCAB.filter(v => v.level === 2).length;
    const l3 = VOCAB.filter(v => v.level === 3).length;
    const vocabBtn = (lv, label, total) => {
      const si = vocabSessionInfo(lv);
      const match = si && (si.done > 0 || si.correct > 0);
      const btnLabel = match ? `Продолжить (${si.correct} / ${total})` : 'Начать';
      const onclick  = match ? `startVocabQuiz(true,false,${lv})` : `startVocabQuiz(false,false,${lv})`;
      return `<div class="menu-section">
        <div class="menu-row-label">${label} (${total})</div>
        <button class="btn-menu" onclick="${onclick}" style="width:100%">${btnLabel}</button>
      </div>`;
    };
    content = `
      ${vocabBtn(1, 'Уровень 1 — слова', l1)}
      ${vocabBtn(2, 'Уровень 2 — словосочетания', l2)}
      ${vocabBtn(3, 'Уровень 3 — предложения', l3)}
      ${vocabBtn(0, 'Все уровни', VOCAB.length)}`;
  } else if (menuTab === 'special') {
    const specialWords = VOCAB.filter(v => v.special);
    content = `
      <div class="menu-section">
        <div class="menu-row-label">Особые слова (${specialWords.length})</div>
        <button class="btn-menu" onclick="startVocabQuiz(false, true)" style="width:100%">Начать</button>
      </div>`;
  }

  const fsBar = fsReady
    ? `<div style="text-align:center;font-size:12px;color:#4ecca3;margin-bottom:6px;">● прогресс сохраняется в файл</div>`
    : `<div style="text-align:center;font-size:12px;color:#e94560;margin-bottom:6px;">
         ○ файл не подключён —
         <button onclick="fsConnect()" style="background:none;border:none;color:#e94560;font-size:12px;cursor:pointer;text-decoration:underline;padding:0;">подключить</button>
       </div>`;
  document.getElementById('card').innerHTML = `
    <div class="menu-title">studyThai</div>
    <div class="tab-bar">${tabBar}</div>
    ${fsBar}
    ${content}
  `;
}

const LABELS = {
  middle:        'Middle class',
  high:          'High class',
  low:           'Low class',
  all:           'All consonants',
  'vowel-short': 'Short vowels',
  'vowel-long':  'Long vowels',
  'vowel-special':'Special vowels',
  'vowel-all':   'All vowels',
  tones:         'Tones',
};

function startQuiz(mode) {
  if      (mode === 'middle')        activeLetters = MIDDLE;
  else if (mode === 'high')          activeLetters = HIGH;
  else if (mode === 'low')           activeLetters = LOW;
  else if (mode === 'all')           activeLetters = [...MIDDLE, ...HIGH, ...LOW];
  else if (mode === 'vowel-short')   activeLetters = SHORT_VOWELS;
  else if (mode === 'vowel-long')    activeLetters = LONG_VOWELS;
  else if (mode === 'vowel-special') activeLetters = SPECIAL_VOWELS;
  else if (mode === 'tones')         activeLetters = TONE_RULES;
  else                               activeLetters = [...SHORT_VOWELS, ...LONG_VOWELS, ...SPECIAL_VOWELS];

  isVowelMode   = mode.startsWith('vowel');
  isToneMode    = mode === 'tones';
  isReverseMode = false;
  lastStart     = () => startQuiz(mode);

  queue = buildQueue(activeLetters);
  retry = [];
  pos = 0;
  correctSet = new Set();
  answered = false;
  quizHistory = [];

  const classLabel = LABELS[mode] ?? mode;
  const smallLetter = isVowelMode || isToneMode;

  document.getElementById('card').innerHTML = `
    <button class="btn-back" onclick="showMenu()">← Меню</button>
    <div class="class-title">${classLabel}</div>
    <div class="progress" id="progress"></div>
    ${!isToneMode ? '<div class="letter-cls" id="letter-cls"></div>' : ''}
    <div class="${smallLetter ? 'letter small' : 'letter'}" id="letter"></div>
    ${isToneMode ? '<div class="tone-subtitle" id="subtitle"></div>' : '<div class="letter-name" id="letter-name" style="visibility:hidden"></div>'}
    ${(!isVowelMode && !isToneMode) ? '<div class="word-hint" id="word-hint"></div>' : ''}
    <div class="fields">
      <div class="field-wrap">
        <input type="text" id="${isToneMode ? 'inp-name' : 'inp-sound'}"
               placeholder="${isToneMode ? 'тон...' : 'звук...'}"
               onkeydown="handleKey(event)" autocomplete="off" spellcheck="false">
      </div>
    </div>
    <button id="action-btn" onclick="checkAnswer()">Проверить →</button>
    <button id="prev-btn" class="btn-outline" onclick="prevQuiz()" style="margin-top:8px;font-size:15px;padding:10px;display:none;">← Назад</button>
    <div class="feedback" id="feedback"></div>
    <div class="answer-reveal" id="reveal"></div>
  `;

  document.getElementById('letter').textContent = current().char;
  if (isToneMode) document.getElementById('subtitle').textContent = current().subtitle;
  updateWordHint();
  updateProgress();
  document.getElementById(isToneMode ? 'inp-name' : 'inp-sound').focus();
}

function updateProgress() {
  const correct   = correctSet.size;
  const remaining = activeLetters.length - correct;
  document.getElementById('progress').textContent =
    `осталось: ${remaining} | правильно: ${correct} / ${activeLetters.length}`;
}

function prevQuiz() {
  if (quizHistory.length === 0) return;
  if (reverseTimer) { clearTimeout(reverseTimer); reverseTimer = null; }
  const snap = quizHistory.pop();
  pos        = snap.pos;
  retry      = snap.retry;
  correctSet = snap.correctSet;
  queue      = snap.queue;
  answered   = false;

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  document.getElementById('reveal').textContent   = '';

  if (isReverseMode) {
    document.getElementById('next-btn').style.display = 'none';
    renderReverseCard();
  } else {
    document.getElementById('letter').textContent = current().char;
    if (isToneMode) document.getElementById('subtitle').textContent = current().subtitle;
    const ln = document.getElementById('letter-name');
    if (ln) ln.style.visibility = 'hidden';
    updateWordHint();
    const inp = document.getElementById(isToneMode ? 'inp-name' : 'inp-sound');
    inp.value     = '';
    inp.className = '';
    document.getElementById('action-btn').textContent = 'Проверить →';
    inp.focus();
  }

  updateProgress();
  updatePrevBtn(quizHistory);
}

function checkAnswer() {
  if (answered) { next(); return; }

  const item = current();
  const fb   = document.getElementById('feedback');

  if (isToneMode) {
    const inpName = document.getElementById('inp-name').value;
    if (!inpName) return;
    const ok = matchAny(inpName, item.nameAlt);
    quizHistory.push({ pos, retry: [...retry], correctSet: new Set(correctSet), queue: [...queue] });
    recordResult(item.char, ok);
    answered = true;
    document.getElementById('inp-name').className = ok ? 'ok' : 'bad';
    if (ok) {
      correctSet.add(item.char);
      fb.textContent = '✓ Правильно!';
      fb.className = 'feedback correct';
      if (pos + 1 >= queue.length && retry.length === 0) { setTimeout(showDone, 800); return; }
    } else {
      retry.push(item);
      fb.textContent = '✗ Неверно — повторим позже';
      fb.className = 'feedback wrong';
    }
    document.getElementById('reveal').innerHTML = `Тон: <span>${item.name}</span>`;
  } else {
    const inpSound = document.getElementById('inp-sound').value;
    if (!inpSound) return;
    const ok = soundCheck(inpSound, item);
    quizHistory.push({ pos, retry: [...retry], correctSet: new Set(correctSet), queue: [...queue] });
    recordResult(item.char, ok);
    answered = true;
    document.getElementById('inp-sound').className = ok ? 'ok' : 'bad';
    if (ok) {
      correctSet.add(item.char);
      fb.textContent = '✓ Правильно!';
      fb.className = 'feedback correct';
      if (pos + 1 >= queue.length && retry.length === 0) { setTimeout(showDone, 800); return; }
    } else {
      retry.push(item);
      fb.textContent = '✗ Неверно — повторим позже';
      fb.className = 'feedback wrong';
    }
    const soundDisplay = (item.soundFinal && item.soundFinal !== item.sound)
      ? `${item.sound} / ${item.soundFinal}` : item.sound;
    document.getElementById('reveal').innerHTML = `Звук: <span>${soundDisplay}</span>`;
    const ln = document.getElementById('letter-name');
    if (ln) ln.style.visibility = 'visible';
  }

  updateProgress();
  updatePrevBtn(quizHistory);
  document.getElementById('action-btn').textContent = 'Следующая →';
}

function next() {
  pos++;
  if (pos >= queue.length) {
    if (retry.length === 0) { showDone(); return; }
    queue = shuffle(retry);
    retry = [];
    pos = 0;
    quizHistory = [];
  }

  answered = false;
  document.getElementById('letter').textContent = current().char;
  if (isToneMode) document.getElementById('subtitle').textContent = current().subtitle;
  const ln = document.getElementById('letter-name');
  if (ln) ln.style.visibility = 'hidden';
  updateWordHint();
  const inp = document.getElementById(isToneMode ? 'inp-name' : 'inp-sound');
  inp.value = '';
  inp.className = '';
  inp.focus();
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('reveal').textContent = '';
  document.getElementById('action-btn').textContent = 'Проверить →';
  updateProgress();
  updatePrevBtn(quizHistory);
}

function showDone() {
  const repeatBtn = lastStart
    ? `<button onclick="repeatQuiz()" style="margin-bottom:12px;">Повторить</button>`
    : '';
  document.getElementById('card').innerHTML = `
    <div style="font-size:28px; color:#4ecca3; margin-bottom:20px;">Все буквы выучены!</div>
    <div style="font-size:18px; color:#888; margin-bottom:30px;">${activeLetters.length} из ${activeLetters.length} правильно</div>
    ${repeatBtn}
    <button onclick="showMenu()">Выбрать класс</button>
  `;
}

function repeatQuiz() {
  if (lastStart) lastStart();
}

function handleKey(e) {
  if (e.key === 'Enter') checkAnswer();
}

(async () => { await fsInit(); showMenu(); })();
