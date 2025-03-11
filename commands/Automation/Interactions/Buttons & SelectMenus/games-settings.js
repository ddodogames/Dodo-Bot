module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
* **Single**
* **Multiple**

**Single** starts the game with only "True" or "False" answer for each question. **Multiple** starts the game with multiple answers for each question.
}{field:**Current type**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_type]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Toggle:2:triviatypetoggle_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]


$onlyIf[$getSelectMenuValues[all]==triviatype;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviasettings;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
* **Single**
* **Multiple**

**Single** starts the game with only "True" or "False" answer for each question. **Multiple** starts the game with multiple answers for each question.
}{field:**Current type**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_type]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Toggle:2:triviatypetoggle_$authorID:false}}]


$let[resultmessage;$advancedReplaceText[$checkCondition[$getGlobalUserVar[trivia_type]==single];true;From now on, Trivia will start with only "True" or "False" answer for each question!;false;From now on, Trivia will start with multiple answers for each question!]]
$setGlobalUserVar[trivia_type;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGlobalUserVar[trivia_type]==single];true;multiple;false;single]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviatypetoggle;]

`

},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard the game will be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  

$onlyIf[$getSelectMenuValues[all]==triviadifficulty;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviasettings;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Easy\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard the game will be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]

  $setGlobalUserVar[trivia_difficulty;easy]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=easy;
This difficulty option is already used!
 {ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaopteasy;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Medium\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard the game will be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]

  $setGlobalUserVar[trivia_difficulty;medium]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=medium;
This difficulty option is already used!
 {ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaoptmedium;]


  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Hard\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard the game will be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]

  $setGlobalUserVar[trivia_difficulty;hard]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=hard;
This difficulty option is already used!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaopthard;]


  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with blocks at small size
* **Normal**#COLON# Starts with blocks at medium size
* **Hard**#COLON# Starts with blocks at large size

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$get[floodmode]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  
$onlyIf[$getSelectMenuValues[all]==flooddifficulty;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodsettings;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Easy\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with blocks at small size
* **Normal**#COLON# Starts with blocks at medium size
* **Hard**#COLON# Starts with blocks at large size

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$get[floodmode]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;8]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=8;
  This difficulty option is already used!
  {ephemeral}
{interaction}
]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodopteasy;]



  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Normal\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with blocks at small size
* **Normal**#COLON# Starts with blocks at medium size
* **Hard**#COLON# Starts with blocks at large size

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$get[floodmode]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;13]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=13;
  This difficulty option is already used!
  {ephemeral}
{interaction}
]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodoptnormal;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Hard\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with blocks at small size
* **Normal**#COLON# Starts with blocks at medium size
* **Hard**#COLON# Starts with blocks at large size

To change difficulty to any of the options above, use the buttons below to do so!
}{field:**Current difficulty**:
* \`$get[floodmode]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;18]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=18;
  This difficulty option is already used!
  {ephemeral}
{interaction}
]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodopthard;]

  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionFollowUp[Set Hangman's theme to \`$toLocaleUpperCase[$getSelectMenuValues[all]]\`!;true]
$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:
Welcome to Hangman Themes! To select a theme to use, use the dropdown menu below!
}{field:**Current theme**:
* \`$toLocaleUpperCase[$getGlobalUserVar[hangman_theme]]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:hangmansettings_$authorID:Select a theme:1:1:false:{stringInput:Nature:nature:Sets the theme to Nature-related:false}{stringInput:Sport:sport:Sets the theme to Sport-related:false}{stringInput:Color:color:Sets the theme to Color-related:false}{stringInput:Camp:camp:Sets the theme to Camp-related:false}{stringInput:Fruit:fruit:Sets the theme to Fruit-related:false}{stringInput:Discord:discord:Sets the theme to Discord-related:false}{stringInput:Winter:winter:Sets the theme to Winter-related:false}{stringInput:Pokemon:pokemon:Sets the theme to Pokemon-related:false}}}]

  $setGlobalUserVar[hangman_theme;$getSelectMenuValues[all]]

  $onlyIf[$getSelectMenuValues[all]!=$getGlobalUserVar[hangman_theme];
  This theme is already used!
  {ephemeral}
{interaction}
]

$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$checkContains[$getSelectMenuValues[all];nature;sport;color;camp;fruit;discord;winter;pokemon]==true;]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==hangmansettings;]

  `
}]
