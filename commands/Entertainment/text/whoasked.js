module.exports = {
name: "whoasked",
type: "messageCreate",
info: {
 description: "Searches for Askers (although mostly useless).",
 perms: ["`SendMessages`"]
},
code: `
$userCooldown[whoaskedcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[whoaskedcmd]];1000]]:R>]
$let[messageID;$sendMessage[$channelID;Searching for Askers... (0%);true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (5%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (15%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (40%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (60%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (90%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];Searching for Askers... (100%)]
$wait[5000]
$!editMessage[$channelID;$get[messageID];No Askers has been found.]

`
}
