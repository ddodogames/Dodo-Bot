module.exports = [{
    name: "Message delete logs",
    type: "messageDelete",
    allowBots: true,
    code: `
    $onlyIf[$oldMessage[content]!=;]
    $onlyIf[$getGuildVar[msglogdeletechannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogdeletechannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[msglogdeletechannel];$clientID;ViewChannel;SendMessages]==true;]
    $if[$getGuildVar[includebots]==off;
$onlyIf[$isBot[$oldMessage[authorID]]==false;]
]
    $sendMessage[$getGuildVar[msglogdeletechannel];
$author[Message deleted!;$userAvatar[$oldMessage[authorID]]]
    $description[
**Member:** <@$oldMessage[authorID]>
**Channel:** <#$oldMessage[channelID]>
    $oldMessage[content]
    ]
   $color[Yellow]
]
`
},{
    name: "Message edit logs",
    type: "messageUpdate",
    allowBots: true,
    code: `
    $onlyIf[$or[$oldMessage[content]==;$newMessage[content]==]==false;]
    $onlyIf[$oldMessage[content]!=$newMessage[content];]
    $onlyIf[$and[$hasEmbeds[$oldMessage[channelID];$oldMessage[id]]==false;$hasEmbeds[$newMessage[channelID];$newMessage[id]]==false]==true;]
    $onlyIf[$getGuildVar[msglogeditchannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogeditchannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[msglogeditchannel];$clientID;ViewChannel;SendMessages]==true;]
$if[$getGuildVar[includebots]==off;
$onlyIf[$isBot[$authorID]==false;]
]
$if[$and[$charCount[$newMessage[content]]>=4096;$charCount[$oldMessage[content]]>=4096];
$sendMessage[$getGuildVar[msglogeditchannel];
$attachment[
**Member:** <@$authorID>
**Channel:** <#$channelID>
Message Link: $messageLink[$channelID;$newMessage[id]]
Message ID: $newMessage[id] $if[$messageAttachmentCount[$channelID;$newMessage[id]]!=0;
Attachments:
$callFunction[autoListText;$messageAttachments[$channelID;$newMessage[id];, ];, ]
]

**Before**
$oldMessage[content]
**After**
$newMessage[content]
;msgedit-logs.txt;true]
]
;
$sendMessage[$getGuildVar[msglogeditchannel];
$author[Message edited!;$userAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelID>
**Message:** $messageLink[$channelID;$newMessage[id]] ($hyperlink[Jump;$messageLink[$channelID;$newMessage[id]]]) $if[$messageAttachmentCount[$channelID;$newMessage[id]]!=0;
**Attachments:** $messageAttachments[$channelID;$newMessage[id];, ]
]

**Before**
$oldMessage[content]
**After**
$newMessage[content]
    ]
   $color[Blue]
]
]
`
}]
