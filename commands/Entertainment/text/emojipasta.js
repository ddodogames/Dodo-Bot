module.exports = {
name: "emojipasta",
type: "messageCreate",
info: {
 description: "Makes 💘 text 💘📲 look like 😄 this! 👈",
 usage: "`emojipasta <text>`",
 perms: ["`SendMessages`"]
},
aliases: ["emojispam", "emojip"]
code: `
$userCooldown[emojipastacmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[emojipastacmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$let[status;$httpRequest[https://api.popcat.xyz/v2/emojipasta?text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to generate the result. Please try again later.]
$httpResult[message;text]
`
}
