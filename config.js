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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_00_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDczLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvVFozTEVoMGlDbXNFZnBVT2MvQ0JyN2xBcCtFSHErMkd6NnBBT1IrUFNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTbUhqUTk4VFJIR3puTHBKWXBHWVZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyNjI1NWM4LWVjMjEtNGZmMS1hMWNiLWVlMGU5OWU2MDg0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDI1MCxcbiAgICAgIDI2LFxuICAgICAgNzQsXG4gICAgICA2MixcbiAgICAgIDI0NCxcbiAgICAgIDk3LFxuICAgICAgMTcwLFxuICAgICAgMTUyLFxuICAgICAgMTEsXG4gICAgICAyMDMsXG4gICAgICAxMDgsXG4gICAgICA3MixcbiAgICAgIDMyLFxuICAgICAgNDYsXG4gICAgICAzNSxcbiAgICAgIDI2LFxuICAgICAgMzEsXG4gICAgICAyNixcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgNzAsXG4gICAgICAxODksXG4gICAgICAxMjIsXG4gICAgICAzNCxcbiAgICAgIDE1NyxcbiAgICAgIDIzOSxcbiAgICAgIDU3LFxuICAgICAgMTMzLFxuICAgICAgMTI2LFxuICAgICAgMjA3LFxuICAgICAgMjQxLFxuICAgICAgMTIxLFxuICAgICAgNzUsXG4gICAgICAxMTUsXG4gICAgICAxMzAsXG4gICAgICAxMTUsXG4gICAgICAxMzEsXG4gICAgICAyNDEsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzQ3WTZBUjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNzI5MzY1Mjo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODk1NTQ5MzM4ODM4MTo4N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjcwY3dFRU1PVmtMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN2ZjZFY2g0aStKUXdnS1Z4Y2FoQ2ZRUWE5SUlnYkQ5M1IrNUFuTkozVk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK0RCODFwUTFaY3pmSGlOalhQZ0ZYTlJ0dGJ2OVQxNVZCSG9ZcE9zS0xwdEtjdzVGUEdKM2hTbTF0L1lSZFFJSnMwdUNkQ2hOaFRSOXlKTzUwdmdqQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK3RDYi9hTkdTN2NNWVBYYkhqVmtSMVUveHJKVzdnNWU4VklhUGwzM3JuSHBWSlZDalRGTnh3UE5DQ2JvODdxeHhVMTVxL04vRlZONCtVVGlkZFNYQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI3MjkzNjUyOjg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDYwOTYwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNsNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2w0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVhORFNFTW9SSWZmRWVsUGVhYXZ3RmR6UTludm4vbCsvR2twV1B6WGtwYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0NDY4MjgyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0NjA4ODkwNTQ3XCJ9Igp9"  // PUT your SESSION_ID 


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
