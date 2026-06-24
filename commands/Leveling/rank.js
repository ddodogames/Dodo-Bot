module.exports = {
    name: "rank",
    type: "messageCreate",
    info: {
        description: "View your/someone's current level.",
        usage: "`rank (user)`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["level", "lvl"],
    disableConsoleErrors: true,
    code: `$userCooldown[rankcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[rankcmd]];1000]]:R>]
$onlyIf[$getGuildVar[levelingsystem]==on;Leveling is not enabled currently.]

$let[user;$findMember[$guildID;$message;true]]
$onlyIf[$isBot[$get[user]]==false;Bots don't have Levels.]
$title[$username[$get[user]]'s Rank]
$addField[Progress;
* **Level:** \`$getMemberVar[level;$get[user]]\`
* **XP:** \`$getMemberVar[xp;$get[user]]\`/\`$getMemberVar[xpLimit;$get[user]]\`
\`($advancedBar[$getMemberVar[xp;$get[user]];$getMemberVar[xpLimit;$get[user]];15;-;#;=])\`
]
$if[$getMemberLeaderboardValue[level;asc;$get[user]]!=0;
$footer[Rank on LB: #$getMemberLeaderboardValue[level;asc;$get[user]]]
]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
`
}

