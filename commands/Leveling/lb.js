module.exports = {
    name: "leaderboard",
    info: {
        description: `Returns Leveling's leaderboard for this server (if enabled).`,
        usage: "`leaderboard (page)`",
        perms: ["`SendMessages`", "`EmbedLinks`"],
    },
    aliases: ["lb", "leveling-lb", "level-leaderboard"],
    code: `
$author[$guildName;$get[serverimage]]
$title[Leaderboard]
$description[$get[leaderboard]]
$footer[Page $get[page]/20]
$addTimeStamp
$color[$getVar[embedcolor]]

$onlyIf[$get[leaderboard]!=;The leaderboard is currently not available. The reasons are being:
* Members do not have level 2 and higher. Please wait for someone to level up first, then try again.
* The specified page has not yet registered any members. Wait for a couple of members to level up, then try again.
]

$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;&{top} - {username} - Level {value};20;$get[page];main];&1 -;🥇 1 -;&2 -;🥈 2 -;&3 -;🥉 3 -;&;]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userDefaultAvatar[$clientID]]]
$onlyIf[$get[page]>=1;You can't go less than page 1.]
$onlyIf[$get[page]<=20;You can only switch up to page 20.]
$onlyIf[$isInteger[$get[page]]==true;An invalid page has been entered. Please specify an existing page.]
$onlyIf[$isNumber[$get[page]]==true;Please be sure to enter an actual number.]

$let[page;$advancedReplaceText[$checkCondition[$message==];true;1;false;$excludeSpecialChars[$message]]]
$onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
$cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;leaderboard;$authorID];$dateStamp];1000]]:R>]
`
}
