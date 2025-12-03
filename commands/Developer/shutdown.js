module.exports = {
name: "shutdown",
info: {
    description: "Returns a confirmation before shutting down the bot.",
    usage: "`shutdown (flag)`",
    perms: ["`SendMessages`"],
    dev: "true"
},
type: "messageCreate",
code: `$callFunction[Devsonly]

$if[$checkContains[$message;--now;—now]==true;
$clientDestroy;
$title[Shutdown]
$description[Do you really want to shutdown the bot? This will simply stop your bot from running. To turn on the bot, you need to go through your host to start it again.]
$attachment[./assets/dangerous-sign.png;dangerous-sign.png]
$thumbnail[attachment://dangerous-sign.png]
$color[Red]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary]
$addButton[shutdowndeny_$authorID;No;Secondary]
]
`
}
