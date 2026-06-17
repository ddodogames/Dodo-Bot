module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==leavetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[leavesystem]==on];true;off;false;on]]
$setGuildVar[leavesystem;$get[settingdecide];$guildID]
$let[leavesystem;$advancedReplace[$getGuildVar[leavesystem];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[leavesystem]==on];true;Successfully enabled Leave!;false;Successfully disabled Leave!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[leavesystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[leavesettings_$authorID;Settings;Danger]
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
$onlyIf[$advancedTextSplit[$customID;_;0]==leavesettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`);false;No channel set]]

$interactionReply[
$title[Leave Settings]
$description[Welcome to leave settings! Select an option to change.
]
$addField[Current Setup;
* **Leave channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[leavetype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavechannelsetup;Channel;Secondary]
$addButton[leavemessagecategory;Message;Secondary]
$addButton[leaveplaceholderlist;Placeholders;Secondary]
$ephemeral
]
`
},{ // for "Return to main settings page" functionality
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavesettingshome;]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$title[Leave Settings]
$description[Welcome to leave settings! Select an option to change.
]
$addField[Current Setup;
* **Leave channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[leavetype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavechannelsetup;Channel;Secondary]
$addButton[leavemessagecategory;Message;Secondary]
$addButton[leaveplaceholderlist;Placeholders;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavechannelsetup;]


$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`);false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Select a channel for sending leave messages. Use the select menu below to choose your preferred channel.

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[leavechannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[leavesettingshome;Go Back;Secondary;↩️]
$addButton[leavechannelreset;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==leavechannelselectmenusetup;]


$onlyIf[$getGuildVar[leavechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for leave messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for leave messages, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[leavechannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`);false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[leavechannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[leavesettingshome;Go Back;Secondary;↩️]
$addButton[leavechannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for leave messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavechannelreset;]


$onlyIf[$getGuildVar[leavechannel;$guildID]!=;$interactionReply[
There's no channel currently set to reset.
$ephemeral]]

$deleteGuildVar[leavechannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[leavechannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[leavesettingshome;Go Back;Secondary;↩️]
$addButton[leavechannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavemessagecategory;]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavesettingshome;Go Back;Secondary;↩️]
$addButton[leavemessagesetup;Set Message;Secondary]
$addButton[leavemessagepreview;Preview Message;Secondary]
$addButton[leavemessagetypesetting;Message type;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavemessagesetup;]


$showModal
$if[$getGuildVar[leavetype]==embed;
$modal[leaveembedmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;e.g. Goodbye, <user.username>!;$getGuildVar[leavemessage];0;3750]
$addTextInput[embedcolorInput;Embed color to use;Short;true;e.g. #1F8B4C;$getGuildVar[leavemessageembedcolor];0;7]
;
$modal[leavetextmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;e.g. Goodbye, <user.username>!;$getGuildVar[leavemessage];0;3750]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==leavetextmodalsetup;]
$setGuildVar[leavemessage;$input[messageInput]]
$interactionReply[Successfully set the Leave message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==leaveembedmodalsetup;]

$onlyIf[$startsWith[$input[embedcolorInput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$input[embedcolorInput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGuildVar[leavemessageembedcolor;$input[embedcolorInput]]
$setGuildVar[leavemessage;$input[messageInput]]
$interactionReply[Successfully set the Leave message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavemessagepreview;]

$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userAvatar[$clientID];false;$guildIcon]]
$let[content;$callFunction[Leavemessage;$getGuildVar[leavemessage]]]

$interactionReply[$if[$or[$charCount[$getGuildVar[leavemessage]]>=2000;$getGuildVar[leavetype]==embed]==true;
    $author[Member left!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[leavemessageembedcolor]]
    ;$get[content]]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavemessagetypesetting;]


$interactionUpdate[
$title[Message type]
$description[This option is for enabling embed mode for the leave message. When enabled, a simple embed will appear for the leave message. If not, then the message will simply appear as plain text. To switch between the types, press the "Toggle" button below!

**Note:** If the leave message is over 2000 characters, then embed mode will always be used by default due to Discord's limits.]
$addField[Current type;
\`$toTitleCase[$getGuildVar[leavetype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavemessagecategory;Go Back;Secondary;↩️]
$addButton[leavemessagetypetoggle;Toggle;Secondary;🔄]
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==leavemessagetypetoggle;]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[leavetype]==text];true;embed;false;text]]
$setGuildVar[leavetype;$get[settingdecide];$guildID]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[leavetype]==embed];true;Successfully enabled embed mode!;false;Successfully enabled text mode!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
\`$toTitleCase[$getGuildVar[leavetype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavemessagecategory;Go Back;Secondary;↩️]
$addButton[leavemessagetypetoggle;Toggle;Secondary;🔄]
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
$onlyIf[$customID==leaveplaceholderlist;]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make the leave message unique! Below are the available options you can use.]
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
$addButton[leavesettingshome;Go Back;Secondary;↩️]
]`
}]
