# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step required. Open `index.html` directly in a browser:

```sh
open -a "Google Chrome" index.html
```

## Architecture

The app consists of four files:
- `index.html` — HTML shell, loads the other three files
- `style.css` — all styles
- `app.js` — consonant/vowel/tone data and quiz logic
- `vocab.js` — vocabulary list, loaded before `app.js`

No dependencies, no build system, no server.

### Transliteration system: Paiboon+

All romanisation in `sound`, `soundAlt`, and `vocab.js` `trans` fields uses **Paiboon+** (by Benjawan Poomsan Becker). Key conventions that differ from other systems:

**Consonants:**

| Thai | Paiboon+ | Note |
|------|----------|------|
| ก | g | unaspirated — vs aspirated ข/ค = k |
| จ | j | unaspirated — vs aspirated ช/ฉ = ch |
| ต | dt | unaspirated — vs aspirated ถ/ท = t |
| ป | bp | unaspirated — vs aspirated ผ/พ = p |
| ย (initial) | y | |
| ย (final) | i | สาย = saai, บ่าย = baai, ร้อย = roi |
| ว (initial) | w | |
| ว (final) | o | เกา = gao, หิว = hio, แมว = maeo |
| ไ / ใ | ai | sara ai vowel; ใส่ = sai |
| final ด | t | ผัด = pat, ขาด = kaat |
| final บ | p | อาบ = aap |
| final ก | k | |

**Vowels (long vowels double the letter):**

| Thai | Paiboon+ | Note |
|------|----------|------|
| อะ / อั (short) | a | ซัก = sak, กัน = gan |
| อา (long) | aa | สาม = saam, อาหาร = aahaan |
| อิ (short) | i | |
| อี (long) | ii | ดี = dii, กี่ = gii |
| อึ (short) | eu | ถึง = teung |
| อือ (long) | euu | มือ = meuu, ลืม = leuum |
| อุ (short) | u | ยุง = yung |
| อู (long) | uu | รูป = ruup |
| เอะ (short) | e | |
| เอ (long) | ee | เมล์ = mee, เก้าอี้ = gao-ii |
| แอะ (short) | ae | |
| แอ (long) | ae | แปด = bpaet, แม่ = mae, แมว = maeo, แดง = daeng |
| โอะ (short) | o | |
| โอ (long) | oh | โมง = mohng, โรง = rohng, กระโปรง = gra-bprohng |
| ออ | or | ต่อ = dtor, คอ = kor, ของ = korng |
| เอีย | ia | เรียน = rian, เตี้ย = dtia |
| เอือ | eua | เสื้อ = seua, เมื่อ = meua, เดือน = deuan |
| อัว (long) | uua | ตัว = dtuua, ชั่ว = chuua |
| ไ / ใ | ai | |
| เอา | ao | เกา = gao |
| อำ | am | |

**Critical distinction: อือ (euu) vs เอือ (eua)**
- sara อือ = C+ื (no leading เ): มือ = meuu, ลืม = leuum, หรือ = reuu
- sara เอือ = เ+C+ื+อ (with leading เ): เสื้อ = seua, เมื่อ = meua, เดือน = deuan, เครื่อง = kreuang

### Data model

Thai characters are organised into constant arrays at the top of `app.js`:

- `MIDDLE`, `HIGH`, `LOW` — the 44 Thai consonants split by tonal class
- `SHORT_VOWELS`, `LONG_VOWELS`, `SPECIAL_VOWELS` — the vowel sets
- `TONE_RULES` — 11 tone-mark/class combinations

Each entry has `char`, `name`, `nameAlt[]`, `sound`, `soundAlt[]`. `soundAlt` contains only Paiboon+ variants — non-Paiboon+ alternatives are not accepted. Vowel entries use `ก` as the dummy consonant placeholder (e.g. `กา`, `เก`, `โก`). Consonants that change sound in final position get `soundFinal` / `soundFinalAlt[]` appended by the `FINAL_SOUNDS` post-processing loop.

Two lookup maps are built after the arrays:
- `LETTER_CLASS` — maps consonant char → `'mid'|'high'|'low'`
- `VOWEL_TYPE` — maps vowel char → `'short'|'long'|'special'`

Both are displayed as a small label above the character in forward and reverse modes.

### Vocab data model

Each entry in `vocab.js` has `en`, `trans`, `thai`, `level` (1/2/3), and optionally `special: true`. Levels:
- **1** — single Thai word
- **2** — fixed phrase of 2–4 words
- **3** — full sentence (sorted short → long within the file)

### Persistence

Progress is stored exclusively in a local file via the **File System Access API** (Chrome). No localStorage is used.

Two in-memory variables hold the runtime state and are written to file on every change:
- `memStats` — map of `char → { c, w }` (correct/wrong counts) for consonants, vowels, tones, and vocab items (`v:EN_KEY`); written via `saveStats()`
- `memVocabSessions` — map of `level → session` where each session is `{ queue, retry, pos, correct, level }`; levels: `0` = all, `1`/`2`/`3` = specific level; written via `saveVocabSession()` / `clearVocabSession()`

Both are serialised into a single JSON file under the keys `studyThai_v1` and `studyThai_vocab_sessions`. Each vocab level keeps its own independent session so switching levels does not reset other levels' progress.

**File setup (Chrome):** on first use the user picks or creates a `progress.json` file. The file handle is persisted in IndexedDB (`studyThai_fs`) so Chrome can reopen it automatically on next load (user must click "Allow" on the browser permission prompt). Status shown in the menu (green = connected, red = not connected). If no file is connected, data exists only in memory for the current session.

### Quiz modes

- **Forward mode** (`startQuiz`) — user sees a Thai character and types its sound. Letter name is hidden until after the answer. Class label (mid/high/low or short/long/special) shown above the character.
- **Reverse mode** (`startReverse`) — user sees a romanised name + hint and picks the correct Thai character from a 2×2 grid. Class label shown above the prompt.
- **Tone mode** — user sees a Thai syllable with tone mark and types the tone name.
- **Vocab mode** (`startVocabQuiz(resume, specialOnly, level)`) — user sees Thai script and types the Paiboon+ transcription. English meaning is hidden until after the answer; no auto-advance on correct answer. `specialOnly=true` filters to entries with `special: true`; `level` (1/2/3, default 0 = all) filters by difficulty level.

The menu has five tabs: Согласные, Гласные, Тоны, Словарь, Special. The Гласные tab also has a **Homophone reference** screen (`showHomophones()`) listing vowel pairs with identical Paiboon+ sound (ae, or, ai).

The **Словарь tab** shows four buttons (Уровень 1/2/3, Все уровни). Each button shows "Продолжить (X/Y)" if a saved session for that level exists **and has `done > 0`**, otherwise "Начать". There is no separate "Сессия в процессе" block.

Global state (`activeLetters`, `queue`, `retry`, `pos`, `answered`, `isVowelMode`, `isToneMode`, `isReverseMode`, `isVocabMode`) is reset on every mode start. The entire card DOM is rebuilt from scratch on each mode switch by setting `card.innerHTML`.

### Answer matching

- Consonant/vowel sound: `soundCheck()` — splits on `/`, `-`, `,`, space; checks initial and final tokens separately against `soundAlt` / `soundFinalAlt`.
- Vocab transcription: `normTrans()` — strips hyphens, spaces, and punctuation (`?!.,`) before comparing, so `naatee` and `naa-tee` are both accepted, and trailing `?` in `trans` is not required.
