module.exports = {
name: "randomcolor",
info: {
    description: "Returns a random color that you can use.",
    perms: ["`SendMessages`"]
},
aliases: ["randomhex", "randomrgb"],
code: `$author[Random Color;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/paintlarger.png]
$title[There you go!]
$addField[**RGB code**;$getObjectProperty[api;rgb]]
$addField[**Hex code**;$getObjectProperty[api;hex]]
$color[$getObjectProperty[api;hex]]
$thumbnail[$getObjectProperty[api;color_image]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for randomcolor. Please, try again later.]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/color/$randomColor;GET;;;dead]]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;randomcolor;$authorID];$dateStamp];1000]]:R>]
`
}
