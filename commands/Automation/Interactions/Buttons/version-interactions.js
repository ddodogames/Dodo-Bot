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
* Added 3 commands called \`channelinfo\`, \`roleinfo\` and \`emojipasta\`
* Added alias \`randomrgb\` and \`botinfo\` for \`randomcolor\` and \`about\`
* Added also alias \`dev\` and \`unstable\` for \`canary\`
* Starting from this release, the Canary version will now have its own unique embed color to distinguish it from stable releases
* Increased the max limit of pages in \`leaderboard\` to 25
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
* A couple of grammar fixes have been added (as well as a lot of wording changes).
* (Devs only) Database backups will no longer use \`/\` to avoid issues on Windows
* Fixed an issue where a misleading message appeared when turning off anonymous option
* Fixed an issue where the description for placeholders in the \`leveling\` command mentions welcomer message instead of the leveling one
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
* (Source code) Updated \`@dotenvx/dotenvx\` to version \`1.73.1\`
* (Source code) Renamed the config option \`AllowBotManagers\` to \`AllowBotMembers\`
* (Source code) Renamed \`config.js\` to \`config.example.js\`
  * This only affects new installs of the bot as \`config.js\` will need to be created manually
* (Source code) Split custom functions into separate files for quicker updating
* Temporarily disable \`wordle\` command since it stopped working and some other changes as well
* (Source code) Dodo-Bot should now work on Node.js v26 normally (aka the upcoming LTS release)
* The default embed color is now \`#3C4F68\`
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
