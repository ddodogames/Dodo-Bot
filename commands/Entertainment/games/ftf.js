module.exports = {
    name: "findtheflag",
    info: {
        description: "Starts a game of Find the flag.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["ftf", "find-the-flag"],
    type: "messageCreate",
    code: `
$userCooldown[ftfcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[ftfcmd]];1000]]:R>]

$title[🚩 | Find the flag!]
$description[There is a hidden flag somewhere around 1-3. Where do you think the flag might be?]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[ftf1_$authorID;;Secondary;1️⃣]
$addButton[ftf2_$authorID;;Secondary;2️⃣]
$addButton[ftf3_$authorID;;Secondary;3️⃣]
`
}
