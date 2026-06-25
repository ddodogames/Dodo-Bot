module.exports = {
    name: "translate",
    info: {
        description: "Translate a message to English.",
        usage: "`translate <text>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    type: "messageCreate",
    code: `$userCooldown[translatecmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[translatecmd]];1000]]:R>]


$onlyIf[$message!=;Please type a text you want to translate to English.]
$let[status;$httpRequest[https://api.popcat.xyz/v2/translate?to=en&text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to translate. The reasons are either:
1. I am unable to get the translated output. Please try again later.
2. The language you want to translate the text to is not supported.
]

$title[Translation]
$addField[Input;$codeBlock[$message]]
$addField[Output;$codeBlock[$httpResult[message;translated]]]
$color[$getGlobalVar[embedcolor]]
$footer[$username;$userAvatar]

`
}
