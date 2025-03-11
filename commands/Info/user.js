module.exports = {
name: "user",
info: {
    description: "Returns your/user's information.",
    perms: ["`SendMessages`"]
},
$if: "old",
aliases: ["userinfo", "user-info"],
code: `$title[Information for $get[username];$userURL[$get[user]]]
$addField[**Other**;
* **Avatar:** [link]($userAvatar[$get[user]])
* **DMs:** $get[userdms]
;true]
$addField[**General**;
* **Joined Discord on:** <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:f>
* **Bot account:** $get[botchecker]
* **ID:** $get[user]
;true]
$color[$getVar[embedcolor]]
$thumbnail[$userAvatar[$get[user]]]
$if[$memberExists[$findUser[$message[1;true]];$guildID]==true]
$addButton[1;Member's Server info;2;memberservinfo_$authorID_$get[user];false]
$addButton[1;General info;2;mainmeminfo_$authorID_$get[user];true]
$endif

$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[botchecker;$advancedReplaceText[$checkCondition[$isBot[$get[user]]==true];true;Yes;false;No]]
$let[userdms;$advancedReplaceText[$checkCondition[$isUserDmEnabled[$get[user]]==true];true;Enabled;false;Disabled]]
$let[user;$findUser[$message[1];true]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;user;$authorID];$dateStamp];1000]]:R>]
`
}
