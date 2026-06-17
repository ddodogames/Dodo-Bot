module.exports = {
name: "avatar",
info: {
        description: "Returns your/users profile picture.",
        usage: "`avatar (user)`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
aliases: ["av", "useravatar", "pfp"],
disableConsoleErrors: true,
code: `$userCooldown[avatarcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[avatarcmd]];1000]]:R>]

$let[user;$findUser[$message;true]]
$let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]];false;$username[$get[user]]]]

$title[$get[username]'s avatar]
$image[$userAvatar[$get[user];2048;png]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[$userAvatar[$get[user];2048;png];PNG;Link]
$addButton[$userAvatar[$get[user];2048;jpg];JPG;Link]
$addButton[$userAvatar[$get[user];2048;webp];WEBP;Link]

`
}
