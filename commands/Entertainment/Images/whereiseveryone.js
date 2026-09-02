module.exports = {
name: "whereiseveryone",
type: "messageCreate",
info: {
 description: "Starts a short recreation of a cut-scene from Shrek movie.",
 perms: ["`SendMessages`", "`EmbedLinks`"]
},
code: `
$userCooldown[whereiseveryonecmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[whereiseveryonecmd]];1000]]:R>]


$let[messageID;$sendMessage[$channelID;$title["It's quiet..."]
$attachment[./assets/whereiseveryone-part1.png;shrek1.png]
$image[attachment://shrek1.png]
$color[$getGlobalVar[embedcolor]]
;true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Too quiet..."]
$attachment[./assets/whereiseveryone-part2.jpg;shrek2.png]
$image[attachment://shrek2.png]
$color[$getGlobalVar[embedcolor]]
]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Where is Everyone?"]
$attachment[./assets/whereiseveryone-part3.jpg;shrek3.png]
$image[attachment://shrek3.png]
$color[$getGlobalVar[embedcolor]]
]

`
}
