module.exports = {
  name: "avatar",
  info: {
    description: "Returns your/users profile picture.",
    usage: "`avatar (user)`",
    perms: ["`SendMessages`", "`EmbedLinks`"]
},
  aliases: ["av","userav"],
  code: `$title[$get[username]'s Avatar]
$image[$userAvatar[$get[user]]]
$color[$getVar[embedcolor]]
$addButton[1;WEBP;5;$nonEscape[$userAvatar[$get[user];4096;true;webp]];false]
$addButton[1;JPG;5;$nonEscape[$userAvatar[$get[user];4096;true;jpg]];false]
$addButton[1;PNG;5;$nonEscape[$userAvatar[$get[user];4096;true;png]];false]
$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[user;$findUser[$message[1];true]]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;avatar;$authorID];$dateStamp];1000]]:R>]
  `
}
