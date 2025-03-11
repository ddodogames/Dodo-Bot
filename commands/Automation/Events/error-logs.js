module.exports = {
name: "Error logger",
type: "functionError",
channel: "$getVar[errorchannel]",
code: `$author[Error detected!;$clientAvatar]
$description[**Error code**:
\`\`\`$handleError[error]\`\`\`
]
$addField[**Information**;
Function name: \`$handleError[function]\`
Command name: \`$get[commandname]\`
Server: \`$guildName\` (\`$guildID\`)
]
$color[Yellow]
$footer[Occurred on]
$addTimestamp

$let[commandname;$advancedReplaceText[$checkCondition[$handleError[command]==];true;undefined;false;$handleError[command]]]
$onlyIf[$hasPermsInChannel[$getVar[errorchannel];$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$channelExists[$getVar[errorchannel]]==true;]
$onlyIf[$getVar[errorsdisabled]==false;]
$onlyIf[$getVar[errorchannel]!=none;]
$onlyIf[$getVar[errorsystem]==on;]

`
}
