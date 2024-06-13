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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_32_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImk5Ni9IV1NXT09Hb2wyWDNWQjlhY0VCeTRVN1c1Z1hod3ZCdTdCUHhkd2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NDMxNzE1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0UzM0RCREUxOEY4NkY5NEI5N0I1NjIwOTNGNDM3RTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MjgxOTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkppYTRPZS1EUWMyZkZTMXlvcTdYVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmYyNGVkOTUtODI5MS00NDBlLTljYzktYjZhZWU2YjgzZmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDE2NyxcbiAgICAgIDIxLFxuICAgICAgMTk5LFxuICAgICAgMTk0LFxuICAgICAgMixcbiAgICAgIDE0LFxuICAgICAgMTEwLFxuICAgICAgMjMyLFxuICAgICAgNTcsXG4gICAgICAxNDIsXG4gICAgICAyMjYsXG4gICAgICA1NCxcbiAgICAgIDIxNSxcbiAgICAgIDkzLFxuICAgICAgMjQzLFxuICAgICAgMTU5LFxuICAgICAgMjEzLFxuICAgICAgMjM1LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDEwMixcbiAgICAgIDE5MyxcbiAgICAgIDE2MyxcbiAgICAgIDIyMixcbiAgICAgIDEyNSxcbiAgICAgIDIzLFxuICAgICAgODMsXG4gICAgICA0MSxcbiAgICAgIDIxNSxcbiAgICAgIDkzLFxuICAgICAgMixcbiAgICAgIDE2MCxcbiAgICAgIDc5LFxuICAgICAgNDYsXG4gICAgICAyMjgsXG4gICAgICAxNTAsXG4gICAgICAzLFxuICAgICAgMjQ2LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpZaVpzSEVMek5xN01HR0IwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4QVVkcGhXN3Q1ZUE4Wk9COUx4ZXViR2NqU3pFSUp0UjNDaTM3c2hmUzAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdQVEFCcWxYRE1LckFLL2VnTFJpUXUwbldnN1YxKzYrN0h3U25CV1Q0cm8rS0tqdE12VDUwVThybFlXa3FLRnVzUlFoNUptYWMvaW9veHBwYXdUTkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjg5SThEc2tEbVBYQkpHeGwxVXduTzBpbG1qMXArMHBrNnlaRzJ4WXg5WnYvcXFBbndjclgwdTRzNTkvMkFYb2N0TG5LcEU1d1N0WkUzLzBxUGxMSUFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NDMxNzE1Mjo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldBTExZIEpBWSBURUNIXCIsXG4gICAgXCJsaWRcIjogXCIxNDU2OTg1OTUwNTc4NjY6NjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ0MzE3MTUyOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjgxOTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzVHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmYUhsZGZaZTE2Slh6b1U1K1paTmt6YUJRcTZjSE5Ebm11eFplbTl6RUpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEam90TUhmOWh0T2FqOXFKeVdyZlBLeFVRSTNoWktCL0RadXZEdEgrb1VrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0MS5qc29uIjogIntcImtleURhdGFcIjpcIkRQVWVnTWkvZzZZTUIzTFBydXZadGozL1JjZUc0eXk1cmM3K2ExdkY1aVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0Mi5qc29uIjogIntcImtleURhdGFcIjpcIk5nWmtqeXVmcEVRWnR6Z2FMYUgxWUpsZmR0WUEyNy9HOHhIQkFFNEcxY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4SDdHQU40VmJlamNadXE2Tm9kL3dZcjc1cUtYb3g2aU1YUEtZOVIzWXprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNV19LFwidGltZXN0YW1wXCI6XCIxNzE2NTQwMTgxNzUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzQ0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieWp2bUMrQkUxeE92TU03RnVkVUhlMXBkZHJkVkVPUHFmTmNaOVhXSzY2az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MTQ4NzQ3NzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyVzczUTVyd3Z0ZlNYeGZzcUQwNWlxNy9UMkRUOEpKWGxIN3UwNXZvWG5JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTTk52YmJFNGdNS1Y1ZHhzZUE3aFBKWXZZbGJLQ0dKVUlwbVVrYWhqVWZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXM2hqUmtQZU92aHVMVWVtdzhiQnlmUUpqZE4vVTNyaHBhTFdkWVhhQWNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGT1RleU5meDhRdTZkck9MUWJPZmtGek1DNnpxblRsY0Y1bFp6Q0ZkNStjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSZmdKaEVmeEF0cnpUclJ1bVR4VEZDRzQ3ejY1ekdFb0RqTjF3VUhwUndZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNF9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUp1VnU5WFcwSWtDVG1Qa0lsT1pnb1dZeS9EdllCb3h4Ti9IR29pbmJScz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6MTYsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsMiwxMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MTI3MDQxMTUxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzR4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibkdnSUs2di9zYXlpRFBYRDFOK1FQMHJHY0MzR2RaTlR2VUZlaTFTTHhvbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM1ODMwMTA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5QmdXdzF3TElVRWx6d1laUXdIWHRtRVJnVUI4Z1BRZ00yMEQ4ZDRmYUxNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0ei5qc29uIjogIntcImtleURhdGFcIjpcIjVTclpLcGd5Yldjcmt1QzFMNGpXSTZlNWM2T3Jzd05qNHVZSWthK1Z3V2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxMTQ2MTk0MDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4ZUUxekFhSy96aUZBM25tZkYvWFFUcGk1UWZKMzJvTWNCbXFVN3QrVWlRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMjcwNjk0NDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtQXU0UjVFRWU0RXE4NG9jMU9EajE5NmJsRGZtVEpQcFlEbzhQU2NmTkMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDE4LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVdWlGSzI3VXdHd0Jab3pvSmtsNUR5WHhVaC9EUFdoRGtmcVdqQ1FuRFhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZWUZ5bG1MaVNHYXo3YVh5N1VBUGpCZ1d2VVRGUE00NzJUMW8xbnJNdzJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoxOSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOb3VBc09JVFA1bDg1UnQ1MjFGOGFXTCtqK1lsVjRFenV5dkhBbmZDaVVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5a3FlbUM0YnF6RFRSZGRlOWJkelBRYmZNZWdTbE4zQ2FURU51aDNjZmhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyMixcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJNk80LzVvbjQzdHY0RW41U2RVMVZ2N3RBTzBWVjI0ZStDMUtHQTJRS2ZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyMyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNjY5ODMyODlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpL3N3UzFLUmN3YmNwMi9PTUd6d0ZqQnoxR2NVU1U0OHBQd3FKcXpiZFpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyMyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzIzMDM3NDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEdzNzNHVJYlRMbDVIbUo3SkZDek1EbFRsSWJpcS9TdGxubkdZb2pkaUJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyNCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzI5ODgzOTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFSU8xdUdNNFl3VmlPRTkyTXo1dTREZ0N2TDZZQm9UN2Z2N2ZTUFJiN0VnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyNSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVb3NQTEYvcFcrV0tlYXgvaUVGanhVTFp5dGJ0UlA3Q0cyclIyUWROYmJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyNyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxLDI3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVZGNJcWNJVlpDUm9QVUttTldudTRBUXJCS0pLU0NWdTJlRFVqcjNzd0NVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyOCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxLDI4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzg0NjE0NDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWOFNVRmduZ2hZUG5EVFBKNmRVekI2NVh5YVE5N2JreWdMdVB6NFUzSGlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzU4MzAxMDgsXCJjdXJyZW50SW5kZXhcIjoyOCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzg1OTk1NzZcIn0iCn0="  // PUT your SESSION_ID 


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
