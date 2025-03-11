module.exports = {
name: "$alwaysExecute",
code: `Hello! My Prefix in this server is \`$getGuildVar[prefix]\`.
$cooldown[2s;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$stringStartsWith[$message;<@$clientID>;<@!$clientID>]==true;]
$onlyIf[$getGuildVar[autopingreply]==on;]
`
}
