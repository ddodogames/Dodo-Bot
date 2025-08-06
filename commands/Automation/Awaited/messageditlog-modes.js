module.exports = [{
    name: "msgeditlogfilemode",
    type: "awaited",
    code: `$createFile[
Member: <#$authorID>
Channel: <#$channelID>
Message link: $messageURL[$messageID;$channelID]
Message ID: $messageID

Before:
$oldMessage

After:
$message

$if[$messageAttachments!=; ;Attachments:

$messageAttachments[


]]
;msgedit-logs.txt]

$useChannel[$getGuildVar[msglogeditchannel]]`
},{
    name: "msgeditlogembedmode",
    type: "awaited",
    code: `$author[Message Updated!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelID>
**Message:** $messageURL[$messageID;$channelID] ([Jump]($messageURL[$messageID;$channelID]))$if[$messageAttachments!=;
**Attachments:** $messageAttachments
]

**Before**
$oldMessage
**After**
$message
]
$footer[Message ID: $messageID]
$color[Blue]
$addTimestamp

$useChannel[$getGuildVar[msglogeditchannel]]`
}]
