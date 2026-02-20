module.exports = {
name: "8ball",
info: {
 description: "Ask a question to 8ball and it will answer it.",
 usage: "`8ball <text>`",
 perms: ["`SendMessages`", "`EmbedLinks`"]
    },
code: `
$title[8ball]
$addField[Answer;$8ballanswers]
$addField[Question;$message]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/black8ball.png]
$color[$getVar[embedcolor]]
$footer[Feel free to ask me more questions!]
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters.]
$onlyIf[$message!=;Please provide a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;8ball;$authorID];$dateStamp];1000]]:R>]
`
}
