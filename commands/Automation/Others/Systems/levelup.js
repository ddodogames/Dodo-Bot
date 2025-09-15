module.exports = [{
    name: "$alwaysExecute",
    code: `
$levelUpMessage[$getGuildVar[levelupmessage]]
$useChannel[$getGuildVar[levelupmessagechannel]]

$onlyIf[$hasPermsInChannel[$getGuildVar[levelupmessagechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelupmessagechannel]]==true;]
$onlyIf[$getGuildVar[levelupmessagechannel]!=none;]
$onlyIf[$getGuildVar[levelupmessagefeature]==on;]

$setUserVar[xpLimit;$sum[$getUserVar[xpLimit;$authorID;$guildID];20];$authorID;$guildID]
$setUserVar[level;$sum[$getUserVar[level;$authorID;$guildID];1];$authorID;$guildID]
$setUserVar[previouslevel;$sum[$getUserVar[previouslevel;$authorID;$guildID];1];$authorID;$guildID]

$disableMentionType[roles]
$disableMentionType[everyone]
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
