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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_16_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhBbGxvRE9FazFVSDd5MStja285YWlFVnA5UzRKWUZyN05yMEcyOTh1amM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm15eUhOb3loUnBPWVJMS0tBc2paNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDJiNTM0MjktMzQxNy00YzJmLTllM2EtYjk5YjdjNmE5YTcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgNzQsXG4gICAgICAyMDEsXG4gICAgICAxMTIsXG4gICAgICAxNzIsXG4gICAgICAyNDAsXG4gICAgICAxMjksXG4gICAgICAzMSxcbiAgICAgIDcwLFxuICAgICAgMjI4LFxuICAgICAgMTExLFxuICAgICAgNTUsXG4gICAgICAyMTgsXG4gICAgICAxNDcsXG4gICAgICAxNzUsXG4gICAgICAyMDQsXG4gICAgICAyNDcsXG4gICAgICAxMDQsXG4gICAgICAyMjQsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxODgsXG4gICAgICA2NCxcbiAgICAgIDIzLFxuICAgICAgMjYsXG4gICAgICAzMSxcbiAgICAgIDEzMixcbiAgICAgIDIxMCxcbiAgICAgIDU4LFxuICAgICAgMjM5LFxuICAgICAgMTE2LFxuICAgICAgMTE1LFxuICAgICAgNTIsXG4gICAgICAxODUsXG4gICAgICAyMTEsXG4gICAgICAxNzksXG4gICAgICA1NSxcbiAgICAgIDE0MSxcbiAgICAgIDM0LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpZaVpzSEVQeVh6TElHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4QVVkcGhXN3Q1ZUE4Wk9COUx4ZXViR2NqU3pFSUp0UjNDaTM3c2hmUzAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImo4NmxOMXkvdjlEVnhkckM5aVdLbWJud1dJTEJsSDZyYWUxWnlzNHVNM21WMW1uTUtBaGRseVNadFVRWFRhWG5DcWJGQWgzclEvQVhXVGh3aEpMcURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5FcWk0SW9LQTZJZTQ2ZVFMeXhVWGN2cmZCZnZZMG5lcVd4QWZ4RWVXSlJRcGVWVXQ4b0NMemJucnhrWXcyRnI2Q1p2RTRpekE0M2kyQjh0aW5WOUFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NDMxNzE1Mjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldBTExZIEpBWSBURUNIXCIsXG4gICAgXCJsaWRcIjogXCIxNDU2OTg1OTUwNTc4NjY6NDJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ0MzE3MTUyOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzE4NTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzQyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEam90TUhmOWh0T2FqOXFKeVdyZlBLeFVRSTNoWktCL0RadXZEdEgrb1VrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0MS5qc29uIjogIntcImtleURhdGFcIjpcIkRQVWVnTWkvZzZZTUIzTFBydXZadGozL1JjZUc0eXk1cmM3K2ExdkY1aVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0Mi5qc29uIjogIntcImtleURhdGFcIjpcIk5nWmtqeXVmcEVRWnR6Z2FMYUgxWUpsZmR0WUEyNy9HOHhIQkFFNEcxY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4SDdHQU40VmJlamNadXE2Tm9kL3dZcjc1cUtYb3g2aU1YUEtZOVIzWXprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNV19LFwidGltZXN0YW1wXCI6XCIxNzE2NTQwMTgxNzUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzQ0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieWp2bUMrQkUxeE92TU03RnVkVUhlMXBkZHJkVkVPUHFmTmNaOVhXSzY2az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MTQ4NzQ3NzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuR2dJSzZ2L3NheWlEUFhEMU4rUVAwckdjQzNHZFpOVHZVRmVpMVNMeG9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0eS5qc29uIjogIntcImtleURhdGFcIjpcInlCZ1d3MXdMSVVFbHp3WVpRd0hYdG1FUmdVQjhnUFFnTTIwRDhkNGZhTE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzR6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVNyWktwZ3liV2Nya3VDMUw0aldJNmU1YzZPcnN3Tmo0dVlJa2ErVndXYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjExNDYxOTQwNVwifSIKfQ=="  // PUT your SESSION_ID 


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
