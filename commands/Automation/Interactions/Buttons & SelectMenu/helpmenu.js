module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==helpmenu;$selectMenuValues==main]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

    $interactionUpdate[
    $title[Main]
    $addField[**General commands**;
\`about\`, \`canary\`, \`report\`, \`perms\`, \`settings\`, \`commandinfo\`
]
    $addField[**About the bot**;
\`ping\`, \`version\`, \`stats\`, \`credits\`, \`invite\`
    ]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
   $if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==helpmenu;$selectMenuValues==fun]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

    $interactionUpdate[
    $title[Entertainment]
    $addField[**Games**;
\`rps\`, \`tictactoe\`, \`findtheflag\`, \`matchpairs\`, \`findemoji\`, \`hangman\`, \`snake\`, \`c4\`, \`2048\`, \`minesweeper\`, \`trivia\`, \`coinflip\`, \`flood\`, \`wordle\`, \`gtp\`, \`wyr\`
 ]
   $addField[**Text**;
\`howgamer\`, \`whoasked\`, \`8ball\`, \`say\`, \`reverse\`, \`randomtopic\`, \`joke\`, \`clap\`, \`mock\`, \`yesorno\`, \`lulcat\`, \`fact\`, \`showerthoughts\`
]
    $addField[**Images**;
\`gun\`, \`jail\`, \`couldread\`, \`nokia\`, \`greyscale\`, \`ad\`, \`drip\`, \`invert\`, \`pet\`, \`wanted\`, \`comment\`, \`whereiseveryone\`, \`clown\`
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
    ]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==helpmenu;$selectMenuValues==leveling]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


    $interactionUpdate[
    $title[Leveling]
    $addField[**Commands**;\`leveling\`, \`rank\`, \`leaderboard\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
    ]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==helpmenu;$selectMenuValues==util]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


    $interactionUpdate[
    $title[Utility]
    $addField[**Management**;
\`suggest-setup\`, \`poll-set\`, \`setup-logs\`, \`welcomer\`, \`leave\`, \`prefix\`, \`reset-prefix\`
    ]
$addField[**Info**;
\`userinfo\`, \`roleinfo\`, \`serverinfo\`]
$addField[**Miscellaneous**;
\`randomcolor\`, \`avatar\`, \`banner\`, \`morse\`, \`aur\`, \`periodic-table\`, \`suggest\`, \`poll\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
    ]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==helpmenu;$selectMenuValues==dev]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


    $interactionUpdate[
    $title[Developer]
    $addField[**Tools**;
\`eval\`, \`exec\`, \`update\`, \`serverlist\`, \`jseval\`, \`readfile\`
    ]
$addField[**Bot Management**;
\`dev-panel\`, \`wipedb\`, \`shutdown\`, \`set-customstatus\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$clientOwnerID[true;| ];$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
    ]
    $addOption[Utility;Utility module;util;;false]
    ]`
}]
