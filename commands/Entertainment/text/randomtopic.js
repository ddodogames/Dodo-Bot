module.exports = {
name: "randomtopic",
info: {
    description: "Start a random topic in this server.",
    perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["newtopic", "topic"],
code: `$title[Random topic]
$description[$randomTopic]
$footer[Started by $username;$authorAvatar]
$color[$getVar[embedcolor]]
$addTimestamp
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;randomtopic;$authorID];$dateStamp];1000]]:R>]`
}
