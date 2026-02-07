module.exports = {
name: "would-you-rather",
info: {
        description: "Starts a game of two options to choose from.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["wyr"],
type: "messageCreate",
code: `
$userCooldown[wyrcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[wyrcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.popcat.xyz/v2/wyr;get]]
$onlyIf[$get[status]==200;Unable to fetch data for wyr. Please try again later.]

$title[Would you rather...]
$addField[**Option 1**;$httpResult[message;ops1]]
$addField[**Option 2**;$httpResult[message;ops2]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[wyr-ops1;0;Secondary;1️⃣]
$addButton[wyr-ops2;0;Secondary;2️⃣]


`
}
