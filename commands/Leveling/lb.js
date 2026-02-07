module.exports = {
name: "leaderboard",
type: "messageCreate",
info: {
    description: `Returns Leveling's leaderboard for this server (if enabled).`,
    usage: "`leaderboard (page)`",
    perms: ["`SendMessages`", "`EmbedLinks`"]
    },
aliases: ["lb", "leveling-lb", "leveling-leaderboard"],
code: `$userCooldown[leveling-lbcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[leveling-lbcmd]];1000]]:R>]
$onlyIf[$getGuildVar[levelingsystem]==on;Leveling is not enabled currently.]

$let[page;$advancedReplace[$checkCondition[$message==];true;1;false;$callFunction[excludespecialchars;$message]]]
$onlyIf[$isNumber[$get[page]]==true;Please, be sure to enter a actual number.]
$onlyIf[$isInteger[$get[page]]==true;A invalid page has been entered. Please specify a existing page.]
$onlyIf[$get[page]>=1;You can't go less than page 1.]
$onlyIf[$get[page]<=20;You can only switch up to page 20.]

$let[leaderboard;$memberLeaderboard[level;$guildID;desc;20;$get[page];
;leaderboard;position;$return[$switch[$env[position];$case[1;🥇] $case[2;🥈] $case[3;🥉]] $env[position] - $username[$env[leaderboard;id]] - Level $env[leaderboard;value]]]]
$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]

$onlyIf[$get[leaderboard]!=;Leaderboard is currently not available. The reasons are being:
* Members do not have level 2 and higher. Please wait for someone to level up first then try again.
* The specified page still didn't register members yet. Wait for a couple of members to level up then try again.
]

$author[$guildName;$get[servericon]]
$title[Leaderboard]
$description[$get[leaderboard]]
$footer[Page $get[page]/20]
$color[$getGlobalVar[embedcolor]]


`
}
