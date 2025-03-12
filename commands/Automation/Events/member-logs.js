module.exports = [{
name: "Welcomer message",
type: "join",
channel: "$getGuildVar[welcomechannel]",
code: `$ifAwaited[$charCount[$getGuildVar[welcomemessage]]>=2000||$getGuildVar[welcometype]==embed;{execute:welcomerembedmode};{execute:welcomertextmode}]


$onlyIf[$hasPermsInChannel[$getGuildVar[welcomechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[welcomechannel]]==true;]
$onlyIf[$getGuildVar[welcomechannel]!=none;]

$let[content;$advancedReplaceText[$nonEscape[$getGuildVar[welcomemessage]];<server.totalMembers>;$membersCount;<username>;$get[username];<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<Displayname>;$userDisplayName;<globalname>;$get[globalname]]]
$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$authorID]==false];true;$username[$authorID];false;$userTag[$authorID]]]
$let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]

$onlyIf[$getGuildVar[welcomesystem]==on;]
$disableMentionType[roles]
$disableMentionType[everyone]
$onlyIf[$guildID==$guildID;]`
},{
    name: "Leave message",
    type: "leave",
    channel: "$getGuildVar[leavechannel]",
    code: `$ifAwaited[$charCount[$getGuildVar[leavemessage]]>=2000||$getGuildVar[leavetype]==embed;{execute:leaveembedmode};{execute:leavetextmode}]


$onlyIf[$hasPermsInChannel[$getGuildVar[leavechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;]
$onlyIf[$getGuildVar[leavechannel]!=none;]

$let[content;$advancedReplaceText[$nonEscape[$getGuildVar[welcomemessage]];<server.totalMembers>;$membersCount;<username>;$get[username];<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:f>;<Displayname>;$userDisplayName;<globalname>;$get[globalname]]]
$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$authorID]==false];true;$username[$authorID];false;$userTag[$authorID]]]
$let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]

$onlyIf[$getGuildVar[leavesystem]==on;]
$disableMentionType[roles]
$disableMentionType[everyone]
$onlyIf[$guildID==$guildID;]`
}]
