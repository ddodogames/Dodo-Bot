module.exports = [{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[{newEmbed:{title:Auto Reply}{description:
     Having this option enabled will allow the bot to respond by pinging, which will let you know on what prefix it currently uses in this server.

Disable this If It's purposefully used for spamming.
}{field:**Current Setup**:
**Auto Reply**#COLON# \`$get[autopingreply]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:autoreplytoggle_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
   
$let[autopingreply;$advancedReplaceText[$getGuildVar[autopingreply];on;Enabled;off;Disabled]]
$onlyIf[$getSelectMenuValues[all]==autoreply;]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Auto Reply}{description:
     Having this option enabled will allow the bot to respond by pinging, which will let you know on what prefix it currently uses in this server.

Disable this If It's purposefully used for spamming.
}{field:**Current Setup**:
**Auto Reply**#COLON# \`$get[autopingreply]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:autoreplytoggle_$authorID:false}}]


  $let[autopingreply;$advancedReplaceText[$getGuildVar[autopingreply];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[autopingreply]==on];true;From now on, I will reply by pings!;false;From now on, I will no longer reply by pings!]]
$setGuildVar[autopingreply;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[autopingreply]==on];true;off;false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==autoreplytoggle;]

`
},{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in message logs.

By default, this is enabled but you can choose to disable it for whatever reason.}{field:**Current Setup**:
**Include Bots**#COLON# \`$get[includebots]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:includebotstoggle_$authorID:false}}]

$let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    
$onlyIf[$getSelectMenuValues[all]==includebots;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in message logs.

By default, this is enabled but you can choose to disable it for whatever reason.}{field:**Current Setup**:
**Include Bots**#COLON# \`$get[includebots]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:includebotstoggle_$authorID:false}}]



  $let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;From now on, Bots will be included in logs!;false;From now on, Bots will no longer be included in logs!]]
$setGuildVar[includebots;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;off;false;on]]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==includebotstoggle;]


`
},{
      type: "interaction",
      prototype: "selectMenu",
      code: `$interactionUpdate[{newEmbed:{title:Anonymous}{description:
This option allows moderator names to not be revealed in Ban logs!

For security reasons, this feature is only exclusive to Ban logs!

-# This does not apply to bots by default
}{field:**Current Setup**:
**Anonymous**#COLON# \`$get[anonymous]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:anonymoustoggle_$authorID:false}}]

      $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
  ]

$let[anonymous;$advancedReplaceText[$getGuildVar[anonymous];on;Enabled;off;Disabled]]
  $onlyIf[$getSelectMenuValues[all]==anonymous;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]
  `
  },{
      type: "interaction",
      prototype: "button",
      code: `
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Anonymous}{description:
This option allows moderator names to not be revealed in Ban logs!

For security reasons, this feature is only exclusive to Ban logs!

-# This does not apply to bots by default
}{field:**Current Setup**:
**Anonymous**#COLON# \`$get[anonymous]\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a option:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings!:false}{stringInput:Include Bots:includebots:Whether or not to include bots in message logs.:false}{stringInput:Anonymous:anonymous:Hide moderator names being revealed:false}}}{actionRow:{button:Toggle:2:anonymoustoggle_$authorID:false}}]



$let[anonymous;$advancedReplaceText[$getGuildVar[anonymous];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[anonymous]==on];true;Anonymous has been enabled!;false;Anonymous has been disabled!]]
$setGuildVar[anonymous;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[anonymous]==on];true;off;false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==anonymoustoggle;]


  `
  }]
