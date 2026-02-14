module.exports = {
    name: "roleinfo",
    type: "messageCreate",
    info: {
        description: "Returns information about the specified role.",
        usage: "`roleinfo <role>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["role", "ri"],
    code: `$userCooldown[roleinfocmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[roleinfocmd]];1000]]:R>]

$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]
$let[role;$findRole[$guildID;$message]]

$onlyIf[$get[role]!=;Please specify a role (via mention, id or name) to view it's information.]

$onlyIf[$roleExists[$guildID;$get[role]]==true;Please mention a valid role that exists in this server.]

$onlyIf[$get[role]!=$guildID;You can only view custom-created roles at the moment.]

$arrayLoad[rolemembers;/;$roleMembers[$guildID;$get[role];/]]
$arrayMap[rolemembers;a;
$if[$env[a]!=;
$return[$env[a]]
]
;totalrolemembers]

$let[rolecolor;$advancedReplace[$checkCondition[$roleColor[$guildID;$get[role];Primary]==];true;None;$roleColor[$guildID;$get[role];Primary]]]

$author[About this role;$get[servericon];$get[servericon]]
$title[$roleName[$guildID;$get[role]]]
$addField[**General**;
* **Role members:** $arrayLength[totalrolemembers]
* **ID:** $get[role]
* **Color:** $get[rolecolor]
* **Created on:** <t:$trunc[$divide[$roleCreatedAt[$guildID;$get[role]];1000]]:f>
]
$color[$getGlobalVar[embedcolor]]
$if[$rolePerms[$guildID;$get[role]]!=;
$addActionRow
$addButton[viewrolepermissions_$authorID_$get[role];Permissions;Secondary]
]

`
}
