module.exports = {
name: "leveling",
info: {
    description: "Setup and manage Leveling feature.",
    perms: ["`SendMessages`", "`EmbedLinks`", "`ManageChannels`"],
},
code: `
$title[Leveling]
$description[Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

**Current Setup**
* $get[levelingsystem]
]
$color[$getVar[embedcolor]]
$addButton[1;Settings;1;levelingsettings_$authorID;false]
$addButton[1;Toggle;2;toggleleveling_$authorID;false;🔄]

$let[levelingsystem;$advancedReplaceText[$getGuildVar[levelsystem];off;Disabled;on;Enabled]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;leveling;$authorID];$dateStamp];1000]]:R>]
`
}
