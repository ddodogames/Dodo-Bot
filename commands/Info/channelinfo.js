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

    Not Done yet.
    `
}
