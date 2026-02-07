module.exports = {
name: "leave",
type: "messageCreate",
info: {
    description: "Setup and manage Leave feature.",
    perms: ["`SendMessages`", "`EmbedLinks`", "`ManageChannels`"]
},
aliases: ["leaver"],
code: `$userCooldown[leavecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[leavecmd]];1000]]:R>]
$let[leavesystem;$advancedReplace[$getGuildVar[leavesystem];on;Enabled;off;Disabled]]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Leave]
$description[Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.]
$addField[Current Setup;$get[leavesystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[leavesettings_$authorID;Settings;Danger]
`
}
