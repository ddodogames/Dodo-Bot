module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==rock;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Results..]
$description[You choose Rock 🌑! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==paper;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Results..]
$description[You choose Paper 📰! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==scissors;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Results..]
$description[You choose Scissors ✂️! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
}]
