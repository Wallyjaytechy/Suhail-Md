const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wallyjay123gmail.com"
global.location="Osun,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/wallyjaytechy/WALLYJAYTECH-M";
global.gurl  =process.env.GURL  || "https://wa.me/2348144317152";
global.website=process.env.GURL || "https://wa.me/2348144317152" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚆𝙰𝙻𝙻𝚈 𝙹𝙰𝚈 𝚃𝙴𝙲𝙷" 


global.devs = "2348144317152" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144317152";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_28_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODksXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmtYQ2Q2S0NKRmllOXZWZTVDMnR6WWQzTlZVUkkvUlRaSEhrY3BLakhNcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaXppZ3VxUkRTa2U5MkNSdVNOSlB2d1wiLFxuICBcInBob25lSWRcIjogXCI5ZTA5YjdmZS1lNjUzLTQ0ODYtODlhYi03OWM3NzQ2MjkwYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTU2LFxuICAgICAgOTksXG4gICAgICA3NyxcbiAgICAgIDgsXG4gICAgICAyNDEsXG4gICAgICAxNTMsXG4gICAgICA2OSxcbiAgICAgIDEwNyxcbiAgICAgIDI4LFxuICAgICAgMTEwLFxuICAgICAgMTIyLFxuICAgICAgNzAsXG4gICAgICAxMTcsXG4gICAgICAyMzAsXG4gICAgICAyNTIsXG4gICAgICAxMTksXG4gICAgICAyNTEsXG4gICAgICAxMSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMjU0LFxuICAgICAgMjI2LFxuICAgICAgMTE5LFxuICAgICAgMTEzLFxuICAgICAgMTE5LFxuICAgICAgNzEsXG4gICAgICAxOTAsXG4gICAgICAxMjMsXG4gICAgICAxMzAsXG4gICAgICA3NCxcbiAgICAgIDIwLFxuICAgICAgMTEwLFxuICAgICAgNzMsXG4gICAgICAyLFxuICAgICAgODksXG4gICAgICA0LFxuICAgICAgMjEyLFxuICAgICAgMjEsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOellpWnNIRU9UOHA3SUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhBVWRwaFc3dDVlQThaT0I5THhldWJHY2pTekVJSnRSM0NpMzdzaGZTMDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic29VMGNmendmbzdGdGRNVjhWSVNOdENzWFdNUklMVDlCSmJtNmQzZzN1T3cwSDY5R2s0dmpFbVdVYU5yMlBnNHlXcXIraS9ESWt0TkluV3BvK0RmQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFloYWxQM2ZxclYvSlNTb0VTZnRIVWNKS1MweDhVbzhhR1Z0TG1abWxSR2ZrTStQbm9BMkJwblQ0c1FkRHBqRGZCSTFVZ1dzS2k5ODloOUhvZVQ5Q2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ0MzE3MTUyOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV0FMTFkgSkFZIFRFQ0hcIixcbiAgICBcImxpZFwiOiBcIjE0NTY5ODU5NTA1Nzg2NjozN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDQzMTcxNTI6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYxMjUyODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0MC5qc29uIjogIntcImtleURhdGFcIjpcIkRqb3RNSGY5aHRPYWo5cUp5V3JmUEt4VVFJM2haS0IvRFp1dkR0SCtvVWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2MTIzNjgzMDIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzR4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibkdnSUs2di9zYXlpRFBYRDFOK1FQMHJHY0MzR2RaTlR2VUZlaTFTTHhvbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5QmdXdzF3TElVRWx6d1laUXdIWHRtRVJnVUI4Z1BRZ00yMEQ4ZDRmYUxNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0ei5qc29uIjogIntcImtleURhdGFcIjpcIjVTclpLcGd5Yldjcmt1QzFMNGpXSTZlNWM2T3Jzd05qNHVZSWthK1Z3V2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxMTQ2MTk0MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Wally-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚆𝙰𝙻𝙻𝚈 𝙹𝙰𝚈 𝚃𝙴𝙲𝙷 』```", //*『SUBSCRIBE • 𝚆𝙰𝙻𝙻𝚈 𝙹𝙰𝚈 𝚃𝙴𝙲𝙷』*\n youtube.com/@wallyjaytechy"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "WALLY JAY TECH",
  ownername:process.env.OWNER_NAME|| "It's Wally Jay Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "WALLY JAY TECH"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
