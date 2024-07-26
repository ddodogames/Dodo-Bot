module.exports = {
name: "shutdown",
info: {
    description: "Returns a confirmation before shutting down the bot.",
    perms: ["`SendMessages`"],
    dev: "true"
},
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$attachment[./handler/assets/warningsign.png;warningsign.png]

$title[Shutting down]
$description[Do you really want to shutdown the bot? This will simply stop your bot from responding. To turn on the bot, you need to go through your host to start it once again.]
$thumbnail[attachment://warningsign.png]
$color[Red]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary]
$addButton[shutdowndeny_$authorID;No;Secondary]
`
}