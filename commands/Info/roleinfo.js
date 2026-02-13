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

$arrayLoad[totalrolemembers;/;$roleMembers[$guildID;$get[role];/]]

$author[About this role;$get[servericon];$get[servericon]]
$title[$roleName[$guildID;$get[role]]]
$addField[**General**;
* **Created on:** <t:$trunc[$divide[$roleCreatedAt[$guildID;$get[role]];1000]]:f>
* **Role members:** $arrayLength[totalrolemembers]
* **ID:** $roleID[$guildID;$get[role]]
* **Color:** $roleColor[$guildID;$get[role];]
]
$color[$getGlobalVar[embedcolor]]

`
}
