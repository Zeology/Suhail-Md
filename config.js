const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348057321297";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_09_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmMm5uZXZrZVBkVFkxbUMzc3pqU0hTcUlHeDgweWlnY1JxdTk1Z2d3WkZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNTczMjEyOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYwRTdDQzZCN0U5MjM3MEJBMDAzNzE3ODc4RDExOTMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE2MzM5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3Q1Q2ck9iLVRxQ3oyTXUtN2lsaTNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjN2JjODdkLTA4ZjAtNDJhMy04Mjk3LTZhN2M2MDc3NWQzOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAzMixcbiAgICAgIDE0NSxcbiAgICAgIDE2NyxcbiAgICAgIDE5NSxcbiAgICAgIDk0LFxuICAgICAgMzksXG4gICAgICA3MSxcbiAgICAgIDE4MixcbiAgICAgIDksXG4gICAgICAxMzMsXG4gICAgICAyLFxuICAgICAgNzIsXG4gICAgICAyMTYsXG4gICAgICAzMCxcbiAgICAgIDYxLFxuICAgICAgMjEwLFxuICAgICAgMjUsXG4gICAgICA2OSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA3OSxcbiAgICAgIDYsXG4gICAgICAyOSxcbiAgICAgIDIyNixcbiAgICAgIDU5LFxuICAgICAgMTkyLFxuICAgICAgMTY1LFxuICAgICAgMTc2LFxuICAgICAgMjI3LFxuICAgICAgMjE5LFxuICAgICAgMTQ5LFxuICAgICAgMjQ1LFxuICAgICAgMTEsXG4gICAgICA5MCxcbiAgICAgIDM2LFxuICAgICAgMTU5LFxuICAgICAgMTMxLFxuICAgICAgMTQxLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYzTjc4Wk1XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU3MzIxMjk3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDaHJpc3RpYW4gQy4gRXplIFR2XCIsXG4gICAgXCJsaWRcIjogXCI3Njk5NjI4MTQwMTM3MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPbzI5QUJFTHE0bnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS2Nib1lNRGdpb21ZLzNlT3BzbklZVWpFWjNxWjJWTkYvKy9mQys3R1FEUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1YVRheHQ0UkRRMG9BQm1xdDRzZzBNY3VFaGhBcjhKY1pnbDV4ckJzaWRydE1MYXh3RzVoLzVHNXV3Wi9DWGxndTBvR01kaHBnaWxUN2dFMVA4WUhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzd0NnU2RnUVd1RERmbGlhUUZjeGtHYTMyYTUzOHd6VlRzZnZuVG9pZUpBOVdEck0vSlhwYVdVQk0rcjRJQU1Cc00ybTRTSjc2YkhYbkN3eWQ5by9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU3MzIxMjk3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNjMzOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZEcS5qc29uIjogIntcImtleURhdGFcIjpcIlRZVHZxeWFXTy9zY3RvOGNZYzBIRWtmbXI0bWZERG9ydm1EUU1LcitKczQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM3NzAzNzk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyOTI4MTkyOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
