module.exports = {
  name: "avatar",
  info: {
    description: "Returns your/users profile picture.",
    perms: ["`SendMessages`"]
},
  aliases: ["av","userav"],
  code: `$title[$get[username]'s Avatar]
$image[$userAvatar[$get[user]]]
$color[$getVar[embedcolor]]
$addButton[1;Download;5;$nonEscape[$userAvatar[$get[user]]];false]
$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[user;$findUser[$message[1];true]]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;avatar;$authorID];$dateStamp];1000]]:R>]
  `
}
