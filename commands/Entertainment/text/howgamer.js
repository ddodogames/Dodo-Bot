module.exports = {
name: "howgamer",
info: {
    description: "Check on how much gamer you're or the user mentioned.",
    usage: "`howgamer (user)`",
    perms: ["`SendMessages`", "`EmbedLinks`"]
},
code: `$title[HowGamer machine]
$description[$get[target] $random[0;100]% Gamer]
$color[#$randomColor]
$let[target;$advancedReplaceText[$checkCondition[$mentioned[1;true]==$authorID];true;You're;false;$username[$mentioned[1;true]] is]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;howgamer;$authorID];$dateStamp];1000]]:R>]
`
}
