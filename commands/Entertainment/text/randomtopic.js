module.exports = {
name: "randomtopic",
info: {
        description: "Start a randomtopic in this server.",
        perms: ["`SendMessages`"]
},
aliases: ["topic", "newtopic"],
type: "messageCreate",
code: `$userCooldown[randomtopic-cmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[randomtopic-cmd]];1000]]:R>]
$title[Random Topic]
$description[$callFunction[randomtopic]]
$color[$getGlobalVar[embedcolor]]
$footer[Started by $username;$userAvatar]
`
}
