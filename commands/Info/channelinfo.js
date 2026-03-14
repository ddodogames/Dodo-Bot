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

    $let[channel;$findChannel[$message;false]]

    $onlyIf[$get[channel]!=;Please specify a channel (via mention, id or name) to view it's information.]

    $onlyIf[$guildChannelExists[$guildID;$get[channel]]==true;Please mention a valid channel that exists in this server.]

    Not Done yet.
    `
}
