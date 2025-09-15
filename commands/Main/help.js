module.exports = {
  name: "help",
  info: {
    description: "View all available commands of the bot.",
    perms: ["`SendMessages`"]
},
  code: `$title[Help Menu]
$description[To view commands, select one of the modules from the dropdown menu below!]
$footer[Made with ❤️ by $username[632607624742961153]]
$color[$getVar[embedcolor]]
$addSelectMenu[1;string;helpmenu_$authorID;Select a module;1;1;false;Main:Explore commands from Main module:main:false;Entertainment:Explore commands from Entertainment module:entertainment:false;Leveling:Explore commands from Leveling module:leveling:false;Util:Explore commands from Util module:util:false$nonEscape[$get[devmodule]]]

$let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;#SEMI#Developer#COLON#Explore commands from Developer module#COLON#dev#COLON#false;]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;help;$authorID];$dateStamp];1000]]:R>]`
}
