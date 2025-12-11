module.exports = [{
name: "suggest-setup",
info: {
        description: "Setup suggestions.",
        perms: ["`SendMessages`", "`ManageChannels`"]
},
type: "messageCreate",
aliases: ["suggest-set", "set-suggest"],
code: `
$userCooldown[suggest-setupcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[suggest-setupcmd]];1000]]:R>]
$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[suggestionchannel;$guildID;None]!=None];true;<#$getGuildVar[suggestionchannel;$guildID]> (\`$getGuildVar[suggestionchannel;$guildID]\`);false;No channel set]]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Suggestion channel setup]
$description[Hmm... Let's get started!

To set a channel for suggestions, please use the select menu below.
]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[suggestionchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow 
$addButton[suggestresetbutton_$authorID;Reset;Secondary]

`
},{
    name: "suggest",
    info: {
        description: "Starts a suggestion in this server (if the feature is setup).",
        usage: "`suggest <title/description>`",
        perms: ["`SendMessages`", "`AddReactions`"]
},
    type: "messageCreate",
    code: `$userCooldown[suggestcmd;4s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[suggestcmd]];1000]]:R>]
$arrayLoad[message;/;$message]
$let[title;$arrayAt[message;0]]
$let[message;$arrayAt[message;1]]

$onlyIf[$or[$get[title]==;$get[message]==]==false;Hey there! Your usage seems to be wrong. Make sure it's correct!

Here's the usage:
\`$getGuildVar[prefix]suggest <title/description>\`
]

$onlyIf[$getGuildVar[suggestionchannel]!=;
There's no channel set for suggestions currently. 

Until then, the server staff must set a channel for suggestions to work.
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[suggestionchannel]]==true;
The channel used for suggestions doesn't seem to exist anymore.

Until then, the server staff must set a new channel for suggestions to work once again.
]

$onlyIf[$channelHasPerms[$getGuildVar[suggestionchannel];$clientID;SendMessages;ViewChannel;AddReactions]==true;
I do not have permissions to either send messages or view the suggestion channel.

In order to send your suggestion there, the server staff must give me the following:
\`AddReactions\`
\`SendMessages\`
\`ViewChannel\`
]

$onlyIf[$charCount[$get[title]]<=160;
You can only insert up to 160 characters for title
]
$onlyIf[$charCount[$get[message]]<=3000;
You can only insert up to 3000 characters for description
]

$sendMessage[$channelID;
Alright, your suggestion has been sent to <#$getGuildVar[suggestionchannel]>!
]

$let[messageID;$sendMessage[$getGuildVar[suggestionchannel];
$author[Suggestion from $username;$userAvatar;$callFunction[userURL;$authorID]]
$title[$get[title]]
$description[$get[message]]
$color[$getGlobalVar[embedcolor]]
$footer[Created on]
$timestamp
;true]]

$!addMessageReactions[$getGuildVar[suggestionchannel];$get[messageID];⬆️;⬇️]


`
}]
