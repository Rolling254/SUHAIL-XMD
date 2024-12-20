const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_32_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1yTmpwMDA3L0VoWU51MUN3dmdobEs0aEJQdTliVnB0TlZVc2duaVlMQUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZzQThpM200UkhXRFpsVU94bkR0Z0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTVhZGNiNTMtYTkxOS00ZGRjLThhMGEtMjIwNWIxZmQ3ODk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDc0LFxuICAgICAgMTQyLFxuICAgICAgMTUwLFxuICAgICAgNjMsXG4gICAgICAxMjMsXG4gICAgICAxMzcsXG4gICAgICA4MCxcbiAgICAgIDQxLFxuICAgICAgMTQwLFxuICAgICAgMTg3LFxuICAgICAgOTgsXG4gICAgICA1MixcbiAgICAgIDIwNCxcbiAgICAgIDIxNCxcbiAgICAgIDIsXG4gICAgICA4MyxcbiAgICAgIDExNyxcbiAgICAgIDIxMyxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxMixcbiAgICAgIDIwOSxcbiAgICAgIDE2NCxcbiAgICAgIDM4LFxuICAgICAgMjA3LFxuICAgICAgNjgsXG4gICAgICAyMzMsXG4gICAgICAxNzUsXG4gICAgICAxMDEsXG4gICAgICAxMzcsXG4gICAgICA3MyxcbiAgICAgIDQ0LFxuICAgICAgMTA2LFxuICAgICAgODAsXG4gICAgICAxMjIsXG4gICAgICAxMzUsXG4gICAgICAxNDcsXG4gICAgICAxNjEsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZYQVZLVlBYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjcyOTM2NTI6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5NTU0OTMzODgzODE6OTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUQ3MGN3RUVMck5rYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdmY2RWNoNGkrSlF3Z0tWeGNhaENmUVFhOUlJZ2JEOTNSKzVBbk5KM1ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhnMVd1cjRUYWZOVTNFcFBXRmFNanJFK3FkZ21tVlNxMFVjb3lGdHdraW8zTVFESlJadGU4MVhHVjY3L2p4ZHBwUFVlNzJwZ0xPWHJvV0J1ZFBtYUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkN0NjF3U1pSN1I4Z1VmUkk4Q3BjbHhEcHhmMVN0TjNNcE95VGdVN1JRbXlIK040ZzR1UjlrQWY4bmwza2dvSFltaHdpT25RVkx2eHVXTC8zRWVLWWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1Mjo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2MzMxNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRMC5qc29uIjogIntcImtleURhdGFcIjpcInFvYWs2UHJvNUF0T2RzNUF1VFZ2Z0V3SFczM0ZPVUFqQ1NOajkvYWNiTmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
