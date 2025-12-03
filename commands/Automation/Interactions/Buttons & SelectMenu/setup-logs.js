module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==msgdeletelog]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]

$interactionReply[
$author[Message delete;$userAvatar[$clientID]]
$title[Channel setup]
$description[To setup the logs for Message delete, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgdeletelogreset;Reset;Secondary]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==msglogdeletechannelsetup;]


$onlyIf[$getGuildVar[msglogdeletechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Message delete. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for message delete, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[msglogdeletechannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgdeletelogreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging deleted messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==msgdeletelogreset;]

$onlyIf[$getGuildVar[msglogdeletechannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[msglogdeletechannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgdeletelogreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==msgeditlog]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]

$interactionReply[
$author[Message Edit;$userAvatar[$clientID]]
$title[Channel setup]
$description[To setup the logs for Message Edit, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgeditlogreset;Reset;Secondary]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==msglogeditchannelsetup;]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[msglogeditchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Message edit. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for message edit, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[msglogeditchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgeditlogreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging edited messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==msgeditlogreset;]

$onlyIf[$getGuildVar[msglogeditchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[msglogeditchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[msgeditlogreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==memberbanlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]

$interactionReply[
$author[Ban logs;$userAvatar[$clientID]]
$title[Channel setup]
$description[To setup the logs for Ban logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberbanlogreset;Reset;Secondary]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==memberbanlogchannelsetup;]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[banlogschannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Ban logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Ban logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[banlogschannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberbanlogreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging banned users!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==memberbanlogreset;]

$onlyIf[$getGuildVar[banlogschannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[banlogschannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberbanlogreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==memberunbanlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]

$interactionReply[
$author[Un-Ban logs;$userAvatar[$clientID]]
$title[Channel setup]
$description[To setup the logs for Un-Ban logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberunbanlogreset;Reset;Secondary]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==memberunbanlogchannelsetup;]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[unbanlogschannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Un-Ban logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Un-Ban logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[unbanlogschannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberunbanlogreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging unbanned users!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==memberunbanlogreset;]

$onlyIf[$getGuildVar[unbanlogschannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[unbanlogschannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[memberunbanlogreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==integrationlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]

$interactionReply[
$author[Integration logs;$userAvatar[$clientID]]
$title[Channel setup]
$description[To setup the logs for Integration logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[integrationlogreset;Reset;Secondary]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$customID==integrationlogchannelsetup;]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[integrationlogchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Integration logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Integration logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[integrationlogchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[integrationlogreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging newly added bots!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==integrationlogreset;]

$onlyIf[$getGuildVar[integrationlogchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[integrationlogchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$clientID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[integrationlogreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
}]
