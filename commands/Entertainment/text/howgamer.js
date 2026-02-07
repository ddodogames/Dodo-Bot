module.exports = {
name: "howgamer",
info: {
        description: "Rates a user on how Gamer they're from 0 to 100 percent.",
        usage: "`howgamer (user)`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
code: `$userCooldown[howgamercmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[howgamercmd]];1000]]:R>]
$let[user;$advancedReplace[$checkCondition[$findUser[$message;true]==$authorID];true;You're;false;$username[$findUser[$message;true]] is]]
$title[HowGamer machine]
$description[$get[user] $randomNumber[0;100]% Gamer! ]
$color[Random]`
}
