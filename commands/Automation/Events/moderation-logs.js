module.exports = [{
    name: "Ban logs",
    type: "guildBanAdd",
    allowBots: true,
    code: `
    $onlyIf[$getGuildVar[banlogschannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[banlogschannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[banlogschannel];$clientID;ViewChannel;SendMessages]==true;]
    $onlyIf[$hasPerms[$guildID;$clientID;ViewAuditLog]==true;]
$let[reason;$advancedReplace[$checkCondition[$fetchAuditLog[$guildID;MemberBanAdd;reason;0]==];true;none;false;$fetchAuditLog[$guildID;MemberBanAdd;reason;0]]]
$let[staffdetails;$username[$fetchAuditLog[$guildID;MemberBanAdd;executorID;0]]  <@$fetchAuditLog[$guildID;MemberBanAdd;executorID;0]>]
$let[condition;$and[$getGuildVar[anonymous]==on;$isBot[$fetchAuditLog[$guildID;MemberBanAdd;executorID;0]]==false]]
$let[getmoderatorname;$advancedReplace[$checkCondition[$get[condition]==true];true;Unknown;false;$get[staffdetails]]]
$let[accounttype;$advancedReplace[$checkCondition[$isBot==false];true;Member;false;Bot]]
    $sendMessage[$getGuildVar[banlogschannel];
    $author[Member banned!;$userAvatar]
    $description[
**Offender ($get[accounttype]):** $username <@$authorID>
**Moderator:** $get[getmoderatorname]
**Reason:** $get[reason]
]
    $color[Red]
    ]
    `
    },{
    name: "un-Ban logs",
    type: "guildBanRemove",
    allowBots: true,
    code: `
    $onlyIf[$getGuildVar[unbanlogschannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[unbanlogschannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[unbanlogschannel];$clientID;ViewChannel;SendMessages]==true;]
    $onlyIf[$hasPerms[$guildID;$clientID;ViewAuditLog]==true;]
$let[reason;$fetchAuditLog[$guildID;MemberBanRemove;reason;0]]
$let[moderator;$username[$fetchAuditLog[$guildID;MemberBanRemove;executorID;0]] <@$fetchAuditLog[$guildID;MemberBanRemove;executorID;0]>]
$let[accounttype;$advancedReplace[$checkCondition[$isBot==false];true;Member;false;Bot]]
    $sendMessage[$getGuildVar[unbanlogschannel];
    $author[Member unbanned!;$userAvatar]
    $description[
**Offender ($get[accounttype]):** $username <@$authorID>
**Moderator:** $get[moderator] $if[$get[reason]!=;
**Reason:** $get[reason]]
]
    $color[DarkGreen]
    ]
    `
    }]
    
