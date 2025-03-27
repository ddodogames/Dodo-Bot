module.exports = [{
name: "suggest-set",
info: {
    description: "Setup suggestions.",
    usage: "`suggest-set <channel-name/channel ID or mention>`",
    perms: ["`SendMessages`", "`ManageChannels`"],
},
aliases: "suggestion-set",
code: `
$setGuildVar[suggestionchannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the suggestion channel!
$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$get[channeltarget]!=$getGuildVar[suggestionchannel];You already have set this channel for Suggestions. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$get[channeltarget]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified a channel, or the channel exists outside of this server. Please mention a valid channel.]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Please set an channel.
Usage: $commandInfo[suggest-set;info.usage]
]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;suggest-set;$authorID];$dateStamp];1000]]:R>]
`
},{
    name: "suggest-reset",
    info: {
        description: "Reset current channel used for suggestions.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    code: `$deleteVar[suggestionchannel;$guildID;main]
Successfully reset suggestion channel! Run \`suggest-set\` to set a channel again.
$onlyIf[$getGuildVar[suggestionchannel]!=none;There is no channel set to reset.]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;suggest-reset;$authorID];$dateStamp];1000]]:R>]`
},{
    name: "suggest",
    info: {
        description: "Starts a suggestion in this server (if the feature is setup).",
        usage: "`suggest <title/description>`",
        perms: ["`SendMessages`", "`AddReactions`"]
    },
    code: `
$author[Suggestion by $username;$userAvatar;$userURL[$authorID]]
$title[$splitText[1]]
$description[$splitText[2]]
$footer[Suggestion created since]
$addTimestamp
$color[$getVar[embedcolor]]
$addClientReactions[⬆️;⬇️]
$sendMessage[Successfully sent your suggestion to <#$getGuildVar[suggestionchannel]>!]
$useChannel[$getGuildVar[suggestionchannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[suggestionchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there.  For server staff members, please ensure that i have the following for the channel <#$getGuildVar[suggestionchannel]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[suggestionchannel]]==true;Hmm. the channel set for the Suggestion system seems to be deleted. The system will not function until a new channel is set from \`suggest-set\`.]
$onlyIf[$getGuildVar[suggestionchannel]!=none;Hmm. There is no channel used to send Suggestion currently.
For staff server, please run \`suggest-set\` to set a channel.
]
$onlyIf[$charCount[$splitText[1]]<=160||$charCount[$splitText[2]]<=3950;You can only add up to 160 characters for a title and 3950 characters for a description of the suggestion.]
$onlyIf[$or[$splitText[1]==;$splitText[2]==]==false;Hey there! Your usage seems to be wrong. Make sure it's correct

A example of usage should be something like $commandInfo[suggest;info.usage].]
$textSplit[$message;/]
$cooldown[4s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;suggest;$authorID];$dateStamp];1000]]:R>]
`
}]
