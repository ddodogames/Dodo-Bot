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
$description[This option lets the bot respond to pings. Doing so will return the current prefix set in this server.

It is recommended to disable this option if it's used for spamming.]
$addField[Current Setup;$get[autoreplyping]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
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
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
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
$description[This option allows you to hide the moderator name in ban logs! This feature can be useful to avoid harassment for server staff.

To prevent potential abuse, this option is only exclusive to ban logs!]
$addField[Current Setup;$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
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

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[anonymous]==on];true;The executor's name will now be hidden!;false;The executor's name will no longer be hidden!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
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
$description[This option allows you to decide on whether or not bots will be included in message logs.

Disabling this will result in bots being excluded from the aforementioned logs.]
$addField[Current Setup;$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
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

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[includebots]==on];true;Bots will now be included in message logs!;false;Bots will no longer be included in message logs!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsmenu_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to pings!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in message logs;includebotsoption;;false]
$addOption[Anonymous;Hide moderator name in ban logs;anonymousoption;;false]
$addActionRow
$addButton[includebotstoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
}]
