module.exports = {
  name: "serverinfo",
  executeAt: "guild",
  aliases: "server",
  code: `$title[Server Info]
  $addField[Verification Level;$get[verifylevel]]
  $addField[Other;
server Created since: $creationDate[$guildID;date]
Content Filter: $get[content]
Server ID: $guildID
]
  $addField[General;
Roles: $roleCount
Emojis: $emojiCount[$guildID] 
Server Boosts: $guildBoostCount[$guildID]

]
  $addField[Channels;
Total: $channelCount[$guildID;all]
Text Channels: $channelCount[$guildID;Text]
Voice Channels: $channelCount[$guildID;Voice]
Categorys: $channelCount[$guildID;Category]
]
  $addField[Members information;
Total: $membersCount
Humans: $membersCount[$guildID;all;false]
Bots: $botCount[$guildID]
]
  $thumbnail[$userAvatar[$clientID]]
  $cooldown[2s;slow down, don't spam the command]
  
  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High]]
  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]
`
}