module.exports = {
name: "ping",
info: {
    description: "Returns the bot's Latency.",
    perms: ["`SendMessages`"]
},
code: `
Pong! 🏓
$editIn[3s;Ping: $pingms
Message Ping: $messagePingms
Database Ping: $roundTenth[$databasePing;1]
Last Restart: <t:$truncate[$divide[$readyTimestamp;1000]]:f>
]
$cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;ping;$authorID];$dateStamp];1000]]:R>]`
}
