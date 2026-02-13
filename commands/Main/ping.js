module.exports = {
name: "ping",
info: {
        description: "Returns the bot's Latency",
        perms: ["`SendMessages`"]
},
type: "messageCreate",
code: `$userCooldown[pingcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[pingcmd]];1000]]:R>]

$let[restart;<t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>]
$let[messageID;$sendMessage[$channelID;Pong! 🏓;true]]
$wait[3000]
$!editMessage[$channelID;$get[messageID];
Ping: $pingms
Last restart: $get[restart]
]
`
}
