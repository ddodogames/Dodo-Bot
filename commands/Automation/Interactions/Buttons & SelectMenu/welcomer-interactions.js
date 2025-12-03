module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomertoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[welcomersystem]==on];true;off;false;on]]
$setGuildVar[welcomersystem;$get[settingdecide];$guildID]
$let[welcomersystem;$advancedReplace[$getGuildVar[welcomersystem];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[welcomersystem]==on];true;Successfully enabled Welcomer!;false;Successfully disabled Welcomer!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[welcomersystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomertoggle_$authorID;Toggle;Secondary;🔄]
$addButton[welcomersettings_$authorID;Settings;Danger]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomersettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`);false;No channel set]]

$interactionReply[
$title[Welcomer Settings]
$description[Welcome to Welcomer settings! Select a option to change.
]
$addField[Current Setup;
* **Welcomer channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[welcomertype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomerchannelsetup;Channel;Secondary]
$addButton[welcomermessagecategory;Message;Secondary]
$addButton[welcomerplaceholderlist;Placeholders;Secondary]
$ephemeral
]
`
},{ // for "Return to main settings page" functionality
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomersettingshome;]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$title[Welcomer Settings]
$description[Welcome to Welcomer settings! Select a option to change.
]
$addField[Current Setup;
* **Welcomer channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[welcomertype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomerchannelsetup;Channel;Secondary]
$addButton[welcomermessagecategory;Message;Secondary]
$addButton[welcomerplaceholderlist;Placeholders;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomerchannelsetup;]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`);false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Choose a channel for Welcomer messages to be sent in. Use the select menu below for the channel to use!

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[welcomerchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[welcomersettingshome;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==welcomerchannelselectmenusetup;]

$onlyIf[$getGuildVar[welcomerchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Welcomer messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Welcomer, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[welcomerchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`);false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[welcomerchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[welcomersettingshome;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Welcomer messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomerchannelreset;]

$onlyIf[$getGuildVar[welcomerchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[welcomerchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[welcomerchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[welcomersettingshome;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomermessagecategory;]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomersettingshome;Go Back;Secondary;↩️]
$addButton[welcomermessagesetup;Set Message;Secondary]
$addButton[welcomermessagepreview;Preview Message;Secondary]
$addButton[welcomermessagetypesetting;Message Type;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomermessagesetup;]

$showModal
$if[$getGuildVar[welcomertype]==embed;
$modal[welcomerembedmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;e.g, Welcome to the server <user.username>!;$getGuildVar[welcomermessage];0;3750]
$addTextInput[embedcolorInput;Embed color to use;Short;true;e.g, #1F8B4C;$getGuildVar[welcomermessageembedcolor];0;7]
;
$modal[welcomertextmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;e.g, Welcome to the server <user.username>!;$getGuildVar[welcomermessage];0;3750]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==welcomertextmodalsetup;]
$setGuildVar[welcomermessage;$input[messageInput]]
$interactionReply[Successfully set the Welcomer message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==welcomerembedmodalsetup;]

$onlyIf[$startsWith[$input[embedcolorInput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$input[embedcolorInput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGuildVar[welcomermessageembedcolor;$input[embedcolorInput]]
$setGuildVar[welcomermessage;$input[messageInput]]
$interactionReply[Successfully set the Welcomer message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomermessagepreview;]


$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userAvatar[$clientID];false;$guildIcon]]
$let[content;$callFunction[Welcomemessage;$getGuildVar[welcomermessage]]]


$interactionReply[$if[$or[$charCount[$getGuildVar[welcomermessage]]>=2000;$getGuildVar[welcomertype]==embed];
    $author[Member joined!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[welcomermessageembedcolor]]
    ;$get[content]]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomermessagetypesetting;]


$interactionUpdate[
$title[Message Type]
$description[This setting is dedicated to embed mode for Welcomer message! Enabling this will display a simple embed for Welcomer message otherwise just text for the same message. To switch between the two types, press the "Toggle" button below!

**Note:** If the Welcomer message is over 2000 characters then embed mode will be forced enabled by default due to Discord's limits.]
$addField[Current type;
\`$toTitleCase[$getGuildVar[welcomertype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomermessagecategory;Go Back;Secondary;↩️]
$addButton[welcomermessagetypetoggle;Toggle;Secondary;🔄]
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomermessagetypetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[welcomertype]==text];true;embed;false;text]]
$setGuildVar[welcomertype;$get[settingdecide];$guildID]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[welcomertype]==embed];true;Successfully enabled embed mode!;false;Successfully enabled text mode!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
\`$toTitleCase[$getGuildVar[welcomertype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomermessagecategory;Go Back;Secondary;↩️]
$addButton[welcomermessagetypetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==welcomerplaceholderlist;]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make Welcomer messages unique! Choose a one available from this list.]
$addField[Member-related;
\`<user.username>\` - Returns the member's username
\`<user.mention>\` - Pings the member
\`<user.id>\` - Returns the member's id
\`<user.position>\` - Returns the position number of the member
\`<user.displayname>\` - Returns the member's Display name
\`<user.globalname>\` - Returns the member's global name (or username if there isn't any)
]
$addField[Server-related;
\`<owner.username>\` - Returns the server owner's username
\`<owner.id>\` - Returns the server owner's id
\`<server.name>\` - Returns the server's name
\`<server.id>\` - Returns the server's id
\`<server.createdAt>\` - Returns the server's creation date (as timestamp)
\`<server.totalMembers>\` - Returns the server's amount of members
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomersettingshome;Go Back;Secondary;↩️]
]`
}]
