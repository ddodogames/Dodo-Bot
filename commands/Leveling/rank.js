module.exports ={
    name: "rank",
    info: {
        description: "View your or someone's current level.",
        perms: ["`SendMessages`"]
    },
    aliases: ["level", "lvl"],
    code: `
$title[$username[$get[user]]'s Rank]
$addField[Progress;
Level: \`$getUserVar[level;$get[user]]\`
Experience: \`$getUserVar[xp;$get[user]]\`/\`$getUserVar[xpLimit;$get[user]]\`
\`($createProgressBar[$getUserVar[xp;$get[user]];$getUserVar[xpLimit;$get[user]]])\`
]
$thumbnail[$userAvatar[$get[user]]]
$color[$getVar[embedcolor]]

$onlyIf[$isBot[$get[user]]==false;Bots do not have Levels.]
$let[user;$findMember[$message;true]]
$onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;rank;$authorID];$dateStamp];1000]]:R>]
`
}
