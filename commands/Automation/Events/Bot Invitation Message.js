module.exports = [{
    name: "Bot Invitation Message",
    type: "guildJoin",
    channel: "$randomChannelID[$guildID;all]",
    code: `
    $ifAwaited[$membersCount[$guildID;all;true]>=$getVar[servermemberrequirement];{execute:invitationgreeting};{execute:failedmemberrequirement}]

    `
    },{
    name: "invitationgreeting",
    type: "awaited",
    code: `
$title[Welcome to Dodo-Bot!]
$description[Dodo-Bot is a personal bot project made in aoi.js v6 aiming to both entertain and provide users some features to use.]
$addField[Confused?;If you need information about commands in the bot then use the command \`$getGuildVar[prefix]commandinfo <cmdname>\` to do so!]
$addField[Getting started;To explore the bot, use the command \`$getGuildVar[prefix]help\`. This let's you view all of the commands of the bot in a selectmenu as modules!]
$thumbnail[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/dodo-bot-logo.png]
$footer[Made with ❤️ by $username[632607624742961153]!]
$color[$getVar[embedcolor]]
$addButton[1;Source code;5;https://github.com/ddodogames/Dodo-Bot;false]

$useChannel[$get[channelselector]]
$onlyIf[$hasPermsInChannel[$get[channelselector];$clientID;sendmessages;viewchannel]==true;]
$let[channelselector;$advancedReplaceText[$checkCondition[$guildSystemChannelID[$guildID]==];true;$randomChannelID[$guildID;Text];false;$guildSystemChannelID[$guildID]]]
$onlyIf[$getVar[botinvitationmessage]==on;]`
    },{
    name: "failedmemberrequirement",
    type: "awaited",
    code: `$let[hidetext;$clientLeave[$guildID]]`
    }]
