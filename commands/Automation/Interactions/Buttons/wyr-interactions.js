module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==wyr-ops1;]
$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$messageID;no]==no;
$interactionReply[
$ephemeral
You have already voted.
]]

$jsonLoad[wyrdata;$getMessageVar[wyr;$messageID]]
$!jsonSet[wyrdata;upvotes;$sum[$env[wyrdata;upvotes];1]]
$setMessageVar[wyr;$env[wyrdata];$messageID]

$let[wyr1-votes;$env[wyrdata;upvotes]]
$let[wyr2-votes;$env[wyrdata;downvotes]]


$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[wyr-ops1;$get[wyr1-votes];Secondary;1️⃣]
$addButton[wyr-ops2;$get[wyr2-votes];Secondary;2️⃣]
]

$setMessageVar[wyr-hasuservoted-$authorID;yes;$messageID]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==wyr-ops2;]
$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$messageID;no]==no;
$interactionReply[
$ephemeral
You have already voted.
]]

$jsonLoad[wyrdata;$getMessageVar[wyr;$messageID]]
$!jsonSet[wyrdata;downvotes;$sum[$env[wyrdata;downvotes];1]]
$setMessageVar[wyr;$env[wyrdata];$messageID]

$let[wyr1-votes;$env[wyrdata;upvotes]]
$let[wyr2-votes;$env[wyrdata;downvotes]]


$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[wyr-ops1;$get[wyr1-votes];Secondary;1️⃣]
$addButton[wyr-ops2;$get[wyr2-votes];Secondary;2️⃣]
]

$setMessageVar[wyr-hasuservoted-$authorID;yes;$messageID]
`
}]
