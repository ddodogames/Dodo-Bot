module.exports = [{
  name: "headsinteraction",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$random[1;100]>=38&&$random[1;100]<89]
  
  $interactionFollowUp[GG, **$username**! The coin landed on **Heads**!]
  
  $interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Heads:3:headsbutton:true}{button:Tails:2:tailsbutton:true}}]
  $else
  $interactionFollowUp[You lost! The coin landed on **Tails**!]
  
  $interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Heads:4:headsbutton:true}{button:Tails:2:tailsbutton:true}}]
  $endif
  
$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]


  `
},{
  name: "tailsinteraction",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$random[1;100]>=38&&$random[1;100]<89]
  
  $interactionFollowUp[GG, **$username**! The coin landed on **Tails**!]
  
  $interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Heads:2:headsbutton:true}{button:Tails:3:tailsbutton:true}}]
  $else
  $interactionFollowUp[You lost! The coin landed on **Hands**!]
  
  $interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button:Heads:2:headsbutton:true}{button:Tails:4:tailsbutton:true}}]
  $endif
  
$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]


  `
}]
