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
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_41_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJjcVQzVGp4dnJld1hKZlJremxoUWp3U2IzWXh6ekkwZnZSVlQ0dmE2bDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMTE5NDI0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBMjJFNzM0NzVENjUyRTI5MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDU4MTA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMTE5NDI0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4NkVDMDMzM0VGMjMzNkI0RjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDU4MTA4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdXZ3ljWHlOVF9lc1VYdW1sZUkzOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2FjN2ExZWUtMzFmNy00ZDM0LTkxNGUtNWNiZTFmMjQyNjQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDEwMixcbiAgICAgIDE5NCxcbiAgICAgIDE2OCxcbiAgICAgIDE5NixcbiAgICAgIDIyMCxcbiAgICAgIDIwMSxcbiAgICAgIDE3OSxcbiAgICAgIDIyNyxcbiAgICAgIDIxMyxcbiAgICAgIDEzLFxuICAgICAgMTcsXG4gICAgICA1OSxcbiAgICAgIDQ4LFxuICAgICAgMTQ4LFxuICAgICAgMTg1LFxuICAgICAgMTk5LFxuICAgICAgNzAsXG4gICAgICAxLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICA1OSxcbiAgICAgIDUzLFxuICAgICAgODMsXG4gICAgICAyMzQsXG4gICAgICAyMDAsXG4gICAgICAxNTYsXG4gICAgICA5MSxcbiAgICAgIDk1LFxuICAgICAgMTcxLFxuICAgICAgMjQ1LFxuICAgICAgMTkwLFxuICAgICAgOTIsXG4gICAgICAxMjMsXG4gICAgICA1MCxcbiAgICAgIDY0LFxuICAgICAgMTY4LFxuICAgICAgMjE2LFxuICAgICAgMjE1LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUU5YVlERUxPcCtiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJROHd0SmJ0NHcxRjMzTHJkRmxKWWdRWjRvRWp1TUZtYnJxMTdjV1FWeWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHdmTHF0QlBtdDgrQ3c4NlMzWVc2U3Q0ZWs1Tkd1a0IzRTZvQmJSTnBiZEdnRnU1SHBCVVJsV0lEWFB3clVyY0lNZHRIQndRWE82b0labXJPNVRoRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0JTVTVrZlZsUWVZd1doNW96VXVSMDhtZENRbnZPaVZrVkFvVmlNaGtmUW8xcHcvYWpXZW9NU1V5VE0vYkRWYWlPZnBmMitGcWZVSXRIVEpUd1BvQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxMTk0MjQzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbGlzc2FcIixcbiAgICBcImxpZFwiOiBcIjI2MzU5OTQyMzUzMzIwNzoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTE5NDI0MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0NTgxMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV1OS5qc29uIjogIntcImtleURhdGFcIjpcIjhtSkVXNzcxNnJ0aDA0T2lmK1pPTmp6R25zczJ5RjM5VUcwMjZ5ZXFFMVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg2OTE1NzA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc0NTgxMDM3MTFcIn0iCn0="  // PUT your SESSION_ID 


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
