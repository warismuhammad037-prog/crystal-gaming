# 💎 Crystal Match — Telegram Mini App

## Game Features
- 🔮 7x8 crystal board — match 3 ya zyada
- 💣 Bomb power-up — 3x3 area blast
- 🌈 Rainbow power-up — ek color sab clear
- 🔀 Shuffle — board shuffle
- 💡 Hint — best move dikhaye
- 🏆 Leaderboard
- 📋 Daily Quests
- 🛒 Shop (gems se items khareedein)
- ⚡ Combo system — multiplier
- 💎 Coins/Gems system
- ✨ Particle effects + animations

---

## Project Files
```
crystal-match-app/
├── index.html   ← Game (Telegram Mini App)
├── bot.js       ← Telegram Bot (game launch karta hai)
├── .env         ← Keys yahan daalo
├── package.json
└── README.md
```

---

## VS Code Setup — Step by Step

### Step 1: VS Code mein folder kholein
ZIP extract → VS Code → File > Open Folder → crystal-match-app

### Step 2: Node packages install karein
```bash
npm install
```

### Step 3: Game deploy karein (HTTPS zaroori hai!)
Telegram Mini App ko **HTTPS URL** chahiye. Sabse aasaan tarika:

#### Option A — GitHub Pages (FREE)
1. GitHub account banayein: https://github.com
2. New repository banayein: `crystal-match-app`
3. `index.html` upload karein
4. Settings > Pages > Source: main branch
5. URL milegi: `https://yourusername.github.io/crystal-match-app`

#### Option B — Vercel (FREE, recommended)
1. https://vercel.com par account banayein
2. "New Project" > folder upload karein
3. Deploy ho jayega — URL milegi instantly

#### Option C — Local testing (ngrok)
```bash
# index.html ko serve karo
npx serve .
# ya
python -m http.server 8080

# Aur ngrok se HTTPS tunnel banao
ngrok http 8080
```

### Step 4: .env fill karein
```env
TELEGRAM_BOT_TOKEN=@BotFather_se_token
MINI_APP_URL=https://aapki-deployed-url.com
```

### Step 5: Bot ko Mini App set karein
@BotFather mein:
```
/newapp
```
ya existing bot ke liye:
```
/mybots > aapka bot > Bot Menu Button > Web App URL
```
wahi URL daalo jo Step 3 mein mili.

### Step 6: Bot chalayein
```bash
npm start
```

### Step 7: Test karein
Telegram mein apna bot kholein → /start → "Play Crystal Match" button → Game khulega!

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Game nahi khulta | HTTPS URL chahiye, http nahi chalega |
| Bot respond nahi karta | .env mein token check karein |
| Blank screen | index.html URL sahi hai? |
| "Not available" error | BotFather mein web_app URL set karein |
