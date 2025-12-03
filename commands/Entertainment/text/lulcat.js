module.exports = {
name: "lulcat",
info: {
        description: "Makes your text look cursed using lul cat language.",
        usage: "`lulcat <text>`",
        perms: ["`SendMessages`"]
},
type: "messageCreate",
aliases: ["lolcat"],
code: `$userCooldown[lulcatcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[lulcatcmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$let[status;$httpRequest[https://api.popcat.xyz/v2/lulcat?text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to generate the result. Please try again later.]
$httpResult[text]
`
}
