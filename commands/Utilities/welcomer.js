module.exports = {
name: "welcomer",
type: "messageCreate",
info: {
    description: "Setup and manage Welcomer feature.",
    perms: ["`SendMessages`", "`EmbedLinks`", "`ManageChannels`"]
},
aliases: ["welcome"],
code: `$userCooldown[welcomercmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[welcomercmd]];1000]]:R>]
$let[welcomersystem;$advancedReplace[$getGuildVar[welcomersystem];on;Enabled;off;Disabled]]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Welcomer]
$description[Welcomer is a way to greet new members of your server with your own choice of the message you're going to use it for the server!

To begin, press the "Toggle" button to enable/disable it! To adjust the settings for this feature, press the "Settings" button.]
$addField[Current Setup;$get[welcomersystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomertoggle_$authorID;Toggle;Secondary;🔄]
$addButton[welcomersettings_$authorID;Settings;Danger]
`
}
