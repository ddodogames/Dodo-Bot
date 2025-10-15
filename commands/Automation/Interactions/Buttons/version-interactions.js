module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Bumped aoi.js to version \`6.11.1\`
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
* Fixed weird formatting in "General" section on \`periodic-table\` command
* Fixed \`prefix\` usage part in \`commandinfo\` where \`new prefix\` parameter was "required" despite it being optional
* (Devs only) Fixed grammar in \`refreshuserapps\` error for when user apps are already created
* (Source code) Make dotenvx look for \`.env\` or \`.env.local\` to avoid potential problems
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
* (Pre-release only) Incomplete builds will now refer to themselves as "Canary" rather than "Pre-release"
  * Released ones will still retain the "Pre-release" type
* (Source code) Bumped \`@dotenvx/dotenvx\` to version \`1.51.0\`
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
