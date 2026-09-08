module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$advancedTextSplit[$customID;_;0]==memberservinfo;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[user;$advancedTextSplit[$customID;_;2]]
$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]
$let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]];false;$username[$get[user]]]]
$let[nickname;$advancedReplace[$checkCondition[$callFunction[hasnickname;$guildID;$get[user]]==false];true;none;false;$nickname[$guildID;$get[user]]]]
$arrayLoad[amountofroles;/;$memberRoles[$guildID;$get[user];/]]

$let[highestrole;$advancedReplace[$checkCondition[$memberHighestRoleID[$guildID;$get[user]]==$guildID];true;none;false;$roleName[$guildID;$memberHighestRoleID[$guildID;$get[user]]]]]
$let[lowestrole;$advancedReplace[$checkCondition[$memberLowestRoleID[$guildID;$get[user]]==$guildID];true;none;false;$roleName[$guildID;$memberLowestRoleID[$guildID;$get[user]]]]]
$let[booster;$advancedReplace[$checkCondition[$isBoosting[$guildID;$get[user]]==true];true;Yes;false;No]]


$onlyIf[$memberExists[$guildID;$get[user]]==true;
$interactionReply[
This user appears to have left the server. As a result, their server information will no longer be displayed until they join this server again.
$ephemeral
]]

$interactionUpdate[
$author[Server information;$get[servericon]]
$title[$get[username]'s information;$userURL[$get[user]]]
$addField[**General**;
* **Joined the server on:** <t:$trunc[$divide[$memberJoinedAt[$guildID;$get[user]];1000]]:f>
* **Booster:** $get[booster]
* **Amount of roles:** $arrayLength[amountofroles]
* **Nickname:** $get[nickname]
;true]
$addField[**Other**;
* **Platforms:** $if[$memberPlatforms[$guildID;$get[user]]==;Unavailable;$toTitleCase[$memberPlatforms[$guildID;$get[user]]]]
* **Highest Role:** $get[highestrole]
* **Lowest Role:** $get[lowestrole]
* **Status:** $if[$status[$guildID;$get[user]]==;None;$status[$guildID;$get[user]]]
;true]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[generalmeminfo_$authorID_$get[user];General info;Secondary]
$addButton[memberservinfo_$authorID_$get[user];Member's server info;Secondary;;true]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$advancedTextSplit[$customID;_;0]==generalmeminfo;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[user;$advancedTextSplit[$customID;_;2]]
$let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]];false;$username[$get[user]]]]
$let[accounttype;$advancedReplace[$checkCondition[$isBot[$get[user]]==true];true;Bot;false;Human]]
$let[dmsstatus;$advancedReplace[$checkCondition[$isUserDMEnabled[$get[user]]==true];true;Enabled;false;Disabled]]
$let[botverified;$advancedReplace[$checkCondition[$isBotVerified[$get[user]]==true];true;Yes;false;No]]

$interactionUpdate[
$title[$get[username]'s information;$userURL[$get[user]]]
$addField[**General**;
* **Joined Discord on:** <t:$trunc[$divide[$userCreatedAt[$get[user]];1000]]:f>
* **Account type:** $get[accounttype] $if[$isBot[$get[user]]==true;
* **Bot verified:** $get[botverified]]
* **ID:** $get[user]
;true]
$addField[**Other**;
* **Avatar:** $hyperlink[link;$userAvatar[$get[user]]] $if[$userBanner[$get[user]]!=;
* **Banner:** $hyperlink[link;$userBanner[$get[user]]]]
* **DMs:** $get[dmsstatus]
;true]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[generalmeminfo_$authorID_$get[user];General info;Secondary;;true]
$addButton[memberservinfo_$authorID_$get[user];Member's server info;Secondary]
]
`
}]
