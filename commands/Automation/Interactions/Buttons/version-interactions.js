module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Moved the "Reset" button in \`leveling\` command into it's settings page
* **Welcomer** & **Leave**#COLON# make \`<username>\` return usernames with discriminator for bots
* Added a button for User app invite (which appears if it's enabled by bot owner) in \`invite\` command
* Added \`<globalname>\` for **Welcomer**, **Leave** and **Leveling**
* Added a new command called \`morse\`

For those running the [source code](https#COLON#//github.com/ddodogames/Dodo-Bot) on their own#COLON#
* Added a option to use random hex codes in \`$getGuildVar[prefix]dev-panel\` command
}{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/refreshedredwarning2.png};]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
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
* Fixed the toggle setting in \`leveling\` randomly including a \`*\` after using the button
* Fixed internal issues related to updating "user app" commands
* Fixed grammar of a error message seen in suggest-set and poll-set
* Fixed "Current Setup" design in leveling, welcomer and leave changing after pressing "Toggle" button
}{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/refreshedredwarning2.png};]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
},{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Other}{description:
* Shortened "Permissions needed" to just "Permission(s)" in cmd \`commandinfo\`
* Slightly updated the ordering of sections in \`stats\` command
* (Source code) Removed a old leftover code for listing roles
* (Source code) The setup file has been rewritten in Javascript
* (Source code) Added a setup option to configure "responding to edited messages" duration
* Updated the list of excluded special characters for leaderboard command
* Added several wording changes to some command descriptions
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/refreshedredwarning2.png};]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
},{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot version}{description:
* **Version**#COLON# $getVar[version]$get[Revision]
* **Release type**#COLON# $getVar[release_type]
* **$get[releasedatetype]**#COLON# <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/ddodogames/Dodo-Bot/releases:false:📜}}]

 $let[Revision;$advancedReplaceText[$checkCondition[$getVar[buildRevision]!=0];true; (Revision $getVar[buildRevision]);false; ]]
 $let[releasedatetype;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Last updated on;false;Released on]]
 $let[devbuild;$if[$getVar[pre_release]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/refreshedredwarning2.png};]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
    }]
