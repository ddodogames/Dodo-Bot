module.exports = {
    name: "help",
    info: {
        description: "Let's you view commands list",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    aliases: ["h"],
    code: `$userCooldown[helpcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[helpcmd]];1000]]:R>]
$title[Help Menu]
$description[To view commands, select one of the modules from the dropdown menu below!]
$footer[Made with ❤️ by $username[632607624742961153]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
$addOption[Main;Main module;main;;false]
$addOption[Entertainment;Entertainment module;fun;;false]
$addOption[Leveling;Leveling module;leveling;;false]
$if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
$addOption[Developer;Developer module;dev;;false]
]
$addOption[Utility;Utility module;util;;false]
`
}
