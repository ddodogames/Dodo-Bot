module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==botinvitationmessageoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[botinvitationmessage;$advancedReplace[$getGlobalVar[botinvitationmessage];off;Disabled;on;Enabled]]

$interactionReply[
$title[Bot Invitation Message]
$description[When enabled, The bot will welcome the new servers it gets added to. By default, this is enabled in order to help the members know what's the bot's prefix is]
$addField[Current Setup;$get[botinvitationmessage]]
$color[Yellow]
$addActionRow 
$addButton[botinvitationmessagetoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==botinvitationmessagetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[botinvitationmessage]==on];true;off;false;on]]
$setGlobalVar[botinvitationmessage;$get[settingdecide]]
$let[botinvitationmessage;$advancedReplace[$getGlobalVar[botinvitationmessage];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[botinvitationmessage]==on];true;Bot will now welcome the new servers!;false;Bot will no longer welcome the new servers!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[botinvitationmessage]]
$color[Yellow]
$addActionRow 
$addButton[botinvitationmessagetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==errorloggingoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$interactionReply[
$title[Error Logging]
$description[This option is dedicated to logging errors to the channel specified in case something went wrong on the bot!]
$addField[Current Setup;
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow 
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==errorloggingtoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[errorlogging]==on];true;off;false;on]]
$setGlobalVar[errorlogging;$get[settingdecide]]
$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[errorlogging]==on];true;Errors will now be logged!;false;Errors will no longer be logged!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==errorloggingchannelselectmenusetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$onlyIf[$getGlobalVar[errorchannel]!=$selectMenuValues;
$interactionReply[This channel is already used for Error messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Error Logging, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGlobalVar[errorchannel;$selectMenuValues]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Error messages!
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==errorloggingchannelreset;]

$onlyIf[$getGlobalVar[errorchannel]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGlobalVar[errorchannel]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==embedcoloroption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionReply[
$title[Embed color]
$description[This option allows you to change the current embed color used across all the commands of the bot!

-# You can also use "random" for the bot to set a random embed color instead
]
$addField[Current Setup;$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==setnewembedcolor;]

$showModal
$modal[setembedcolormodalsetup;Set Color]
$addTextInput[embedcolorInput;Embed color to use;Short;true;#1F8B4C;$getGlobalVar[embedcolor];0;7]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==setembedcolormodalsetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]
$let[colorinput;$advancedReplace[$checkCondition[$startsWith[$input[embedcolorInput];random]==true];true;$callFunction[randomColor];false;$input[embedcolorInput]]]


$onlyIf[$startsWith[$get[colorinput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$get[colorinput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGlobalVar[embedcolor;$get[colorinput]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
]

$interactionFollowUp[Successfully set the embed color!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==resetcurrentembedcolor;]

$onlyIf[$getGlobalVar[embedcolor]!=$getGlobalVar[originalembedcolor];$interactionReply[
There's no current embed color set to reset.
$ephemeral]]

$deleteGlobalVar[embedcolor]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
]

$interactionFollowUp[Embed color has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==previewembedcolor;]

    $interactionReply[
        $title[Embed color Preview]
        $description[This is how it will appear!]
        $color[$getGlobalVar[embedcolor]]
        $footer[Pretty cool right?]
        $ephemeral
    ]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==prereleaseoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[pre_release;$advancedReplace[$getGlobalVar[pre_release];off;Disabled;on;Enabled]]

$interactionReply[
$title[Pre-release]
$description[This option let's you decide on whether or not the current build should be marked as pre-release build. By default, it is commonly enabled for development builds.

Disabling this option will cause all sorts of pre-release stuff to be absent such as the development warning on the console!]
$addField[Current Setup;$get[pre_release]]
$color[Yellow]
$addActionRow
$addButton[prereleasetoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==prereleasetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;off;false;on]]
$setGlobalVar[pre_release;$get[settingdecide]]
$let[pre_release;$advancedReplace[$getGlobalVar[pre_release];off;Disabled;on;Enabled]]

$If[$getGlobalVar[pre_release]==off;
$deleteGlobalVar[release_type]
;
$setGlobalVar[release_type;$getGlobalVar[DevReleaseTypeToSet]]
]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Pre-release mode's stuff will now appear!;false;Pre-release mode's stuff will now be absent!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[pre_release]]
$color[Yellow]
$addActionRow
$addButton[prereleasetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]


`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==startupoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$interactionReply[
$title[Startup]
$description[This option is dedicated to sending messages that the bot is ready to the channel specified!]
$addField[Current Setup;
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==startuptoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[startupsystem]==on];true;off;false;on]]
$setGlobalVar[startupsystem;$get[settingdecide]]
$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[startup]==on];true;Startup messages will now be sent!;false;Startup messages will no longer be sent!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==startupchannelselectmenusetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$onlyIf[$getGlobalVar[startupchannel]!=$selectMenuValues;
$interactionReply[This channel is already used for Startup messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Startup, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGlobalVar[startupchannel;$selectMenuValues]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Startup messages!
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==startupchannelreset;]

$onlyIf[$getGlobalVar[startupchannel]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGlobalVar[startupchannel]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==showbuildinfooption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[showbuildinfo;$advancedReplace[$getGlobalVar[showbuildinfo];off;Disabled;on;Enabled]]

$interactionReply[
$title[Show build info]
$description[When enabled, a button labeled "Build Info" will show up in \`stats\` command. By default, this is enabled for Pre-release builds besides Beta ones.

If you don't want it enabled then press the "Toggle" button to disable it (if it was enabled by default).]
$addField[Current Setup;$get[showbuildinfo]]
$color[Yellow]
$addActionRow
$addButton[showbuildinfotoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==showbuildinfotoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[showbuildinfo]==on];true;off;false;on]]
$setGlobalVar[showbuildinfo;$get[settingdecide]]
$let[showbuildinfo;$advancedReplace[$getGlobalVar[showbuildinfo];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[showbuildinfo]==on];true;Build information will now be shown!;false;Build information will no longer be shown!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[showbuildinfo]]
$color[Yellow]
$addActionRow
$addButton[showbuildinfotoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==memberrequirementoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionReply[
$title[Member requirement]
$description[This option let's you configure how many members are needed for a server so that the bot can join there.

When the requirement is not met, the bot will simply leave the server.
]
$addField[Current requirement;$getGlobalVar[servermemberrequirement]]
$color[Yellow]
$addActionRow
$addButton[setmemberrequirement;Set Requirement;Secondary]
$addButton[resetmemberrequirement;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==setmemberrequirement;]

$showModal
$modal[setmemberrequirementmodalsetup;Set Requirement]
$addTextInput[numberInput;Minimum requirement to enforce;Short;true;e.g, 50;$getGlobalVar[servermemberrequirement];0;100]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==setmemberrequirementmodalsetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]
$let[input;$callFunction[excludespecialchars;$input[numberInput]]]

$onlyIf[$isInteger[$get[input]]==true;$interactionReply[Number must not be a Integer.
$ephemeral]
]

$onlyIf[$isNumber[$get[input]]==true;$interactionReply[Please actually enter a number to proceed.
$ephemeral]
]


$setGlobalVar[servermemberrequirement;$get[input]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[servermemberrequirement]]
$color[Yellow]
$addActionRow
$addButton[setmemberrequirement;Set Requirement;Secondary]
$addButton[resetmemberrequirement;Reset;Secondary]
]

$interactionFollowUp[Successfully set the requirement!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==resetmemberrequirement;]

$onlyIf[$getGlobalVar[servermemberrequirement]!=0;$interactionReply[
The requirement is already set to \`0\`
$ephemeral]]

$deleteGlobalVar[servermemberrequirement]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[servermemberrequirement]]
$color[Yellow]
$addActionRow
$addButton[setmemberrequirement;Set Requirement;Secondary]
$addButton[resetmemberrequirement;Reset;Secondary]
]

$interactionFollowUp[Requirement has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==generatedatabasebackup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionReply[
$title[Backup Database]
$addField[Why should i backup?;In general, it is recommended to create a backup of the database to always ensure that when something bad happens, you can use your previous copy of the database to restore all the lost data!
]
$addField[Getting started;To make a quick backup, press the button "Create". A new duplicated file of your database will appear with date and time.
]
$addField[How to use it?;To use your backup, rename the file to \`forge.db\` and replace the one in \`database\` folder with the backup file! Reboot the bot and the data should be there!
]
$color[Yellow]
$addActionRow
$addButton[createdatabasebackupbutton;Create;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==createdatabasebackupbutton;]

    $copyFile[database/forge.db;backup-$month/$day/$year-$minute$second-forge.db]
    $interactionReply[Created a backup under your root directory!
    $ephemeral
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==leaveaserverbutton;]
    $onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
    $ephemeral
    ]]

    $showModal
    $modal[leaveaservermodalprompt;Leave a server]
    $addTextInput[numberInput;ID of the server to leave;Short;true;e.g, $randomGuildID;;0;100]

    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==leaveaservermodalprompt;]

    $let[input;$callFunction[excludespecialchars;$input[numberInput]]]

    $onlyIf[$isNumber[$get[input]]==true;$interactionReply[Please actually enter a number to proceed.
    $ephemeral]
    ]]

    $onlyIf[$guildExists[$get[input]]==true;$interactionReply[This server does not seem to exist. Please enter a valid one to proceed.

-# This error can also occur if the server is not cached.
    $ephemeral]
    ]]

    $onlyIf[$checkContains[$guildIDs;$get[input]]==true;$interactionReply[I am not in the server you specified.

    To see which servers i'm currently in, run \`$getGuildVar[prefix]serverlist\` to do so!
    $ephemeral
    ]]

    $interactionReply[Successfully left the server "$guildName[$get[input]]"!
    $ephemeral
    ]
    $!guildLeave[$get[input]]

    `
}]
