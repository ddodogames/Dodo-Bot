module.exports = {
name: "perms",
info: {
        description: "Returns the permissions the bot needs.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
type: "messageCreate",
code: `$userCooldown[permscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[permscmd]];1000]]:R>]

$title[Permissions]
$description[Confused on what perms the bot should have? This list should help you decide the right permissions for the bot!

For safety reasons, do not give the bot administrator permission under any circumstances.
]
$addField[\`ViewChannel\`;Required so the bot can read the user's messages executing it's command.]
$addField[\`SendMessages\`;The most basic permission needed.]
$addField[\`AttachFiles\`;Required for image commands such as \`gun\`.]
$addField[\`EmbedLinks\`;Required for commands that show embeds (basically the majority of them).]
$addField[\`AddReactions\`;Required for \`suggest\` and \`poll\` command.]
$addField[\`ViewAuditLog\`;Required for logs such as moderation and Integration.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[whynoadminperm_$authorID;Why this exists?;Secondary;❓;false]

`
}

