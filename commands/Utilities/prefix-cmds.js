const config = require("../../config.js");

module.exports = [{
name: "prefix",
info: {
        description: "View and change the current prefix used in this server.",
        usage: "`prefix (new prefix)`",
        perms: ["`SendMessages`", "`ManageGuild` (when changing prefix)"]
},
type: "messageCreate",
code: `$userCooldown[prefixcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[prefixcmd]];1000]]:R>]

$onlyIf[$message!=;Prefix: \`$getGuildVar[prefix;$guildID]\`
To change the prefix: \`$getGuildVar[prefix;$guildID]prefix (new prefix)\`
]

$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;
This command requires you to have \`ManageGuild\` permission!
]

$onlyIf[$checkContains[$message;<@;<@!;<@&;<#;@;<#!]==false;Why would i do that? I don't want to disturb people! o(TヘTo)]
$onlyIf[$charCount[$message]<=5;Prefix cannot be longer than 5 characters.]

$let[newprefix;$message]
$let[oldprefix;$getGuildVar[prefix]]
Changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`!
$setGuildVar[prefix;$get[newprefix]]
`
},{
    name: "reset-prefix",
    info: {
        description: "Resets the prefix to it's default state in this server.",
        perms: ["`SendMessages`", "`ManageGuild`"]
},
    aliases: ["prefix-reset"],
    type: "messageCreate",
    code: `$userCooldown[reset-prefixcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[reset-prefixcmd]];1000]]:R>]

$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;
This command requires you to have \`ManageGuild\` permission!
]

$onlyIf[$getGuildVar[prefix]!=${config.prefix};Cannot reset when the prefix is default.]
$deleteGuildVar[prefix]
The prefix has been successfully reset. <3

`
}]
