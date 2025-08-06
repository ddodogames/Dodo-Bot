module.exports = {
    name: "(Leveling) Reset on Leave trigger",
    type: "leave",
    channel: "$randomChannelID[$guildID;all]",
    code: `$ifAwaited[$getGuildVar[levelleaveonreset]==on;{execute:resetonleave}]
$onlyIf[$getGuildVar[levelsystem]==on;]
$onlyIf[$guildID==$guildID;]`
}
