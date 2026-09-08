module.exports = {
name: "serverinfo",
type: "messageCreate",
info: {
description: "Returns information about this server",
perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["guild", "guildinfo", "server", "si"],
code: `$userCooldown[serverinfocmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[serverinfocmd]];1000]]:R>]

$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]
$let[totalmembers;$sum[$guildMemberCount;$guildBotCount]]
$arrayLoad[totalchannels;/;$guildChannelIDs[$guildID;/]]
$let[serververified;$advancedReplace[$checkCondition[$guildVerified==true];true;Yes;false;No]]

$author[$guildName;$get[servericon];$get[servericon]]
$title[Server info]
$addField[Members;
**Total:** $get[totalmembers]
**Humans:** $guildMemberCount
**Bots:** $guildBotCount
]
$addField[General;
**Created on:** <t:$trunc[$divide[$guildCreatedAt;1000]]:f>
**Server owner:** $hyperLink[**$username[$guildOwnerID]**;$userURL[$guildOwnerID]] (\`$guildOwnerID\`)
**Roles:** $guildRoleCount
**Boosts:** $guildBoostCount
**Emojis:** $guildEmojiCount
]
$addField[Channels;
**Total:** $arrayLength[totalchannels]
**Text:** $guildChannelCount[$guildID;GuildText]
**Voice:** $guildChannelCount[$guildID;GuildVoice]
**Forum:** $guildChannelCount[$guildID;GuildForum]
**Announcement:** $guildChannelCount[$guildID;GuildAnnouncement]
**Categories:** $guildChannelCount[$guildID;GuildCategory]
]
$addField[Other;
**Verification level:** $guildVerificationLevel
**Content filter:** $guildExplicitContentFilter
**Verified:** $get[serververified]
]
$thumbnail[$get[servericon]]
$color[$getGlobalVar[embedcolor]]
$if[$guildDescription!=;
$addActionRow
$addButton[viewserverdescription_$authorID;Description;Secondary]
]
`
}
