module.exports = {
    name: "wipedb",
    info: {
        description: "Let's you delete the current entire database of the bot including cooldowns.",
        perms: ["`SendMessages`", "`EmbedLinks` (if `--now` flag isn't specified)"],
        dev: "true"
    },
    aliases: ["cleardb", "destroydb", "deletedb"],
    type: "messageCreate",
    code: `$callFunction[botDevsOnly]

$if[$checkContains[$message;--now;—now]==true
$wipeDB
Done!
;
$title[Delete database]
$description[Are you sure you want to reset the database? This action cannot be undone once you do so.]
$attachment[./assets/dangerous-sign.png;dangerous-sign.png]
$thumbnail[attachment://dangerous-sign.png]
$color[Red]
$addActionRow
$addButton[wipedbconfirm_$authorID;Yes;Secondary]
$addButton[wipedbdeny_$authorID;No;Secondary]
]
    `
}
