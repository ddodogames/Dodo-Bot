module.exports = [{
    name: "$alwaysExecute",
    code: `
$get[content]
$let[content;$advancedReplaceText[$nonEscape[$getGuildVar[levelmessage]];<newlevel>;$getUserVar[level];<mention>;<@$authorID>;<username>;$username;<oldlevel>;$getUserVar[previouslevel];<Displayname>;$userDisplayName;<globalname>;$get[globalname]]]
$useChannel[$getGuildVar[levelingmessagechannel]]

$onlyIf[$hasPermsInChannel[$getGuildVar[levelingmessagechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelingmessagechannel]]==true;]
$onlyIf[$getGuildVar[levelingmessagechannel]!=none;]
$onlyIf[$getGuildVar[levelmessagefeature]==on;]

$setUserVar[xpLimit;$sum[$getUserVar[xpLimit;$authorID;$guildID];20];$authorID;$guildID]
$setUserVar[level;$sum[$getUserVar[level;$authorID;$guildID];1];$authorID;$guildID]
$setUserVar[previouslevel;$sum[$getUserVar[previouslevel;$authorID;$guildID];1];$authorID;$guildID]

$disableMentionType[roles]
$disableMentionType[everyone]
$let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
$onlyIf[$isBot==false;]
$onlyIf[$getUserVar[xp]==$getUserVar[xpLimit];]
$onlyIf[$getGuildVar[levelsystem]==on;]
`
},{
    name: "$alwaysExecute",
    code: `
$setUserVar[xp;$sum[$getUserVar[xp];1];$authorID;$guildID]
$setGuildVar[islevelingreset;no]

$onlyIf[$checkContains[$getGuildVar[levelingexcludedchannels];$channelID]==false;]
$onlyIf[$checkContains[$getGuildVar[levelingexcludedcategories];$get[channelcategory]]==false;]
$let[channelcategory;$advancedReplaceText[$checkCondition[$channelCategoryID==];true;Nothing;false;$channelCategoryID]]

$cooldown[2s;]
$onlyIf[$isBot==false;]
$onlyIf[$getGuildVar[levelsystem]==on;]`
}]
