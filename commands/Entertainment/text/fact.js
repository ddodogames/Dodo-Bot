module.exports = {
name: "fact",
info: {
        description: "Returns random facts.",
        perms: ["`SendMessages`"]
},
type: "messageCreate",
code: `$userCooldown[factcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[factcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.popcat.xyz/v2/fact;get]]
$onlyIf[$get[status]==200;Unable to fetch data for fact. Please try again later.]
$httpResult[message;fact]
`
}
