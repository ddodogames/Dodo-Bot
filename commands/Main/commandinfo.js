module.exports = {
name: "commandinfo",
info: {
        description: "The command says it all. What else do you expect?",
        usage: "`commmandinfo <command name>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
aliases: ["cmdinfo", "ci"],
type: "messageCreate",
code: `$userCooldown[cmdinfolookercmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[cmdinfolookercmd]];1000]]:R>]

$onlyIf[$message!=;Please type a command name to look for it's information.]

$let[command;$commandInfo[messageCreate;$toLowerCase[$message]]]
$onlyIf[$isJSON[$get[command]]==true;The command specified does not appear to exist. Try entering a command that exists within the bot itself.]
$jsonLoad[cmdinfo;$get[command]]
$let[actualname;$env[cmdinfo;name]]
$jsonLoad[aliases;$env[cmdinfo;aliases]]
$jsonLoad[flags;$env[cmdinfo;info;flags]]
$jsonLoad[perms;$env[cmdinfo;info;perms]]

$let[aliases;$advancedReplace[$checkCondition[$arrayJoin[aliases;, ]==];true;*No aliases exists for this command.*;false;$arrayJoin[aliases;, ]]]
$let[usage;$advancedReplace[$checkCondition[$env[cmdinfo;info;usage]==];true;Has no parameters.;false;$env[cmdinfo;info;usage]]]

$onlyIf[$env[cmdinfo;info;dev]==;Viewing developer commands is unsupported.]

$attachment[./assets/magnifying-glass-tilted-left.png;magnifying-glass.png]
$author[Command info;attachment://magnifying-glass.png]
$title[$get[actualname]]
$description[$env[cmdinfo;info;description]]
$addField[Usage;$get[usage]]
$addField[Permission(s);$arrayJoin[perms;, ]]
$addField[Aliases;$get[aliases]]
$footer[<> - required parameter | () - optional parameter]
$color[$getGlobalVar[embedcolor]]
$if[$arrayJoin[flags;, ]!=;
$addActionRow
$addButton[viewcmdflags_$authorID_$get[actualname];Flags;Secondary]
]
`
}
