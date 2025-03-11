module.exports = {
name: "whoasked",
info: {
    description: "Searches for Askers (which never finds one).",
    perms: ["`SendMessages`"]
},
code: `Searching for Askers... (0%)
$editIn[5s;Searching for Askers... (5%);Searching for Askers... (15%);Searching for Askers... (40%);Searching for Askers... (60%);Searching for Askers... (90%);Searching for Askers... (100%);No askers has been found.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;whoasked;$authorID];$dateStamp];1000]]:R>]
`
}
