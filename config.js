//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JpWlhhZkQ2TmZtcmRvY1ZnQmV5SCtGMUpyWkNyN2h4aVEvVUQvNzdFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLy9PT1ZqMDY4L09hK2ZHS0tSaVZJbFA4MzBacEhFdEQ5Rlc4c1dlOU9END0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQWM2d21OcmsyNzdsV28wenlyNHlmWklta0h4b1RRa042QXRzMnpPOUcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTHNlZkd2QnN5Y1hqaVBTOURzQ1Q1RlNzN2xyUDZWcmdheFBQbVY5VWlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPUGMySWVSM0VTTytvZmxneGxYNVUxdUcySFUvbWxiMERwQ3VBZDhsbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklVRVJtUjJPazZsTGZMZTY3OGQvaVBlRitOR1JvSzJOVFlQK1VHcmJMR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xHWlhPZDZtSnRhQXdidVZVM3lIYzQzNmM5VGwrZ0luRlFUZVRkVzVVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZQUTBuYVJNcmRkMGk5UVVtUU1ZSVUzc3M1d3hPb05RNk5RMCtKcCtIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQQXhpdVl6TmhrWlZUZDhIL3pDNDEzaDJ1K29uamRWUFZNbk9NbnRQaHJIUXlKOXZuT2gwL1JqUTZMVkgrTXlHZEt1WFVCK0NMdW5iUnQ1aGxUeGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6ImNaZld2V0RSRmdqTFRPUzE1UTNwTUtab3dEYUx0cVJMWmZXOEhPdTVTREU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODEyMjYxNDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTgwQTdBNUIwMTY2NEYxQzBFQ0UxMUFFQUFCNjVDODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDcxNTg1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibHVwYTc2dzlTcjZyMWwycWMzakJidyIsInBob25lSWQiOiI2MmZiOTQwMS1lMjY2LTQ5NzktYTc3NC05MjYyNDY1ZDEyZjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlZiWW9DU3YzNWJZWW1mQ2Y2OEhpSERqL2ZrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhWMTduSU45bXB2clN2MnczczFkM2xXSDBxdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5VDROR01TSiIsIm1lIjp7ImlkIjoiOTQ3ODEyMjYxNDQ6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYg8J2QlfCdkIjwnZCM8J2QlCAgIPCdkJLwnZCT8J2QgPCdkJHwnZCTIDzwnZCW8J2QgPCdkIjwnZCTPiAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAg8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pycnlmRUdFTUNVd0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImUrY3h6RHNJR0IwV0dZU1hGWXBTWjJEbFV4a2grNE5na0Z2U2tOZHUyMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpqbWNHazNzb1hSL2ZaUkMrMGlLNm9tRVNrd3R4c0Z4TUorWmNHcFV2WnVwczc5T1ZMWFh0c2VHOFptN2VyQU9SL2E2UGVwWUYvajFIVDBmVW9DekJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5WVNjYjM0VDVjSlNUT1NDRGdWTzg1SUVVNTdhbnk1eTl0VFZWNWRZNnhPUTFtQWpPTXl2TklqOFVQdFpTaUlyQU4vczljWXM2TFlYblU0a2tURmRoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2bk1jdzdDQmdkRmhtRWx4V0tVbWRnNVZNWklmdURZSkJiMHBEWGJ0dFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3MTU4NTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSC8zIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
