module.exports = {
type: "messageCreate",
code: `
$onlyIf[$getGuildVar[autoreplyping]==on;]
$onlyIf[$channelHasPerms[$channelID;$clientID;ViewChannel;SendMessages]==true;]
$If[$startsWith[$message;<@$clientID>]==true;
Hi! My Prefix is \`$getGuildVar[prefix]\` in this server!
]`
}
