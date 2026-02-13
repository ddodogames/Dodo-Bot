module.exports = {
name: "randomcolor",
info: {
        description: "Returns Random Colors that you can use.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
aliases: ["randomhex", "randomrgb"],
code: `$userCooldown[randomcolorcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[randomcolorcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.popcat.xyz/v2/color/$callFunction[randomColor];get]]
$onlyIf[$get[status]==200;Unable to fetch data for a random color. Please, try again later.]

$attachment[./assets/paint.png;paint.png]
$author[Random Color;attachment://paint.png]
$title[There you go!]
$addField[**Hex code**;$httpResult[message;hex]]
$addField[**Number**;$hexToInt[$httpResult[message;hex]]]
$addField[**RGB**;$httpResult[message;rgb]]
$thumbnail[$httpResult[message;color_image]]
$color[$httpResult[message;hex]]
`
}
