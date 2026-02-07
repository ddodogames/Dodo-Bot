module.exports = {
    name: "serverlist",
    info: {
        description: "Returns list of servers the bot is in.",
        perms: ["`SendMessages`", "`AttachFiles`"],
        dev: "true"
    },
    aliases: ["guildlist"],
    type: "messageCreate",
    code: `$callFunction[Devsonly]
$attachment[$callFunction[autoListServers;$serverIDs;, ];allservers.md;true]`
}
