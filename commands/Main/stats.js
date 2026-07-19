module.exports = {
    name: "stats",
    info: {
        description: "Checks the current statistics while the bot is running (like RAM Usage).",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["botstats", "statistics"],
    type: "messageCreate",
    code: `
$userCooldown[statscmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[statscmd]];1000]]:R>]
$let[uptime;<t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>]
$let[fsversion;$advancedReplace[$checkCondition[$getGlobalVar[isforgescriptdev]==on];true;\`v$version\` (Dev);false;\`v$version\`]]
$let[dodobotversion;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;\`v$getGlobalVar[version]\` (Dev);false;\`v$getGlobalVar[version]\`]]

$title[$username[$clientID]'s stats]
$thumbnail[$userAvatar[$clientID]]
$addField[**Users**;$separateNumber[$userCount;,];true]
$addField[**RAM Usage**;$round[$ram]MB;true]
$addField[**CPU Usage**;$round[$divide[$cpu;1000]]%;true]
$addField[**Ping**;$pingms;true]
$addField[**Uptime**;$get[uptime];true]
$addField[**Servers**;$guildCount;true]
$addField[**ForgeScript**;$get[fsversion];true]
$addField[**Node.js**;\`$nodeVersion\`;true]
$addField[**Dodo-Bot**;$get[dodobotversion];true]
$color[$getGlobalVar[embedcolor]]
`
}
