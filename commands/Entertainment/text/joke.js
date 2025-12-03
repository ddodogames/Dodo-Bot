module.exports = {
name: "joke",
info: {
        description: "Returns random jokes.",
        perms: ["`SendMessages`"]
},
type: "messageCreate",
aliases: ["jokes"],
code: `$userCooldown[jokecmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[jokecmd]];1000]]:R>]
$let[status;$httpRequest[https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode;get]]
$onlyIf[$get[status]==200;Unable to fetch data for jokes. Please try again later.]
$if[$httpResult[joke]==;
Setup: $httpResult[setup]
Delivery: $httpResult[delivery]
;
$httpResult[joke]
]
`
}
