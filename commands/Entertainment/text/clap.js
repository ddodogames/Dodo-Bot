module.exports = {
name: "clap",
type: "messageCreate",
info: {
 description: "Makes 👏 the 👏 text 👏 look 👏 like 👏 this",
 usage: "`clap <text>`",
 perms: ["`SendMessages`"]
},
code: `
$userCooldown[clapcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[clapcmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please provide a text.]
$if[$checkContains[$message; ]==true;
$replace[$message; ; 👏 ]
;
$replace[$message;; 👏 ]
]
`
}
