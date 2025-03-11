module.exports = {
name: "leave",
info: {
    description: "Setup and manage Leave feature.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
code: `$title[Leave]
$description[Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

**Current Setup**
* $get[leavesystem]
]
$color[$getVar[embedcolor]]
$addButton[1;Settings;4;leavesettings_$authorID;false]
$addButton[1;Toggle;2;toggleleave_$authorID;false;🔄]

$let[leavesystem;$advancedReplaceText[$getGuildVar[leavesystem];off;Disabled;on;Enabled]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;leave;$authorID];$dateStamp];1000]]:R>]
`
}
