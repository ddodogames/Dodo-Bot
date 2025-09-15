module.exports = [{
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[{newEmbed:{author:Server information:$nonEscape[$get[serverimage]]}{title:Information for $get[username]}{url:$nonEscape[$userURL[$get[user]]]}{field:**General**:
* **Joined the server on#COLON#** <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID];1000]]:f>
* **Booster#COLON#** $get[boosterchecker]
* **Status#COLON#** $userStatus[$guildID;$get[user]]
:true}{field:**Roles**:
* **Total amount of roles#COLON#** $userRolesCount[$get[user];$guildID]
* **Highest Role#COLON#** $get[highestrole]
* **Lowest Role#COLON#** $get[lowestrole]
:true}{thumbnail:$userAvatar[$get[user]]}{color:$getVar[embedcolor]}}{actionRow:{button:General info:2:mainmeminfo_$authorID_$get[user]:false}{button:Member's Server info:2:memberservinfo_$authorID_$get[user]:true}}]


$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[lowestrole;$advancedReplaceText[$checkCondition[$userLowestRole[$get[user];$guildID]==$guildID];true;None;false;$roleName[$userLowestRole[$get[user];$guildID]]]]
$let[highestrole;$advancedReplaceText[$checkCondition[$userHighestRole[$get[user];$guildID;id]==$guildID];true;None;false;$userHighestRole[$get[user];$guildID;name]]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userDefaultAvatar[$clientID]]]
$let[boosterchecker;$advancedReplaceText[$checkCondition[$isBoosting[$get[user];$guildID]==true];true;Yes;false;No]]

$onlyIf[$memberExists[$get[user];$guildID]==true;
The user appears to have left the server. The ablity to view their server information has been temporarily disabled until they re-join again
{ephemeral}
{interaction}
]

$let[user;$advancedTextSplit[$interactionData[customId];_;3]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction} 
  ]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==memberservinfo;]
  
`
},{
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[{newEmbed:{title:Information for $get[username]}{url:$nonEscape[$userURL[$get[user]]]}{field:**General**:
* **Joined Discord on#COLON#** <t#COLON#$truncate[$divide[$creationDate[$get[user];ms];1000]]#COLON#f>
* **Bot account#COLON#** $get[botchecker]
* **ID#COLON#** $get[user]
:true}{field:**Other**:
* **Avatar#COLON#** [link]($userAvatar[$get[user]])
* **DMs#COLON#** $get[userdms]
:true}{thumbnail:$userAvatar[$get[user]]}{color:$getVar[embedcolor]}}{actionRow:{button:General info:2:mainmeminfo_$authorID_$get[user]:true}{button:Member's Server info:2:memberservinfo_$authorID_$get[user]:false}}]



$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[botchecker;$advancedReplaceText[$checkCondition[$isBot[$get[user]]==true];true;Yes;false;No]]
$let[userdms;$advancedReplaceText[$checkCondition[$isUserDmEnabled[$get[user]]==true];true;Enabled;false;Disabled]]

$let[user;$advancedTextSplit[$interactionData[customId];_;3]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mainmeminfo;]
  
`
}]
