module.exports = {
    name: "morse",
    info: {
        description: "Converts provided text to morse code.",
        usage: "`morse <text>`",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    code: `$userCooldown[morsecmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[morsecmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$let[status;$httpRequest[https://api.popcat.xyz/v2/texttomorse?text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to generate the result. Please try again later.]
$httpResult[message;morse]
    `
}
