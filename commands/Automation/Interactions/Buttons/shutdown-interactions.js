module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $shutdown
    $wait[2s]
    $interactionFollowUp[Done!]
    $wait[3s]
    $interactionUpdate[{newEmbed:{title:Please wait}{description:$username[$clientID] is shutting down...}{color:Green}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==shutdownconfirm;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionFollowUp[The bot will continue to operate then.]
    $interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png}{color:Red}}{actionRow:{button:Yes:2:shutdownconfirm_$authorID:true}{button:No:2:shutdowndeny$authorID:true}}]


$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==shutdowndeny;]
`
    }]
