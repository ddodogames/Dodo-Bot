module.exports = {
name: "update",
info: {
    description: "Restarts commands to latest changes.",
    perms: ["`SendMessages`", "`EmbedLinks`"],
    dev: "true"
},
aliases: ["restartcmds", "reloadcmds", "reload"],
type: "messageCreate",
code: `$callFunction[Devsonly]
$updateCommands

$let[total;$sum[$commandCount[messageCreate];$commandCount[interactionCreate]]]
$title[Reloaded!]
$addField[**Commands**;
* **Prefix**: $commandCount[messageCreate]
* **Interactions**: $commandCount[interactionCreate]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[veryuselesscustomid;Total: $get[total];Secondary;;true]
`
}
