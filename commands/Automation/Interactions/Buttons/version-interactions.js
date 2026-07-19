module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionchanges;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Changes]
$description[
* Removed the \`gtp\` command due to the api still being dead with no alternatives available
  * \`wordle\` has also been removed for the same reason as mentioned above
* Temporarily disable \`showerthoughts\` as it stopped working
* Added a command called \`github\`
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary;;true]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionbugfixes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Bug Fixes]
$description[
* The bot's source code will now be set up peacefully again with npm v12 installations
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary;;true]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionother;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Other]
$description[
* (Source code) Bumped \`@dotenvx/dotenvx\` package to \`v2.14.0\`
* The progressbar in \`rank\` cmd has been slightly updated to sometimes include \`#\` at some points
* Include a link in \`canary\` for users who want to run the latest Canary build on their bots
* (Source code) Set \`prefixCaseInsensitive\` to \`false\` by default in \`config.example.js\` file for new installs
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary;;true]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionhomebutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[releasedatetype;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Last updated on;false;Released on]]

$interactionUpdate[
$title[Dodo-Bot version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[release_type]
* **$get[releasedatetype]**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./assets/warning.png;warning.png]
$footer[Testing is recommended;attachment://warning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/releases;Changelog history;Link;📜]
]`
}]
