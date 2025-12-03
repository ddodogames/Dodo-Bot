module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==coinflipretrybutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[number;$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]]
$let[result;$advancedReplace[$checkCondition[$get[number]==true];true;Heads;false;Tails]]

$interactionUpdate[
$title[🪙 Flipping Coin...]
$color[$getGlobalVar[embedcolor]]
]
$wait[5000]
$interactionReply[
$title[You got...]
$description[**$get[result]**]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[coinflipretrybutton_$authorID;Retry;Secondary;🕹️]
]
`
}]
