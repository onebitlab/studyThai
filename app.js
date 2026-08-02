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
  { char: 'เกิ',  name: 'sara er (short)', nameAlt: ['sara er','sara er short','สระเอิ'], sound: 'er',  soundAlt: ['er'] },
  { char: 'เกอ',  name: 'sara er (long)',  nameAlt: ['sara er','sara er long','สระเออ'],  sound: 'er',  soundAlt: ['er'] },
  { char: 'กัว',  name: 'sara ua',  nameAlt: ['sara ua','สระอัว'],               sound: 'uua', soundAlt: ['uua'] },
  { char: 'กวย',  name: 'sara uai', nameAlt: ['sara uai','สระวย'],              sound: 'uai', soundAlt: ['uai'] },
  { char: 'กอย',  name: 'sara oi',  nameAlt: ['sara oi','สระอย'],               sound: 'oi',  soundAlt: ['oi'] },
  { char: 'กาย',  name: 'sara aai', nameAlt: ['sara aai','สระอาย'],             sound: 'aai', soundAlt: ['aai'] },
  { char: 'ไก',  name: 'sara ai mai malai', nameAlt: ['sara ai','mai malai','สระไอ'], sound: 'ai', soundAlt: ['ai'] },
  { char: 'ใก',  name: 'sara ai mai muan',  nameAlt: ['sara ai','mai muan','สระใอ'],  sound: 'ai', soundAlt: ['ai'] },
  { char: 'เกา', name: 'sara ao',   nameAlt: ['sara ao','สระเอา'],               sound: 'ao',  soundAlt: ['ao'] },
  { char: 'กำ',  name: 'sara am',   nameAlt: ['sara am','สระอำ'],               sound: 'am',  soundAlt: ['am'] },
  { char: 'เกย', name: 'sara oei',  nameAlt: ['sara oei','สระเอย'],             sound: 'oei', soundAlt: ['oei'] },
];

const TONE_RULES = [
  { char: 'กา',  subtitle: 'กลาง · no mark',      name: 'mid',     nameAlt: ['mid','samai','สามัญ','level'] },
  { char: 'ก่า', subtitle: 'กลาง · ่  (mai ek)',     name: 'low',     nameAlt: ['low','ek','เอก'] },
  { char: 'ก้า', subtitle: 'กลาง · ้  (mai tho)',    name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'ก๊า', subtitle: 'กลาง · ๊  (mai tri)',    name: 'high',    nameAlt: ['high','tri','ตรี'] },
  { char: 'ก๋า', subtitle: 'กลาง · ๋  (mai jattawa)', name: 'rising',  nameAlt: ['rising','jattawa','จัตวา'] },
  { char: 'ขา',  subtitle: 'สูง · no mark',        name: 'rising',  nameAlt: ['rising','jattawa','จัตวา'] },
  { char: 'ข่า', subtitle: 'สูง · ่  (mai ek)',       name: 'low',     nameAlt: ['low','ek','เอก'] },
  { char: 'ข้า', subtitle: 'สูง · ้  (mai tho)',      name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'คา',  subtitle: 'ต่ำ · no mark',         name: 'mid',     nameAlt: ['mid','samai','สามัญ','level'] },
  { char: 'ค่า', subtitle: 'ต่ำ · ่  (mai ek)',        name: 'falling', nameAlt: ['falling','tho','โท'] },
  { char: 'ค้า', subtitle: 'ต่ำ · ้  (mai tho)',       name: 'high',    nameAlt: ['high','tri','ตรี'] },
];

