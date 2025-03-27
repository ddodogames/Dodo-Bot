module.exports = {
  name: "invite",
  info: {
    description: "Returns a link to invite the bot.",
    perms: ["`SendMessages`"]
},
  $if: "old",
  code: `$title[invite Dodo-Bot]
$description[To invite the bot into a server, press the button below.]
$color[$getVar[embedcolor]]
$if[$getVar[userapps]==true]
$footer[Or add the bot to your account by pressing the second button]
$addButton[1;Add me to your account;5;https://discord.com/oauth2/authorize?client_id=$clientID&integration_type=1&scope=applications.commands;false]
$endif
$addButton[1;Invite;5;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]];false]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;invite;$authorID];$dateStamp];1000]]:R>]
  `
}
