module.exports = [{
type: "messageCreate",
code: `
$onlyIf[$getGuildVar[levelingsystem]==on;]

$let[memberroles;$advancedReplace[$checkCondition[$memberRoles==];true;Nothing;false;$memberRoles]]
$let[channelcategory;$advancedReplace[$checkCondition[$channelCategoryID==];true;Nothing;false;$channelCategoryID]]
$onlyIf[$checkContains[$getGuildVar[levelingexcludedchannels];$channelID]==false;]
$onlyIf[$checkContains[$getGuildVar[levelingexcludedcategories];$get[channelcategory]]==false;]
$onlyIf[$checkContains[$get[memberroles];$getGuildVar[levelingexcludedroles]]==false;]

$memberCooldown[autoxpgain;2s]
$setMemberVar[xp;$sum[$getMemberVar[xp;$authorID];1];$authorID]

`
},{
type: "messageCreate",
code: `
$disableEveryoneMention
$disableRoleMentions

$onlyIf[$getGuildVar[levelingsystem]==on;]
$onlyIf[$getMemberVar[xp]==$getMemberVar[xpLimit];]
$setMemberVar[xpLimit;$sum[$getMemberVar[xpLimit;$authorID];20];$authorID]
$setMemberVar[level;$sum[$getMemberVar[level;$authorID];1];$authorID]
$setMemberVar[previouslevel;$sum[$getMemberVar[previouslevel;$authorID];1];$authorID]

$onlyIf[$getGuildVar[levelingmessagefeature]==on;]
$onlyIf[$getGuildVar[levelupmessagechannel]!=;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelupmessagechannel]]==true;]
$onlyIf[$channelHasPerms[$getGuildVar[levelupmessagechannel];$clientID;ViewChannel;SendMessages]==true;]



$sendMessage[$getGuildVar[levelupmessagechannel];
$callFunction[Levelingmessage;$getGuildVar[levelingmessage]]
]



`
}]
