module.exports = {
name: "leveling",
type: "messageCreate",
info: {
    description: "Setup and manage Leveling feature.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
code: `
$userCooldown[levelingcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[levelingcmd]];1000]]:R>]
$let[levelingsystem;$advancedReplace[$getGuildVar[levelingsystem];on;Enabled;off;Disabled]]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Leveling]
$description[Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.]
$addField[Current Setup;$get[levelingsystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingtoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingsettings_$authorID;Settings;Danger]
`
}

