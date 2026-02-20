module.exports = {
name: "update",
info: {
    description: "Restarts commands to latest changes.",
    perms: ["`SendMessages`", "`EmbedLinks`"],
    dev: "true"
  },
aliases: ["restartcmds", "reloadcmds", "reload"],
code: `$author[Commands has been reloaded!;$clientAvatar]
$addField[Commands;
* **Prefix:**  $commandsCount
* **Awaited:** $commandsCount[awaited]
* **Interactions:** $get[interactions]
* **Slash:** $commandsCount[slash]
]
$addButton[1;Total: $get[total];2;unimportantcustomid;true]
$let[total;$sum[$commandsCount;$commandsCount[awaited];$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal];$commandsCount[slash]]]
$let[interactions;$sum[$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal]]]
$color[$getVar[embedcolor]]
$updateCommands
$cooldown[4s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;update;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
`
}
