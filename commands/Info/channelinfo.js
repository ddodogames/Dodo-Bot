module.exports = {
    name: "channelinfo",
    type: "messageCreate",
    info: {
        description: "Returns information about the specified channel.",
        usage: "`channelinfo <channel>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["channel"],
    code: `$userCooldown[channelinfocmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[channelinfocmd]];1000]]:R>]

    $let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]
    $let[channel;$findChannel[$message;false]]

    $onlyIf[$get[channel]!=;Please specify a channel (via mention, id or name) to view it's information.]

    $onlyIf[$guildChannelExists[$guildID;$get[channel]]==true;Please mention a valid channel that exists in this server.]

    $let[nsfw;$advancedReplace[$checkCondition[$channelNSFW[$get[channel]]==true];true;Yes;false;No]]

    $author[About this channel;$get[servericon];$get[servericon]]
    $title[$channelName[$get[channel]]]
    $addField[**General**;
* **ID:** $get[channel]
* **Type:** $channelType[$get[channel]]
* **NSFW:** $get[nsfw]
* **Created on:** <t:$trunc[$divide[$channelCreatedAt[$get[channel]];1000]]:f>
]
    $color[$getGlobalVar[embedcolor]]
    `
}
