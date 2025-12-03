module.exports = [{
name: "Bot Invitation Message",
type: "guildCreate",
code: `$onlyIf[$getGlobalVar[botinvitationmessage]==on;]
$let[channelselector;$advancedReplace[$checkCondition[$guildSystemChannelID[$newGuild[id]]==];true;$randomGuildChannelID[$newGuild[id];GuildText];false;$guildSystemChannelID[$newGuild[id]]]]
$onlyIf[$channelHasPerms[$get[channelselector];$clientID;ViewChannel;SendMessages]==true;]

$if[$guildMemberCount>=$getGlobalVar[servermemberrequirement];$sendMessage[$get[channelselector]
$title[Welcome to Dodo-Bot!]
$description[Dodo-Bot is a personal bot project made in ForgeScript aiming to both entertain and provide users some features to use.]
$addField[Getting started;To explore the bot, use the command \`$getGuildVar[prefix]help\`. This let's you view all of the commands of the bot in a selectmenu as modules!]
$addField[Confused?;If you need information about some commands in the bot then use the command \`$getGuildVar[prefix]commandinfo <cmdname>\` to do so!]
$attachment[./assets/dodo-bot-logo.png;dodobot-logo.png]
$thumbnail[attachment://dodobot-logo.png]
$footer[Made with ❤️ by $username[632607624742961153]!]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot;Source code;Link]
]
;$!guildLeave]
`
}]
