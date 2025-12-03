module.exports = {
type: "guildMemberRemove",
code: `$onlyIf[$isBot==false;]
$onlyIf[$getGuildVar[levelingsystem]==on;]
$onlyIf[$getGuildVar[levelingresetonleave]==on;]

$deleteMemberVar[level;$authorID]
$deleteMemberVar[previouslevel;$authorID]
$deleteMemberVar[xp;$authorID]
$deleteMemberVar[xpLimit;$authorID]`
}
