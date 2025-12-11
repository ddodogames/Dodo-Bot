module.exports = [{
    name: "poll-setup",
    info: {
        description: "Setup polls.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    type: "messageCreate",
    aliases: ["poll-set"],
    code: `
    $userCooldown[poll-setupcmd;2s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[poll-setupcmd]];1000]]:R>]
    $let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[pollchannel;$guildID;None]!=None];true;<#$getGuildVar[pollchannel;$guildID]> (\`$getGuildVar[pollchannel;$guildID]\`);false;No channel set]]

    $onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
    This command requires you to have \`ManageChannels\` permission!
    ]

    $title[Poll channel setup]
    $description[Hmm... Let's get started!

    To set a channel for polls, please use the select menu below.
    ]
    $addField[Current channel;$get[currentchannel]]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addChannelSelectMenu[pollchannelsetup_$authorID;Select a channel to use;1;1;false]
    $setChannelType[GuildText;GuildAnnouncement]
    $addActionRow
    $addButton[pollresetbutton_$authorID;Reset;Secondary]

    `
},{
    name: "poll",
    info: {
        description: "Starts a poll in this server (if the feature is setup).",
        usage: "`poll <content/choice 1/choice 2>`",
        perms: ["`SendMessages`", "`AddReactions`"]
    },
    type: "messageCreate",
    code: `$userCooldown[pollcmd;4s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[pollcmd]];1000]]:R>]

    $arrayLoad[message;/;$message]
    $let[content;$arrayAt[message;0]]
    $let[choice1;$arrayAt[message;1]]
    $let[choice2;$arrayAt[message;2]]

    $onlyIf[$or[$get[content]==;$get[choice1]==;$get[choice2]==]==false;Hey there! Your usage seems to be wrong. Make sure it's correct!

    Here's the usage:
    \`$getGuildVar[prefix]poll <content/choice 1/choice 2>\`
    ]

    $onlyIf[$getGuildVar[pollchannel]!=;
    There's no channel set for polls currently.

    Until then, the server staff must set a channel for polls to work.
    ]

    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[pollchannel]]==true;
    The channel used for polls doesn't seem to exist anymore.

    Until then, the server staff must set a new channel for polls to work once again.
    ]

    $onlyIf[$channelHasPerms[$getGuildVar[pollchannel];$clientID;SendMessages;ViewChannel;AddReactions]==true;
    I do not have permissions to either send messages or view the polls channel.

    In order to send your suggestion there, the server staff must give me the following:
    \`AddReactions\`
    \`SendMessages\`
    \`ViewChannel\`
    ]

    $onlyIf[$charCount[$get[content]]<=3570;
    You can only insert up to 3570 characters for content.
    ]
    $onlyIf[$charCount[$get[choice1]]<=200;
    You can only insert up to 200 characters for choice 1.
    ]
    $onlyIf[$charCount[$get[choice2]]<=200;
    You can only insert up to 200 characters for choice 2.
    ]

    $sendMessage[$channelID;
    Alright, your poll has been sent to <#$getGuildVar[pollchannel]>!
    ]

    $let[messageID;$sendMessage[$getGuildVar[pollchannel];
    $author[Poll by $username;$userAvatar;$callFunction[userURL;$authorID]]
    $description[$get[content]

    1️⃣: **$get[choice1]**

    2️⃣: **$get[choice2]**
    ]
    $footer[Poll started since]
    $timestamp
    $color[$getGlobalVar[embedcolor]]
    ;true]]

    $!addMessageReactions[$getGuildVar[pollchannel];$get[messageID];1️⃣;2️⃣]
`

}]
