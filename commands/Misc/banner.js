module.exports = {
    name: "banner",
    info: {
        description: "Returns your/users banner.",
        usage: "`banner (user)`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    type: "messageCreate",
    aliases: ["userbanner"],
    disableConsoleErrors: true,
    code: `$userCooldown[avatarcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[avatarcmd]];1000]]:R>]

$let[user;$findUser[$message;true]]
$let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]];false;$username[$get[user]]]]
$let[error;$advancedReplace[$checkCondition[$get[user]==$authorID];true;You don't have a banner.;false;This user does not have a banner attached to their profile.]]
$onlyIf[$userBanner[$get[user]]!=;$get[error]]

$title[$get[username]'s banner]
$image[$userBanner[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[$userBanner[$get[user];;png];Open in browser;Link]

    `
}
