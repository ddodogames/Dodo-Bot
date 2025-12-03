module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==triviasettings;$selectMenuValues==triviatypeoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$title[Type]
$description[This will decide how Trivia will start. **Multiple** means the game will start with 4 answers. **Single** means the game will start with a "true" or "false" as the only answers!]
$addField[Current Setup;$toTitleCase[$getUserVar[trivia_type]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviatypetoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==triviatypetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getUserVar[trivia_type]==single];true;multiple;false;single]]
$setUserVar[trivia_type;$get[settingdecide]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$toTitleCase[$getUserVar[trivia_type]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviatypetoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[The game will now start in $toTitleCase[$getUserVar[trivia_type]]!
$ephemeral]



`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==triviasettings;$selectMenuValues==triviadifficultyoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$title[Difficulty]
$description[This option is dedicated to changing current difficulty for Trivia. Choose a difficulty-set available below.]
$addField[Current Setup;$toTitleCase[$getUserVar[trivia_difficulty]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviaeasyoption_$authorID;Easy;Secondary]
$addButton[triviamediumoption_$authorID;Medium;Secondary]
$addButton[triviahardoption_$authorID;Hard;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$checkContains[$advancedTextSplit[$customID;_;0];triviaeasyoption;triviamediumoption;triviahardoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[difficultychooser;$advancedReplace[$advancedTextSplit[$customID;_;0];triviaeasyoption;easy;triviamediumoption;medium;triviahardoption;hard]]

$onlyIf[$get[difficultychooser]!=$getUserVar[trivia_difficulty];
$interactionReply[This Difficulty-set is already used
$ephemeral
]]

$setUserVar[trivia_difficulty;$get[difficultychooser]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$toTitleCase[$getUserVar[trivia_difficulty]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviaeasyoption_$authorID;Easy;Secondary]
$addButton[triviamediumoption_$authorID;Medium;Secondary]
$addButton[triviahardoption_$authorID;Hard;Secondary]
]

$interactionFollowUp[
Difficulty has been set to $toTitleCase[$get[difficultychooser]]!
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==floodsettings;$selectMenuValues==flooddifficultyoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[difficulty;$advancedReplace[$getUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]

$interactionUpdate[
$title[Difficulty]
$description[This option is dedicated to changing current Difficulty for Flood. Choose a Difficulty-set available below. ]
$addField[Current Setup;$get[difficulty]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[floodsettings_$authorID;Select a option;false;1;1]
$addOption[Difficulty;How hard the game should be?;flooddifficultyoption;;false]
$addActionRow
$addButton[floodeasyoption_$authorID;Easy;Secondary]
$addButton[floodmediumoption_$authorID;Medium;Secondary]
$addButton[floodhardoption_$authorID;Hard;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$checkContains[$advancedTextSplit[$customID;_;0];floodeasyoption;floodmediumoption;floodhardoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[difficultychooser;$advancedReplace[$advancedTextSplit[$customID;_;0];floodhardoption;18;floodmediumoption;13;floodeasyoption;8]]

$onlyIf[$get[difficultychooser]!=$getUserVar[flood_difficulty];
$interactionReply[This Difficulty-set is already used
$ephemeral
]]

$setUserVar[flood_difficulty;$get[difficultychooser]]
$let[difficulty;$advancedReplace[$getUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[difficulty]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[floodsettings_$authorID;Select a option;false;1;1]
$addOption[Difficulty;How hard the game should be?;flooddifficultyoption;;false]
$addActionRow
$addButton[floodeasyoption_$authorID;Easy;Secondary]
$addButton[floodmediumoption_$authorID;Medium;Secondary]
$addButton[floodhardoption_$authorID;Hard;Secondary]

]

$interactionFollowUp[
Difficulty has been set to $get[difficulty]!
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==hangmansettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$checkContains[$selectMenuValues;nature;sport;color;camp;fruit;discord;winter;pokemon]==true;]


$onlyIf[$selectMenuValues!=$getUserVar[hangman_theme];
$interactionReply[This theme is already used
$ephemeral
]]

$setUserVar[hangman_theme;$selectMenuValues]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Theme:** $toTitleCase[$getUserVar[hangman_theme]]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[hangmansettings_$authorID;Select a theme;false;1;1]
$addOption[Nature;Set the theme to Nature-related;nature;;false]
$addOption[Sport;Set the theme to Sport-related;sport;;false]
$addOption[Color;Set the theme to Color-related;color;;false]
$addOption[Camp;Set the theme to Camp-related;camp;;false]
$addOption[Fruit;Set the theme to Fruit-related;fruit;;false]
$addOption[Discord;Set the theme to Discord-related;discord;;false]
$addOption[Winter;Set the theme to Winter-related;winter;;false]
$addOption[Pokemon;Set the theme to Pokemon-related;pokemon;;false]

]

$interactionFollowUp[
Theme has been set to $toTitleCase[$selectMenuValues]!
$ephemeral
]
`
}]
