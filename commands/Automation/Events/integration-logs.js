module.exports = {
    name: "Integration Logs",
    type: "join",
    channel: "$getGuildVar[Integrationchannel]",
    code: `
$author[New bot has been added!;$userAvatar]
$description[
* **Name:** $username <@$authorID>
* **Tag:** $userTag
* **Added by:** $get[getstaffinfo]
* **Added on:** <t:$truncate[$divide[$datestamp;1000]]:f>
* **Verified:** $get[verified]
* **Created on:** <t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:f>
]
$color[Blue]
$addButton[1;View Permissions;2;viewbotpermsbutton_$authorID;false]

$useChannel[$getGuildVar[Integrationchannel]]
$let[getstaffinfo;$username[$get[staffID]] <@$get[staffID]>]
$let[verified;$advancedReplaceText[$checkCondition[$isBotVerified[$authorID]==true];true;Yes;false;No]]
$let[staffID;$getAuditLogs[$guildID;;1;80;{executor.id}]]
$onlyIf[$hasPerms[$guildID;$clientID;viewauditlog]==true;In order to have Integration logs work, i must have \`ViewAuditLog\` permission!]
$onlyIf[$hasPermsInChannel[$getGuildVar[Integrationchannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[Integrationchannel]]==true;]
$onlyIf[$getGuildVar[Integrationchannel]!=none;]
$onlyIf[$isBot==true;]
`
}
