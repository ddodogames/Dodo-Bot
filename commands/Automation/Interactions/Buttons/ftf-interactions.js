module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==ftf1;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$if[$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]==true;

$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Success;🏳️;true]
$addButton[ftf2_$authorID;;Secondary;2️⃣;true]
$addButton[ftf3_$authorID;;Secondary;3️⃣;true]
]

$interactionFollowUp[
$title[You found the flag!]
$description[Nice guess, the flag was on zone 1! 🏳️]
$color[DarkGreen]
]
;
$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Danger;1️⃣;true]
$addButton[ftf2_$authorID;;Secondary;2️⃣;true]
$addButton[ftf3_$authorID;;Secondary;3️⃣;true]
]

$interactionFollowUp[
$title[Aww.. miss!]
$description[Wrong guess... the flag was on zone $randomText[2;3]. 🏴]
$color[Red]
]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==ftf2;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$if[$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]==true;

$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Secondary;1️⃣;true]
$addButton[ftf2_$authorID;;Success;🏳️;true]
$addButton[ftf3_$authorID;;Secondary;3️⃣;true]
]

$interactionFollowUp[
$title[You found the flag!]
$description[Nice guess, the flag was on zone 2! 🏳️]
$color[DarkGreen]
]
;
$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Secondary;1️⃣;true]
$addButton[ftf2_$authorID;;Danger;2️⃣;true]
$addButton[ftf3_$authorID;;Secondary;3️⃣;true]
]

$interactionFollowUp[
$title[Aww.. miss!]
$description[Wrong guess... the flag was on zone $randomText[1;3]. 🏴]
$color[Red]
]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==ftf3;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$if[$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]==true;

$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Secondary;1️⃣;true]
$addButton[ftf2_$authorID;;Secondary;2️⃣;true]
$addButton[ftf3_$authorID;;Success;🏳️;true]
]

$interactionFollowUp[
$title[You found the flag!]
$description[Nice guess, the flag was on zone 3! 🏳️]
$color[DarkGreen]
]
;
$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$addActionRow
$addButton[ftf1_$authorID;;Secondary;1️⃣;true]
$addButton[ftf2_$authorID;;Secondary;2️⃣;true]
$addButton[ftf3_$authorID;;Danger;3️⃣;true]
]

$interactionFollowUp[
$title[Aww.. miss!]
$description[Wrong guess... the flag was on zone $randomText[1;2]. 🏴]
$color[Red]
]
]
`
}]
