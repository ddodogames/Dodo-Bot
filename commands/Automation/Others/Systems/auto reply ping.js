module.exports = {
type: "messageCreate",
code: `
$onlyIf[$getGuildVar[autoreplyping]==on;]
$onlyIf[$channelHasPerms[$channelID;$clientID;ViewChannel;SendMessages]==true;]
$if[$startsWith[$message;<@$clientID>]==true;
Hi! My prefix is \`$getGuildVar[prefix]\` in this server!
]`
}
