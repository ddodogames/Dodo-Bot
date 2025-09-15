module.exports = [{
name: "Message delete Logs",
type: "messageDelete",
$if: "old",
channel: "$getGuildVar[msglogdeletedchannel]",
code: `$author[Message Deleted!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelUsed>
$message
]
$addTimestamp
$color[Yellow]
$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$message!=;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$hasPermsInChannel[$getGuildVar[msglogdeletedchannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogdeletedchannel]]==true;]
$onlyIf[$getGuildVar[msglogdeletedchannel]!=none;]
$onlyIf[$guildID==$guildID;]

`
},{
    name: "Message update Logs",
    type: "messageUpdate",
    $if: "old",
channel: "$getGuildVar[msglogeditchannel]",
code: `
$ifAwaited[$charCount[$message]>=4096||$charCount[$oldMessage]>=4096;{execute:msgeditlogfilemode};{execute:msgeditlogembedmode}]

$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$oldMessage!=||$message!=;]
$onlyIf[$oldMessage!=$message;]
$onlyIf[$hasEmbeds[$messageID;$channelID]==false;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$hasPermsInChannel[$getGuildVar[msglogeditchannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogeditchannel]]==true;]
$onlyIf[$getGuildVar[msglogeditchannel]!=none;]
$onlyIf[$guildID==$guildID;]

    `
}]
