module.exports = [{
name: "poll-set",
info: {
    description: "Setup polls.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: ["set-poll", "setpoll", "pollset"],
code: `
$setGuildVar[pollchannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the Poll channel!

$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$get[channeltarget]!=$getGuildVar[pollchannel];You already have set this channel for Polls. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$get[channeltarget]];text;announcement]==true;You must set either Text or Announcement channel as a Poll channel to use Polls feature.]

$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;
Either you have not specified a channel, or the channel exists outside of this server. Please mention a valid channel.
]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Mention an channel or enter the channel id.]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;poll-set;$authorID];$dateStamp];1000]]:R>]
`
},{
    name: "poll-reset",
    info: {
        description: "Reset current channel used for Polls.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["reset-pollchannel", "resetpoll", "reset-poll", "pollreset"],
    code: `$deleteVar[pollchannel;$guildID;main]
Successfully reset Poll channel! Run \`suggest-set\` to set a channel again.
$onlyIf[$getGuildVar[pollchannel]!=none;There is no channel to reset currently.]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;poll-reset;$authorID];$dateStamp];1000]]:R>]
`
},{
    name: "poll",
    info: {
        description: "Start a poll in this server (if setup).",
        perms: ["`SendMessages`", "`ManageMessages`", "`AddReactions`"],
        usage: "poll content/choice 1/choice 2"
    },
    aliases: ["createpoll", "startpoll"],
    code: `

$author[Poll by $username;$userAvatar;$userURL[$authorID]]
$description[$splitText[1]

1️⃣: **$splitText[2]**

2️⃣: **$splitText[3]**
]
$footer[Poll started since]
$addTimestamp
$color[$getVar[embedcolor]]
$addClientReactions[1️⃣;2️⃣]
$sendMessage[Successfully sent your Poll to <#$getGuildVar[pollchannel]>!]
$useChannel[$getGuildVar[pollchannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[pollchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there. For server staff members, please ensure that i have the following for the channel <#$getGuildVar[pollchannel]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[pollchannel]]==true;Hmm. The channel set for the Poll system seems to be deleted. The system will not function until a new channel is set through the \`poll-set\` command.]
$onlyIf[$getGuildVar[pollchannel]!=none;Hmm. There is no channel used to start a new Poll currently.
For staff server, please run \`poll-set\` to set a channel.
]
$onlyIf[$charCount[$splitText[1]]<=3570||$charCount[$splitText[2]]<=200||$charCount[$splitText[3]]<=200;Your Poll content cannot be longer than 3570 characters. Choice 1 and Choice 2 cannot also be longer than 200 characters]
$onlyIf[$or[$splitText[1]==;$splitText[2]==;$splitText[3]==]==false;Hey there! Your usage seems to be incorrect.

A example of a usage should be \`$getGuildVar[prefix]$nonEscape[$commandInfo[poll;info.usage]]\`]
$textSplit[$message;/]
$onlyPerms[managemessages;You need to have \`ManageMessages\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;poll;$authorID];$dateStamp];1000]]:R>]
`
}]
