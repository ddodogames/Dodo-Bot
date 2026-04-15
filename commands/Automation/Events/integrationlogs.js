module.exports = [{
    name: "Integration logs",
    type: "guildMemberAdd",
    allowBots: true,
    code: `
$onlyIf[$isBot==true;]
$onlyIf[$getGuildVar[integrationlogchannel]!=;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[integrationlogchannel]]==true;]
$onlyIf[$channelHasPerms[$getGuildVar[integrationlogchannel];$clientID;ViewChannel;SendMessages]==true;]
$onlyIf[$hasPerms[$guildID;$clientID;ViewAuditLog]==true;]

$let[staffdetails;$username[$fetchAuditLog[$guildID;IntegrationCreate;executorID;0]] <@$fetchAuditLog[$guildID;IntegrationCreate;executorID;0]>]
$let[verified;$advancedReplace[$checkCondition[$isBotVerified[$authorID]==true];true;Yes;false;No]]
$let[timestamp;$fetchAuditLog[$guildID;IntegrationCreate;timestamp;0]]

$sendMessage[$getGuildVar[integrationlogchannel];
$author[New bot has been added!;$userAvatar]
$description[
* **Name:** $username <@$authorID>
* **Tag:** $userTag
* **Added by:** $get[staffdetails]
* **Added on:** <t:$trunc[$divide[$get[timestamp];1000]]:f>
* **Verified:** $get[verified]
* **Created on:** <t:$trunc[$divide[$userCreatedAt[$authorID];1000]]:f>
]
$color[Blue]
$addActionRow
$addButton[viewbotperms_$authorID;View Permissions;Secondary]
]`
}]
