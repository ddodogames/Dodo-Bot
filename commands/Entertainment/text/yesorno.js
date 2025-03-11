module.exports = {
name: "yesorno",
info: {
    description: "Randomly returns either `yes` or `no`.",
    perms: ["`SendMessages`"]
},
code: `> $message
*$randomText[yes;no]*
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters]
$onlyIf[$message!=;Please Type something.]
$disableMentionType[all]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;yesorno;$authorID];$dateStamp];1000]]:R>]`
}
