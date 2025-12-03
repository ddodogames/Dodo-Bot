module.exports = {
    name: "settings",
    info: {
        description: "Manage server settings in Dodo-Bot.",
        perms: ["`SendMessages`", "`ManageGuild`"],
    },
    aliases: ["panel", "serversettings", "guildsettings"],
    type: "messageCreate",
    code: `$userCooldown[settingscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[settingscmd]];1000]]:R>]

$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;
This command requires you to have \`ManageGuild\` permission!
]

$title[Settings]
$description[Welcome to Settings! Select a option to change using the dropdown menu below!]
$attachment[./assets/gear.png;settings.png]
$thumbnail[attachment://settings.png]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
`
}
