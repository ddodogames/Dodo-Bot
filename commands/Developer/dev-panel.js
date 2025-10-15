module.exports = {
  name: "dev-panel",
  info: {
    description: "Special settings dedicated to devs. Allows the user to change stuff!",
    perms: ["`SendMessages`"],
    dev: "true"
  },
  aliases: ["developer-panel", "dev-settings", "devpanel"],
  code: `$title[Developer panel]
$description[This panel allows you to change some things the bot operates behind the scenes.
    
To change a option, use the select menu below to do so.]
$color[Yellow]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/devsettings.png]
$addSelectMenu[1;string;devmenu_$authorID;Select a option;1;1;false;Bot Invitation Message:Whether or not the bot should greet new servers.:botwelcome:false:👋;Error Logging:Send errors to specific channel.:errorlog:false:📢;Embed color:Change the current embed color used in all commands.:botembedcolor:false:🎨;Pre-release:Whether or not to enable Pre-release mode.:botdevmode:false:🚧;Startup:Choose a channel for bot's startup msgs to be sent.:botstartup:false:🚦;Show build info:Whether or not to display build info in version cmd:showbuildinfo:false:🛠️;Member requirement:How much members are required for new servers:memberrequirement:false:📋]
$addButton[2;Leave a server;2;leaveserverbutton_$authorID;false]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;dev-panel;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
  `
  }
