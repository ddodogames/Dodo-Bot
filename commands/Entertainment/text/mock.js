module.exports = {
name: "mock",
info: {
        description: "Makes a text seem like mockery.",
        usage: "`mock <text>`",
        perms: ["`SendMessages`"]
},
type: "messageCreate",
code: `$userCooldown[mockcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[mockcmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$let[status;$httpRequest[https://api.popcat.xyz/v2/mock?text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to generate the result. Please try again later.]
$httpResult[message;text]
`
}
