module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==shutdownconfirm;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Please wait..]
$description[$username[$clientID] is shutting down...]
$color[Yellow]
]
$wait[5000]
$interactionReply[
    $title[Done!]
    $description[The bot has been successfully shut down!]
    $color[DarkGreen]
    $attachment[./assets/checkmark.png;checkmark.png]
    $thumbnail[attachment://checkmark.png]
]
$wait[3000]
$clientDestroy
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==shutdowndeny;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$fetchEmbeds[$channelID;$messageID;0]
$footer[Cancelled the confirmation]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary;;true]
$addButton[shutdowndeny_$authorID;No;Secondary;;true]
]

$interactionFollowUp[Alright, the bot will continue to operate then.
$ephemeral
]
`
}]
