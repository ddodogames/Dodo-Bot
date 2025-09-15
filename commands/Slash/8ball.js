module.exports = {
name: "8ball",
type: "interaction",
prototype: "slash",
info: {
 description: "Ask a question to 8ball and it will answer it."
},
code: `$interactionReply[{newEmbed:{title:8ball}{field:Question:$slashOption[question]}{field:Answer:$8ballanswers}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/black8ball.png}{color:$getVar[embedcolor]}};all;true]

$onlyIf[$slashOption[question]<=200;Your question can't be longer than 200 characters.
{ephemeral}
{interaction}
]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
