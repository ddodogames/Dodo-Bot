module.exports = {
name: "yesorno",
type: "messageCreate",
info: {
 description: "Answers with either yes or no to your message.",
 usage: "`yesorno <text>`",
 perms: ["`SendMessages`"]
},
code: `
$userCooldown[yesornocmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[yesornocmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters.]
> $message
*$randomText[Yes;No]*
`
}
