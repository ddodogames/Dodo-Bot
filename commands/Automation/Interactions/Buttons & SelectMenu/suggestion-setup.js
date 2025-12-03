module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==suggestionchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$onlyIf[$getGuildVar[suggestionchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for suggestions. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages;AddReactions]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for suggestions, i must have the following permissions for the selected channel:
\`AddReactions\`
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[suggestionchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[suggestionchannel;$guildID]!=];true;<#$getGuildVar[suggestionchannel;$guildID]> (\`$getGuildVar[suggestionchannel;$guildID]\`);false;No channel set]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[suggestionchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow 
$addButton[suggestresetbutton_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for suggestions!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==suggestresetbutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[suggestionchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[suggestionchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[suggestionchannel;$guildID]!=];true;<#$getGuildVar[suggestionchannel;$guildID]> (\`$getGuildVar[suggestionchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[suggestionchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow 
$addButton[suggestresetbutton_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
}]
