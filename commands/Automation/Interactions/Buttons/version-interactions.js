module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Added Build revision to Build info button seen in \`stats\` command
    }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionchanges;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Bug Fixes}{description:
      * Fixed coinflip buttons being not disabled properly
      * Fixed developer panel's emojis on options disappearing after pressing on a random button then \`Home\` button
      * Fixed message logging delete having a random space before the displayed deleted content is shown
    }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Other}{description:
*There're no changes in this category currently.*
 }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot version}{description:
  * **Version**: $getVar[version]
  * **Release type**: $getVar[release_type]
  * **Build created on**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
  
  Check changes of the version by using the buttons below.
 }{color:$getVar[embedcolor]}}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
      
    }]
