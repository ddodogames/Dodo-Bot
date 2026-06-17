module.exports = {
name: "leveling",
type: "messageCreate",
info: {
    description: "Setup and manage Leveling feature.",
    perms: ["`SendMessages`", "`EmbedLinks`", "`ManageChannels`"]
},
code: `
$userCooldown[levelingcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[levelingcmd]];1000]]:R>]
$let[levelingsystem;$advancedReplace[$getGuildVar[levelingsystem];on;Enabled;off;Disabled]]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Leveling]
$description[Leveling is a feature that allows server members to earn levels through XP based on their activity within the server.

To begin, press the "Toggle" button to enable/disable it! To adjust the settings for this feature, press the "Settings" button.]
$addField[Current Setup;$get[levelingsystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingtoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingsettings_$authorID;Settings;Danger]
`
}

