module.exports = {
name: "Reset on leave",
type: "guildMemberRemove",
allowBots: false,
code: `
$onlyIf[$getGuildVar[levelingsystem]==on;]
$onlyIf[$getGuildVar[levelingresetonleave]==on;]

$deleteMemberVar[level;$authorID]
$deleteMemberVar[previouslevel;$authorID]
$deleteMemberVar[xp;$authorID]
$deleteMemberVar[xpLimit;$authorID]`
}
