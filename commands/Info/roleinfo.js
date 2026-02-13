module.exports = {
    name: "roleinfo",
    type: "messageCreate",
    info: {
        description: "Returns information about the specified role.",
        usage: "`roleinfo <role>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["role", "ri"],
    code: `$userCooldown[roleinfocmd;3s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[roleinfocmd]];1000]]:R>]

$let[role;$findRole[$guildID;$message]]

$onlyIf[$get[role]!=;Please mention a role to view it's information.]

$onlyIf[$roleExists[$guildID;$get[role]]==true;Please mention a valid role that exists in this server.]

 Not done yet.
`
}
