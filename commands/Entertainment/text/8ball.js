module.exports = {
name: "8ball",
type: "messageCreate",
info: {
 description: "Ask a question to 8ball and it will answer it.",
 usage: "`8ball <text>`",
 perms: ["`SendMessages`", "`EmbedLinks`"]
},
code: `
$userCooldown[8ballcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[8ballcmd]];1000]]:R>]

$onlyIf[$message!=;Please provide a text.]
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters.]

$title[8ball]
$addField[Your question;$message]
$addField[Answer;$callFunction[8ballanswers]]
$attachment[./assets/8ball.png;8ball.png]
$thumbnail[attachment://8ball.png]
$color[$getGlobalVar[embedcolor]]
$footer[Feel free to ask me more questions!]
`
}
