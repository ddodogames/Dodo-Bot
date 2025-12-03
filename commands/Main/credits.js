module.exports = {
    name: "credits",
    info: {
        description: "Returns people who're credited in the bot.",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    code: `$userCooldown[creditscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[creditscmd]];1000]]:R>]
$title[Dodo-Bot Credits]
$description[
* $username[632607624742961153] - Developer of the bot
* $username[431749535656837130] - Inspiration to improve some commands
* $username[769525910164471821] - For some ideas
* BotForge server - For a lot of help
* $hyperlink[discotools.xyz;https://discotools.xyz/icons-editor] - For most of the icons used in commands
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Main Credits;Secondary;;true]
$addButton[packages_$authorID;Packages;Secondary]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary]
`
}
