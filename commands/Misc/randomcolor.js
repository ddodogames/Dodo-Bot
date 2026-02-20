module.exports = {
name: "randomcolor",
info: {
    description: "Returns a random color that you can use.",
    perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["randomhex", "randomrgb"],
code: `$author[Random Color;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/paintlarger.png]
$title[There you go!]
$addField[**RGB code**;$getObjectProperty[api;message.rgb]]
$addField[**Hex code**;$getObjectProperty[api;message.hex]]
$color[$getObjectProperty[api;message.hex]]
$thumbnail[$getObjectProperty[api;message.color_image]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/color/$randomColor;GET;;;$get[error]]]
$let[error;Unable to generate a random color. Please try again later.]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;randomcolor;$authorID];$dateStamp];1000]]:R>]
`
}
