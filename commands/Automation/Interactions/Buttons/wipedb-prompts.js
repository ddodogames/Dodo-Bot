module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==wipedbconfirm;]
    $onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
    $ephemeral
    ]]

    $interactionUpdate[
        $title[Please wait..]
        $description[The database is being deleted...]
        $color[Yellow]
    ]
    $wait[5000]
    $interactionReply[
    $title[Done!]
    $description[The database has been successfully deleted!]
    $color[DarkGreen]
    $attachment[./assets/checkmark.png;checkmark.png]
    $thumbnail[attachment://checkmark.png]
    ]
    $wipeDB
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==wipedbdeny;]
    $onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
    $ephemeral
    ]]


    $interactionUpdate[
        $fetchEmbeds[$channelID;$messageID;0]
        $footer[Cancelled the confirmation]
        $addActionRow
        $addButton[wipedbconfirm_$authorID;Yes;Secondary;;true]
        $addButton[wipedbdeny_$authorID;No;Secondary;;true]
    ]

    $interactionFollowUp[Alright, the current DB will continue to exist then.
    $ephemeral
    ]
    `
}]
