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

    $onlyIf[disabled!=disabled;Not yet.]`

}]
