module.exports = {
    name: "roleinfo",
    type: "messageCreate",
    info: {
        description: "Returns information about the specified role.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["role", "ri"],
    code: `$userCooldown[roleinfocmd;3s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[roleinfocmd]];1000]]:R>]

 Not done yet.
`
}
