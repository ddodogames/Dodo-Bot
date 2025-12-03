module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==settingsmenu;$selectMenuValues==autoreplypingoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[autoreplyping;$advancedReplace[$getGuildVar[autoreplyping];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[AutoReply ping]
$description[This option let's the bot respond by just pinging. Doing so will return the current prefix set in this server.

It is recommended to disable this if it's used for spamming.]
$addField[Current Setup;$get[autoreplyping]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[autoreplypingtoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==autoreplypingtoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[autoreplyping]==on];true;off;false;on]]
$setGuildVar[autoreplyping;$get[settingdecide];$guildID]
$let[autoreplyping;$advancedReplace[$getGuildVar[autoreplyping];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[autoreplyping]==on];true;Successfully enabled AutoReply ping!;false;Successfully disabled AutoReply ping!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[autoreplyping]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[autoreplypingtoggle_$authorID;Toggle;Secondary;🔄]
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
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==settingsmenu;$selectMenuValues==anonymousoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[anonymous;$advancedReplace[$getGuildVar[anonymous];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[Anonymous]
$description[This option allows you to hide the Moderator name in Ban logs! This can be useful to avoid harassment for server staff.

Due to security reasons, this option is only exclusive to Ban logs!]
$addField[Current Setup;$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[anonymoustoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==anonymoustoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[anonymous]==on];true;off;false;on]]
$setGuildVar[anonymous;$get[settingdecide];$guildID]
$let[anonymous;$advancedReplace[$getGuildVar[anonymous];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[anonymous]==on];true;Moderator names will now be hidden!;false;Moderator names will no longer be shown!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[anonymoustoggle_$authorID;Toggle;Secondary;🔄]
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
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==settingsmenu;$selectMenuValues==includebotsoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[includebots;$advancedReplace[$getGuildVar[includebots];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[Include Bots]
$description[This option allows you to decide on whether or not bots will be included in Message Logs.

Disabling this will cause bots to be ignored.]
$addField[Current Setup;$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includebotstoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==includebotstoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[includebots]==on];true;off;false;on]]
$setGuildVar[includebots;$get[settingdecide];$guildID]
$let[includebots;$advancedReplace[$getGuildVar[includebots];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[includebots]==on];true;Bots will now be included in Message Logs!;false;Bots will no longer be included in Message Logs!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includebotstoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
}]
