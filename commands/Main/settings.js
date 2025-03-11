module.exports = {
  name: "settings",
  info: {
    description: "Let's you manage some options of Dodo-Bot.",
    perms: ["`SendMessages`", "`ManageGuild`"]
},
  aliases: ["panel", "guildsettings", "serversettings"],
  code: `$title[Settings]
$description[Welcome to settings! Here, you can change things the bot usually operates.

To change any option, use the dropdown menu below to manage each one accordingly.
]
$addSelectMenu[1;string;settingsmenu_$authorID;Select a option;1;1;false;Auto reply:Automatically reply to pings!:autoreply:false;Include bots:Whether or not to include bots in message logs.:includebots:false;Anonymous:Hide moderator names being revealed:anonymous:false]
$color[$getVar[embedcolor]]
$thumbnail[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/yellowgear.png]
$onlyPerms[manageguild;You do not have \`ManageGuild\` permission to use this.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;settings;$authorID];$dateStamp];1000]]:R>]`
}