const FINAL_SOUNDS = {
  // unaspirated initial → plain stop final
  'ก': 'k',  'ต': 't',  'ฏ': 't',  'ป': 'p',
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
let vocabLesson  = 0;
let vocabRecall  = false;
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

function buildVocabQueue(specialOnly = false, level = 0, lesson = 0) {
  let list = specialOnly ? VOCAB.filter(v => v.special) : VOCAB;
  if (lesson) list = list.filter(v => v.lesson === lesson);
  else if (level) list = list.filter(v => v.level === level);
  return shuffle([...list]);
}

function vocabSessKey(lesson, level, recall) {
  // всегда принимаем явные параметры, никогда не читаем глобали
  const l = (lesson !== undefined) ? lesson : vocabLesson;
  const lv = (level  !== undefined) ? level  : vocabLevel;
  const r  = (recall !== undefined) ? recall : vocabRecall;
  const base = l ? 'lesson_' + l : '' + lv;
  return r ? base + '_recall' : base;
}


function normTrans(s) {
  return s.trim().toLowerCase().replace(/\s*\([^)]*\)/g, '').replace(/[-\s?!.,\/]/g, '').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

const VOCAB_SESSION_KEY = 'studyThai_vocab_sessions';

function saveVocabSession() {
  memVocabSessions[vocabSessKey(vocabLesson, vocabLevel, vocabRecall)] = {
    queue:   vocabQueue.map(v => v.en),
    retry:   vocabRetry.map(v => v.en),
    pos:     vocabPos,
    correct: vocabCorrect,
    level:   vocabLevel,
    lesson:  vocabLesson,
    recall:  vocabRecall,
    total:   vocabTotal,
  };
  fsWrite();
}

function loadVocabSession(key) {
  try {
    const s = memVocabSessions[key];
    if (!s) return null;
    const byEn = Object.fromEntries(VOCAB.map(v => [v.en, v]));
    const queue = s.queue.map(en => byEn[en]).filter(Boolean);
    const retry = (s.retry || []).map(en => byEn[en]).filter(Boolean);
    if (!queue.length) return null;
    return { queue, retry, pos: s.pos || 0, correct: s.correct || 0, level: s.level || 0, lesson: s.lesson || 0, recall: s.recall || false, total: s.total || queue.length };
  } catch(e) { return null; }
}

function clearVocabSession() {
  delete memVocabSessions[vocabSessKey(vocabLesson, vocabLevel, vocabRecall)];
  fsWrite();
}

function vocabSessionInfo(lv, lesson = 0, recall = false) {
  try {
    const base = lesson ? 'lesson_' + lesson : '' + lv;
    const key = recall ? base + '_recall' : base;
    const s = memVocabSessions[key];
    if (!s || !s.queue || !s.queue.length) return null;
    return { done: s.pos || 0, correct: s.correct || 0, total: s.total || s.queue.length };
  } catch(e) { return null; }
}

function startVocabQuiz(resume = false, specialOnly = false, level = 0, lesson = 0, recall = false) {
  isVocabMode  = true;
  vocabAnswered = false;

  const base = lesson ? 'lesson_' + lesson : '' + level;
  const sessKey = recall ? base + '_recall' : base;
  const saved = resume ? loadVocabSession(sessKey) : null;
  if (saved) {
    vocabQueue   = saved.queue;
    vocabRetry   = saved.retry;
    vocabPos     = saved.pos;
    vocabCorrect = saved.correct;
    vocabLevel   = saved.level;
    vocabLesson  = saved.lesson || lesson;
    vocabRecall  = saved.recall || recall;
    vocabTotal   = saved.total;
  } else {
    vocabLevel   = level;
    vocabLesson  = lesson;
    vocabRecall  = recall;
    vocabQueue   = buildVocabQueue(specialOnly, vocabLevel, vocabLesson);
    vocabTotal   = vocabQueue.length;
    vocabRetry   = [];
    vocabPos     = 0;
    vocabCorrect = 0;
    vocabHistory = [];
    saveVocabSession();
  }

  vocabHistory = [];
  lastStart = () => startVocabQuiz(false, specialOnly, vocabLevel, vocabLesson, vocabRecall);
  let title;
  if (vocabLesson) title = `LESSON ${vocabLesson}${vocabRecall ? ' · Words' : ''}`;
  else { const lbl = vocabLevel ? ` · Level ${vocabLevel}` : ''; title = `VOCABULARY${lbl}`; }
  const backTab = 'beginners';
  document.getElementById('card').innerHTML = `
    <button class="btn-back" onclick="showMenu('${backTab}')">← Menu</button>
    <div class="class-title">${title}</div>
    <div class="progress" id="progress"></div>
    <div class="vocab-en" id="vocab-en"></div>
    <div class="vocab-thai" id="vocab-thai"></div>
    <div class="fields">
      <input type="text" id="inp-trans" placeholder="transcription..."
             onkeydown="handleVocabKey(event)" autocomplete="off" spellcheck="false">
    </div>
    <button id="action-btn" onclick="checkVocabAnswer()">Check →</button>
    <button id="skip-btn" class="btn-outline" onclick="skipVocab()" style="margin-top:8px;font-size:15px;padding:10px;">Skip</button>
    <button id="prev-btn" class="btn-outline" onclick="prevVocab()" style="margin-top:8px;font-size:15px;padding:10px;">← Back</button>
    <div class="feedback" id="feedback"></div>
    <div class="answer-reveal" id="reveal"></div>
  `;
  renderVocabCard();
  updateVocabProgress();
  document.getElementById('inp-trans').focus();
}

function renderVocabCard() {
  const item = vocabQueue[vocabPos];
  if (vocabRecall) {
    document.getElementById('vocab-en').textContent = item.en;
    document.getElementById('vocab-thai').textContent = '';
  } else {
    document.getElementById('vocab-en').textContent = '';
    document.getElementById('vocab-thai').textContent = item.thai || '';
  }
}

function updateVocabProgress() {
  const remaining = vocabTotal - vocabCorrect;
  document.getElementById('progress').textContent =
    `remaining: ${remaining} | correct: ${vocabCorrect} / ${vocabTotal}`;
}

function updatePrevBtn(hist) {
  const btn = document.getElementById('prev-btn');
  if (!btn) return;
  btn.style.display = 'block';
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
  document.getElementById('action-btn').textContent  = 'Check →';
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
  if (vocabRecall) document.getElementById('vocab-thai').textContent = item.thai || '';
  else             document.getElementById('vocab-en').textContent = item.en;

  const fb = document.getElementById('feedback');
  if (ok) {
    vocabCorrect++;
    fb.textContent = '✓ Correct!';
    fb.className = 'feedback correct';
    document.getElementById('reveal').innerHTML = `<span>${item.trans}</span>`;
    if (vocabPos + 1 >= vocabQueue.length && vocabRetry.length === 0) {
      clearVocabSession();
      setTimeout(showVocabDone, 800); return;
    }
  } else {
    vocabRetry.push(item);
    fb.textContent = '✗ Wrong';
    fb.className = 'feedback wrong';
    document.getElementById('reveal').innerHTML = `Correct: <span>${item.trans}</span>`;
  }

  document.getElementById('action-btn').textContent = 'Next →';
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
  document.getElementById('action-btn').textContent    = 'Check →';
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
  vocabRetry.push(item);
  if (vocabPos >= vocabQueue.length) {
    if (vocabRetry.length === 0) { clearVocabSession(); showVocabDone(); return; }
    vocabQueue = shuffle(vocabRetry);
    vocabRetry = [];
    vocabPos   = 0;
    vocabHistory = [];
  }
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
    ? `<button onclick="repeatQuiz()" style="margin-bottom:12px;">Repeat</button>`
    : '';
  document.getElementById('card').innerHTML = `
    <div style="font-size:28px; color:#4ecca3; margin-bottom:20px;">Vocabulary complete!</div>
    ${repeatBtn}
    <button onclick="showMenu()">Menu</button>
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

// --- Persistence via localStorage (works on all browsers & mobile) ---
const LS_KEY = 'studyThai_v1';
const LS_DATA_KEY = 'studyThai_data';
let memStats = {};
let memVocabSessions = {};

function fsWrite() {
  try {
    const data = {};
    if (Object.keys(memStats).length) data[LS_KEY] = memStats;
    if (Object.keys(memVocabSessions).length) data[VOCAB_SESSION_KEY] = memVocabSessions;
    localStorage.setItem(LS_DATA_KEY, JSON.stringify(data));
  } catch(e) {}
  fbCloudWrite(); // sync to Firestore if signed in
}

function fsRead() {
  try {
    const raw = localStorage.getItem(LS_DATA_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data[LS_KEY]) memStats = data[LS_KEY];
    if (data[VOCAB_SESSION_KEY]) memVocabSessions = data[VOCAB_SESSION_KEY];
  } catch(e) {}
}

function fsInit() {
  fsRead();
}

// --- Firebase Sync (Google Sign-In + Firestore) ---
const FB_CONFIG = {
  apiKey:            'AIzaSyCeEJa3SINAtW7iORoMj_FDNMFC_d6bf-A',
  authDomain:        'studythai-4cdbb.firebaseapp.com',
  projectId:         'studythai-4cdbb',
  storageBucket:     'studythai-4cdbb.firebasestorage.app',
  messagingSenderId: '1004165921614',
  appId:             '1:1004165921614:web:c7d47cdfccc7adc8d6bc1f'
};

let fbAuth = null;
let fbDb   = null;
let fbUser = null;
let fbWriteTimer = null;

function fbInit() {
  if (typeof firebase === 'undefined') { showMenu(); return; }
  firebase.initializeApp(FB_CONFIG);
  fbAuth = firebase.auth();
  fbDb   = firebase.firestore();

  fbAuth.onAuthStateChanged(async user => {
    fbUser = user;
    if (user) await fbCloudRead();
    showMenu();
  });
}

async function fbCloudRead() {
  if (!fbUser || !fbDb) return;
  try {
    const doc = await fbDb.collection('users').doc(fbUser.uid).get();
    if (doc.exists) {
      const d = doc.data();
      if (d.studyThai_v1) memStats = d.studyThai_v1;
      if (d.studyThai_vocab_sessions) memVocabSessions = d.studyThai_vocab_sessions;
      // mirror to localStorage
      try {
        const save = {};
        save[LS_KEY] = memStats;
        save[VOCAB_SESSION_KEY] = memVocabSessions;
        localStorage.setItem(LS_DATA_KEY, JSON.stringify(save));
      } catch(e) {}
    } else {
      // first sign-in on this account — push local progress to cloud
      fbCloudWrite();
    }
  } catch(e) {}
}

function fbCloudWrite() {
  if (!fbUser || !fbDb) return;
  // debounce: write 2 seconds after last change to avoid hammering Firestore
  if (fbWriteTimer) clearTimeout(fbWriteTimer);
  fbWriteTimer = setTimeout(async () => {
    try {
      const data = {};
      if (Object.keys(memStats).length)        data.studyThai_v1 = memStats;
      if (Object.keys(memVocabSessions).length) data.studyThai_vocab_sessions = memVocabSessions;
      if (Object.keys(data).length) await fbDb.collection('users').doc(fbUser.uid).set(data);
    } catch(e) {}
  }, 2000);
}

function signInGoogle() {
  if (!fbAuth) return;
  fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(() => {});
}

function fbSignOut() {
  if (!fbAuth) return;
  fbAuth.signOut();
}

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
  if (sp) sp.placeholder = current().soundFinal ? 'init. / final sound...' : 'sound...';
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
    <button class="btn-back" onclick="showMenu()">← Menu</button>
    <div class="class-title">reverse · ${label}</div>
    <div class="progress" id="progress"></div>
    <div class="rev-prompt">
      <div class="letter-cls" id="rev-cls"></div>
      <div class="rev-name" id="rev-name"></div>
      <div class="rev-hint" id="rev-hint"></div>
    </div>
    <div class="rev-grid" id="rev-choices"></div>
    <div class="feedback" id="feedback"></div>
    <div class="answer-reveal" id="reveal"></div>
    <button id="next-btn" onclick="nextReverse()" style="display:none; margin-top:10px;">Next →</button>
    <button id="skip-btn" class="btn-outline" onclick="skipReverse()" style="margin-top:8px;font-size:15px;padding:10px;">Skip</button>
    <button id="prev-btn" class="btn-outline" onclick="prevQuiz()" style="margin-top:8px;font-size:15px;padding:10px;">← Back</button>
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
  const sb = document.getElementById('skip-btn');
  if (sb) sb.style.display = 'none';
  if (ok) {
    correctSet.add(item.char);
    fb.textContent = '✓ Correct!';
    fb.className   = 'feedback correct';
    if (pos + 1 >= queue.length && retry.length === 0) { reverseTimer = setTimeout(showDone, 700); return; }
    reverseTimer = setTimeout(nextReverse, 700);
  } else {
    retry.push(item);
    fb.textContent = '✗ Wrong';
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
  const sb = document.getElementById('skip-btn');
  if (sb) sb.style.display = 'block';
  renderReverseCard();
  updateProgress();
  updatePrevBtn(quizHistory);
}

let menuTab = 'consonants';

function showHomophones() {
  const PAIRS = [
    {
      sound: 'ae',
      note: 'short vs long',
      a: { char: 'แกะ', name: 'sara ae (short)', type: 'short' },
      b: { char: 'แก',  name: 'sara ae (long)',  type: 'long'  },
    },
    {
      sound: 'or',
      note: 'short vs long',
      a: { char: 'เกาะ', name: 'sara or (short)', type: 'short' },
      b: { char: 'กอ',   name: 'sara or (long)',  type: 'long'  },
    },
    {
      sound: 'er',
      note: 'short vs long',
      a: { char: 'เกิ', name: 'sara er (short)', type: 'short' },
      b: { char: 'เกอ', name: 'sara er (long)',  type: 'long'  },
    },
    {
      sound: 'ai',
      note: 'different spelling, same sound',
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
    <button class="btn-back" onclick="showMenu('vowels')">← Vowels</button>
    <div class="class-title" style="margin-bottom:20px;">SAME SOUND</div>
    ${groups}
  `;
}

function showMenu(tab) {
  isVocabMode = false;
  if (tab) menuTab = tab;

  const tabs = [
    { id: 'consonants', label: 'Consonants' },
    { id: 'vowels',     label: 'Vowels'   },
    { id: 'tones',      label: 'Tones'      },
    { id: 'beginners',  label: 'Lessons'     },
  ];

  const tabBar = tabs.map(t =>
    `<button class="tab-btn ${menuTab === t.id ? 'tab-active' : ''}" onclick="showMenu('${t.id}')">${t.label}</button>`
  ).join('');

  let content = '';

  if (menuTab === 'consonants') {
    const rows = [
      ['Middle class (9)',  'middle'],
      ['High class (11)', 'high'],
      ['Low class (24)',  'low'],
      ['All consonants (44)', 'all'],
    ];
    content = rows.map(([label, mode]) => `
      <div class="menu-section">
        <div class="menu-row-label">${label}</div>
        <div class="mode-btns">
          <button class="btn-menu" onclick="startQuiz('${mode}')">Forward</button>
          <button class="btn-menu" onclick="startReverse('${mode}')">Reverse</button>
        </div>
      </div>
    `).join('');
  } else if (menuTab === 'vowels') {
    const rows = [
      ['Short (8)',           'vowel-short'],
      ['Long (8)',            'vowel-long'],
      ['Special / diphthongs (12)','vowel-special'],
      ['All vowels (28)',      'vowel-all'],
    ];
    content = rows.map(([label, mode]) => `
      <div class="menu-section">
        <div class="menu-row-label">${label}</div>
        <div class="mode-btns">
          <button class="btn-menu" onclick="startQuiz('${mode}')">Forward</button>
          <button class="btn-menu" onclick="startReverse('${mode}')">Reverse</button>
        </div>
      </div>
    `).join('') + `
      <div class="menu-section" style="margin-top:8px;">
        <button class="btn-menu" onclick="showHomophones()" style="width:100%;color:#e94560;border-color:#e9456044;">Same sound →</button>
      </div>`;
  } else if (menuTab === 'tones') {
    content = `
      <div class="menu-section">
        <div class="menu-row-label">11 combinations: mark × class</div>
        <button class="btn-menu" onclick="startQuiz('tones')" style="width:100%">Start</button>
      </div>
    `;
  } else if (menuTab === 'beginners') {
    const lessons = [{ num: 1, label: 'Lesson 1' }, { num: 2, label: 'Lesson 2' }, { num: 3, label: 'Lesson 3' }, { num: 4, label: 'Lesson 4' }, { num: 5, label: 'Lesson 5' }, { num: 6, label: 'Lesson 6' }, { num: 7, label: 'Lesson 7' }, { num: 8, label: 'Lesson 8' }, { num: 9, label: 'Lesson 9' }, { num: 10, label: 'Lesson 10' }];
    content = `
      <div class="menu-section">
        <div class="menu-row-label" style="font-size:11px;letter-spacing:1.5px;color:#8899aa;margin-bottom:4px;">THAI FOR BEGINNERS</div>
      </div>
      ${lessons.map(({ num, label }) => {
        const total = VOCAB.filter(v => v.lesson === num).length;
        const modeRow = (recall, modeLabel) => {
          const si = vocabSessionInfo(0, num, recall);
          const match = si && (si.done > 0 || si.correct > 0);
          const r = recall ? 'true' : 'false';
          const buttons = match
            ? `<div class="mode-btns">
                 <button class="btn-menu" onclick="startVocabQuiz(true,false,0,${num},${r})">Continue (${si.correct} / ${total})</button>
                 <button class="btn-menu" onclick="startVocabQuiz(false,false,0,${num},${r})">Start over</button>
               </div>`
            : `<button class="btn-menu" onclick="startVocabQuiz(false,false,0,${num},${r})" style="width:100%">Start</button>`;
          return `<div class="menu-row-label" style="margin-top:6px;">${modeLabel}</div>${buttons}`;
        };
        return `<div class="menu-section">
          <div class="menu-row-label" style="color:#cdd;font-weight:bold;">${label} (${total} words)</div>
          ${modeRow(false, 'Read (Thai → transcription)')}
          ${modeRow(true,  'Learn words (meaning → transcription)')}
        </div>`;
      }).join('')}`;
  }

  const syncBar = fbUser
    ? `<div style="text-align:center;font-size:12px;color:#4ecca3;margin-bottom:8px;">
         ● ${fbUser.email}
         <button onclick="fbSignOut()" style="background:none;border:none;color:#555;font-size:11px;cursor:pointer;text-decoration:underline;padding:0;margin-left:8px;">sign out</button>
       </div>`
    : `<div style="text-align:center;font-size:12px;margin-bottom:8px;">
         <button onclick="signInGoogle()" style="background:none;border:1px solid #333;color:#888;font-size:12px;cursor:pointer;padding:4px 12px;border-radius:6px;">🔄 Sync via Google</button>
       </div>`;

  document.getElementById('card').innerHTML = `
    <div class="menu-title">studyThai</div>
    <div class="tab-bar">${tabBar}</div>
    ${syncBar}
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
    <button class="btn-back" onclick="showMenu()">← Menu</button>
    <div class="class-title">${classLabel}</div>
    <div class="progress" id="progress"></div>
    ${!isToneMode ? '<div class="letter-cls" id="letter-cls"></div>' : ''}
    <div class="${smallLetter ? 'letter small' : 'letter'}" id="letter"></div>
    ${isToneMode ? '<div class="tone-subtitle" id="subtitle"></div>' : '<div class="letter-name" id="letter-name" style="visibility:hidden"></div>'}
    ${(!isVowelMode && !isToneMode) ? '<div class="word-hint" id="word-hint"></div>' : ''}
    <div class="fields">
      <div class="field-wrap">
        <input type="text" id="${isToneMode ? 'inp-name' : 'inp-sound'}"
               placeholder="${isToneMode ? 'tone...' : 'sound...'}"
               onkeydown="handleKey(event)" autocomplete="off" spellcheck="false">
      </div>
    </div>
    <button id="action-btn" onclick="checkAnswer()">Check →</button>
    <button id="skip-btn" class="btn-outline" onclick="skipQuiz()" style="margin-top:8px;font-size:15px;padding:10px;">Skip</button>
    <button id="prev-btn" class="btn-outline" onclick="prevQuiz()" style="margin-top:8px;font-size:15px;padding:10px;">← Back</button>
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
    `remaining: ${remaining} | correct: ${correct} / ${activeLetters.length}`;
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

  const sb = document.getElementById('skip-btn');
  if (sb) sb.style.display = 'block';
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
    document.getElementById('action-btn').textContent = 'Check →';
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
      fb.textContent = '✓ Correct!';
      fb.className = 'feedback correct';
      if (pos + 1 >= queue.length && retry.length === 0) { setTimeout(showDone, 800); return; }
    } else {
      retry.push(item);
      fb.textContent = '✗ Wrong — will retry later';
      fb.className = 'feedback wrong';
    }
    document.getElementById('reveal').innerHTML = `Tone: <span>${item.name}</span>`;
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
      fb.textContent = '✓ Correct!';
      fb.className = 'feedback correct';
      if (pos + 1 >= queue.length && retry.length === 0) { setTimeout(showDone, 800); return; }
    } else {
      retry.push(item);
      fb.textContent = '✗ Wrong — will retry later';
      fb.className = 'feedback wrong';
    }
    const soundDisplay = (item.soundFinal && item.soundFinal !== item.sound)
      ? `${item.sound} / ${item.soundFinal}` : item.sound;
    document.getElementById('reveal').innerHTML = `Sound: <span>${soundDisplay}</span>`;
    const ln = document.getElementById('letter-name');
    if (ln) ln.style.visibility = 'visible';
  }

  updateProgress();
  updatePrevBtn(quizHistory);
  document.getElementById('action-btn').textContent = 'Next →';
  const sb = document.getElementById('skip-btn');
  if (sb) sb.style.display = 'none';
}

function skipQuiz() {
  if (answered) return;
  quizHistory.push({ pos, retry: [...retry], correctSet: new Set(correctSet), queue: [...queue] });
  const item = queue.splice(pos, 1)[0];
  retry.push(item);
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
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('reveal').textContent = '';
  document.getElementById('action-btn').textContent = 'Check →';
  updateProgress();
  updatePrevBtn(quizHistory);
  inp.focus();
}

function skipReverse() {
  if (answered) return;
  quizHistory.push({ pos, retry: [...retry], correctSet: new Set(correctSet), queue: [...queue] });
  const item = queue.splice(pos, 1)[0];
  retry.push(item);
  if (pos >= queue.length) {
    if (retry.length === 0) { showDone(); return; }
    queue = shuffle(retry);
    retry = [];
    pos = 0;
    quizHistory = [];
  }
  answered = false;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('reveal').textContent = '';
  renderReverseCard();
  updateProgress();
  updatePrevBtn(quizHistory);
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
  document.getElementById('action-btn').textContent = 'Check →';
  const sb = document.getElementById('skip-btn');
  if (sb) sb.style.display = 'block';
  updateProgress();
  updatePrevBtn(quizHistory);
}

function showDone() {
  const repeatBtn = lastStart
    ? `<button onclick="repeatQuiz()" style="margin-bottom:12px;">Repeat</button>`
    : '';
  document.getElementById('card').innerHTML = `
    <div style="font-size:28px; color:#4ecca3; margin-bottom:20px;">All letters learned!</div>
    <div style="font-size:18px; color:#888; margin-bottom:30px;">${activeLetters.length} of ${activeLetters.length} correct</div>
    ${repeatBtn}
    <button onclick="showMenu()">Choose class</button>
  `;
}

function repeatQuiz() {
  if (lastStart) lastStart();
}

function handleKey(e) {
  if (e.key === 'Enter') checkAnswer();
}

fsInit(); fbInit(); // fbInit calls showMenu() via onAuthStateChanged
