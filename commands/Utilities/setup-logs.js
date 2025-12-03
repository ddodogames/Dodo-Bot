module.exports = {
name: "setup-logs",
info: {
    description: "Setup some logs in this server!",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
type: "messageCreate",
code: `$userCooldown[setuplogscmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[setuplogscmd]];1000]]:R>]

$onlyIf[$hasPerms[$guildID;$authorID;ManageChannels]==true;
This command requires you to have \`ManageChannels\` permission!
]

$title[Setup Logs]
$description[Welcome to Setup Logs! Choose the type of logging you want to set!]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[setuplogtypes_$authorID;Choose a logging type;false;1;1]
$addOption[Message Delete;Log deleted messages by users!;msgdeletelog;;false]
$addOption[Message Edit;Log Edited messages by users!;msgeditlog;;false]
$addOption[Ban logs;Log banned users!;memberbanlogs;;false]
$addOption[Un-ban logs;Log users that got unbanned!;memberunbanlogs;;false]
$addOption[Integration logs;Log bots that got added to this server!;integrationlogs;;false]
`
}
