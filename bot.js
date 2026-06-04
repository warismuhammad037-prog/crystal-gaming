/**
 * Crystal Match — Telegram Bot + Mini App launcher
 * ==================================================
 * Yeh bot users ko Mini App open karne ka button bhejta hai
 */

require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const TOKEN   = process.env.TELEGRAM_BOT_TOKEN;
const APP_URL = process.env.MINI_APP_URL; // aapki deployed URL (GitHub Pages ya Vercel)

if (!TOKEN) { console.error("❌ TELEGRAM_BOT_TOKEN missing"); process.exit(1); }

const bot = new TelegramBot(TOKEN, { polling: true });

// /start — Mini App button ke saath welcome
bot.onText(/\/start/, async (msg) => {
  const name = msg.from.first_name || "Player";
  await bot.sendMessage(msg.chat.id,
    `💎 *Welcome ${name}!*\n\nCrystal Match — addictive gem puzzle game!\n\n✨ Match 3+ crystals\n🎯 Complete levels\n💣 Use power-ups\n🏆 Top leaderboard`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[
          { text: "🎮 Play Crystal Match", web_app: { url: APP_URL } }
        ]]
      }
    }
  );
});

// /play — direct game launch
bot.onText(/\/play/, async (msg) => {
  await bot.sendMessage(msg.chat.id, "🎮 Crystal Match kholein!", {
    reply_markup: {
      inline_keyboard: [[
        { text: "💎 Open Game", web_app: { url: APP_URL } }
      ]]
    }
  });
});

// /help
bot.onText(/\/help/, async (msg) => {
  await bot.sendMessage(msg.chat.id,
    `🎮 *Crystal Match — Help*\n\n` +
    `*Kaise khelein:*\n` +
    `• Do adjacent crystals swap karein\n` +
    `• 3+ same crystals match ho jayen\n` +
    `• Points kamao, level complete karein\n\n` +
    `*Power-ups:*\n` +
    `💣 Bomb — 3x3 area clear\n` +
    `🌈 Rainbow — ek type sab clear\n` +
    `🔀 Shuffle — board shuffle\n` +
    `💡 Hint — next move dikhaye\n\n` +
    `*Commands:*\n` +
    `/play — game kholein\n` +
    `/score — aapka best score\n`,
    { parse_mode: "Markdown" }
  );
});

// /score
bot.onText(/\/score/, async (msg) => {
  await bot.sendMessage(msg.chat.id,
    `🏆 Aapka best score game ke andar dekh saktay hain!\n\n` +
    `Leaderboard aur achievements game mein mojood hain.`,
    {
      reply_markup: {
        inline_keyboard: [[
          { text: "💎 Open Game", web_app: { url: APP_URL } }
        ]]
      }
    }
  );
});

bot.on("polling_error", err => console.error("Polling error:", err.message));
console.log("🎮 Crystal Match Bot chal raha hai...");
console.log(`🌐 Mini App URL: ${APP_URL}`);
