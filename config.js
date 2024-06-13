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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://avatars.githubusercontent.com/u/144437482?v=4" ; // SET LOGO FOR IMAGE 
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
global.pair = "https://suhail-md-vtsf.onrender.com/code";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlrenFudjY0ODUzV090Q2lZS0tEcmRWWE9nZkFpSXJHc05sZmF4WVh2U0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NDMxNzE1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEYwOEYzNTYxREIxM0FEOEYxQThCQjYzNDFBNzc0RUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Mjc4MjQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZ5THRxc3lQUmhxSk1XcUFyOEhjTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFhZDUzNWMtOTJmNi00YWIwLWI1ZTUtZjc3Yjc4OGIzMzM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTU3LFxuICAgICAgMjMxLFxuICAgICAgMTk2LFxuICAgICAgNTEsXG4gICAgICAxMDgsXG4gICAgICA3NSxcbiAgICAgIDM5LFxuICAgICAgMjM4LFxuICAgICAgODQsXG4gICAgICA5LFxuICAgICAgNjUsXG4gICAgICAxMzgsXG4gICAgICAxMjAsXG4gICAgICAyMDAsXG4gICAgICAyMjAsXG4gICAgICA3MSxcbiAgICAgIDY2LFxuICAgICAgMjIsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjA4LFxuICAgICAgMTExLFxuICAgICAgMjM4LFxuICAgICAgMTQ4LFxuICAgICAgMTM1LFxuICAgICAgNjQsXG4gICAgICAyMDcsXG4gICAgICA1NixcbiAgICAgIDE0NCxcbiAgICAgIDMyLFxuICAgICAgMjMxLFxuICAgICAgMTI2LFxuICAgICAgMTAzLFxuICAgICAgMjAxLFxuICAgICAgOCxcbiAgICAgIDIwMixcbiAgICAgIDIyMCxcbiAgICAgIDE2OCxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNVNCSFlZM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NDMxNzE1Mjo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldBTExZIEpBWSBURUNIXCIsXG4gICAgXCJsaWRcIjogXCIxNDU2OTg1OTUwNTc4NjY6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpZaVpzSEVOV3dxN01HR0J3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4QVVkcGhXN3Q1ZUE4Wk9COUx4ZXViR2NqU3pFSUp0UjNDaTM3c2hmUzAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpTSy9GcVJ1aUUyOVZIQndYWmlIL2VvV1pBZzV1TTJNaDI4MFJtYlU3b2dOUUkwRWtTSWFkVndLSzNaVEtYUHhzNmVGLzRRZDJDa01WbkZBbDREbEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJSZERXZjVnY09zYWpkNFRObDRsd0VDRGZKWDZVR3hXejkwdC9FeFpTa0JnRXV2VUI1NW1ERnBKbkZKVjNEcmYxVitwUzRML1ZpWVhIU1hhTVNWQWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDQzMTcxNTI6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyNzgyMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc1Ry5qc29uIjogIntcImtleURhdGFcIjpcIkk2TzQvNW9uNDN0djRFbjVTZFUxVnY3dEFPMFZWMjRlK0MxS0dBMlFLZms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjIzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMjEsMTBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI2Njk4MzI4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
