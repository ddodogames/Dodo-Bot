module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Developer Panel}{description:This panel allows you to change some things the bot operates behind the scenes. 
    
To change a option, use the select menu below to do so.}{color:Yellow}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/devsettings.png}}{actionRow:{selectMenu:devmenu_$authorID:Select a option:1:1:false:{stringInput:Bot Invitation Message:botwelcome:Whether or not the bot should greet new servers.:false:👋}{stringInput:Error Logging:errorlog:Send errors to specific channel.:false:📢}{stringInput:Embed color:botembedcolor:Change the current embed color used in all commands.:false:🎨}{stringInput:Pre-release:botdevmode:Whether or not to enable Pre-release mode.:false:🚧}{stringInput:Startup:botstartup:Choose a channel for bot's startup msgs to be sent:false:🚦}{stringInput:Show build info:showbuildinfo:Whether or not to enable "Build Info" in version cmd:false:🛠️}{stringInput:Member requirement:memberrequirement:How much members are required for new servers:false:📋}}}{actionRow:{button:Leave a server:2:leaveserverbutton_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==developermainpage;]
`
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Bot Invitation Message}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.
}{field:**Current Setup**:
**Bot Invitation Message**#COLON# \`$get[botinvitationconfig]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botgreettoggle_$authorID:false:🔄}}]


$let[botinvitationconfig;$advancedReplaceText[$checkCondition[$getVar[botinvitationmessage]==on];true;Enabled;false;Disabled]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botwelcome;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
`
},{
        type: "interaction",
        prototype: "button",
        code: `
$interactionFollowUp[$get[resultmessage];true]

$interactionUpdate[{newEmbed:{title:Bot Invitation Message}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.
}{field:**Current Setup**:
**Bot Invitation Message**#COLON# \`$get[botinvitationconfig]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botgreettoggle_$authorID:false:🔄}}]


$let[botinvitationconfig;$advancedReplaceText[$checkCondition[$getVar[botinvitationmessage]==on];true;Enabled;false;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getVar[botinvitationmessage]==on];true;Dodo-Bot will now welcome new servers!;false;Dodo-Bot will no longer welcome new servers!]]
$setVar[botinvitationmessage;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getVar[botinvitationmessage]==on];true;off;false;on]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botgreettoggle;]

        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.
}{field:**Current Setup**:
* **Error log**#COLON# \`$get[errorsystem]\`
* **Error Channel**#COLON# $get[errorchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:errorlogtoggle_$authorID:false:🔄}{button:Set channel:2:errorlogsetupchannel_$authorID:false}}]

    $let[errorsystem;$advancedReplaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled;false;Disabled]]
    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

$onlyIf[$getVar[errorsdisabled]==false;To configure this option, you need to disable \`DisableAllErrors\` from setup options first.
{ephemeral}
{interaction}
]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==errorlog;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.
}{field:**Current Setup**:
* **Error log**#COLON# \`$get[errorsystem]\`
* **Error Channel**#COLON# $get[errorchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:errorlogtoggle_$authorID:false:🔄}{button:Set channel:2:errorlogsetupchannel_$authorID:false}}]

    $let[errorsystem;$advancedReplaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled;false;Disabled]]
    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getVar[errorsystem]==on];true;Error logs will now be logged!;false;Error logs will now no longer be logged!]]
  $setVar[errorsystem;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getVar[errorsystem]==on];true;off;false;on]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogtoggle;]

        `
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Error messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[errorchannel]
}{color:Yellow}}{actionRow:{selectMenu:errorlogchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:errorlogpage_$authorID:false:↩️}{button:Reset:2:errorresetchannel_$authorID:false}}]
    
    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogsetupchannel;]
`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `

$interactionFollowUp[Successfully set <#$getSelectMenuValues[all]> as the error log channel!;true]
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Error messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[errorchannel]
}{color:Yellow}}{actionRow:{selectMenu:errorlogchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:errorlogpage_$authorID:false:↩️}{button:Reset:2:errorresetchannel_$authorID:false}}]
    
    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

$setVar[errorchannel;$getSelectMenuValues[all]]

$onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getVar[errorchannel];
    This channel is already used for Error messages. Please, set a different channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$channelType[$getSelectMenuValues[all]]==text;We only support Text Channels for now.
    Make sure to set an Text channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
    Please set a valid channel which exists inside this server.
    {ephemeral}
    {interaction}
    ]
    

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogchannelmenusetup;]
`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Error messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[errorchannel]
}{color:Yellow}}{actionRow:{selectMenu:errorlogchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:errorlogpage_$authorID:false:↩️}{button:Reset:2:errorresetchannel_$authorID:false}}]

    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

    $deleteVar[errorchannel;;main]

    $onlyIf[$getVar[errorchannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorresetchannel;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.
}{field:**Current Setup**:
* **Error log**#COLON# \`$get[errorsystem]\`
* **Error Channel**#COLON# $get[errorchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:errorlogtoggle_$authorID:false:🔄}{button:Set channel:2:errorlogsetupchannel_$authorID:false}}]

    $let[errorsystem;$advancedReplaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled;false;Disabled]]
    $let[errorchannel;$advancedReplaceText[$checkCondition[$getVar[errorchannel]==none];true;none;false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogpage;]
`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Embed color}{description:
   This option allows you to change the current embed color used across commands of Dodo-Bot. To change the current used embed color, you will need to have a valid hex code of a color in order to proceed.

-# You can use the word \`random\` on "Set Color" button to get a random color!
}{field:**Current Hex code**:
* \`$getVar[embedcolor]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set Color:2:setbotembedcolor_$authorID:false}{button:Preview:2:embedcolorpreview_$authorID:false}{button:Reset:2:resetembedcolor_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botembedcolor;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
        `},{
        type: "interaction",
        prototype: "button",
        code: `

$interactionModal[Set Color;embedcolorsetresult;
{actionRow:
    {textInput:Hex code:1:hexInput:true:e.g, $getVar[originalembedcolor]:0:7:$getVar[embedcolor]}
  }]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setbotembedcolor;]
`
    },{
        name: "embedcolorsetresult",
        type: "interaction",
        prototype: "modal",
        code: `$interactionFollowUp[\`$get[embedcolorinput]\` will now be used as the new embed color!;true]
$interactionUpdate[{newEmbed:{title:Embed color}{description:
   This option allows you to change the current embed color used across commands of Dodo-Bot. To change the current used embed color, you will need to have a valid hex code of a color in order to proceed.

-# You can use the word \`random\` on "Set Color" button to get a random color!
}{field:**Current Hex code**:
* \`$getVar[embedcolor]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set Color:2:setbotembedcolor_$authorID:false}{button:Preview:2:embedcolorpreview_$authorID:false}{button:Reset:2:resetembedcolor_$authorID:false}}]

$setVar[embedcolor;$get[embedcolorinput]]

$onlyIf[$isValidColor[$get[embedcolorinput]]==true;
Your hex code containing the color is incorrect! Please, double check your hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$isValidHex[$get[embedcolorinput]]==true;
You did not provide a hex code! Please, make sure to provide a actual hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$stringStartsWith[$get[embedcolorinput];#]==true;
Your hex code must start with a \`#\`! Please, try again.{ephemeral}
{interaction}]

$let[embedcolorinput;$advancedReplaceText[$checkCondition[$stringStartsWith[$textInputValue[hexInput];random]==true];true;#$randomColor;false;$textInputValue[hexInput]]]

`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Embed color has been reset!;true]
$interactionUpdate[{newEmbed:{title:Embed color}{description:
   This option allows you to change the current embed color used across commands of Dodo-Bot. To change the current used embed color, you will need to have a valid hex code of a color in order to proceed.

-# You can use the word \`random\` on "Set Color" button to get a random color!
}{field:**Current Hex code**:
* \`$getVar[embedcolor]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set Color:2:setbotembedcolor_$authorID:false}{button:Preview:2:embedcolorpreview_$authorID:false}{button:Reset:2:resetembedcolor_$authorID:false}}]

    $deleteVar[embedcolor;;main]

    $onlyIf[$getVar[embedcolor]!=$getVar[originalembedcolor];
    The embed color is already at it's default setting.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==resetembedcolor;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{title:Preview}{description:This is how the color will look on embeds!}{footer:Pretty cool right?}{color:$getVar[embedcolor]}};all;true]


        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==embedcolorpreview;]`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Pre-release}{description:
   This option allows you on whether or not the current build used should be marked as development build. By default, it is commonly enabled for development builds as expected.

Disabling this will cause the build to identify itself as a "Stable" build with development build warnings being absent as well!
}{field:**Current Setup**:
**Pre-release**#COLON# \`$get[pre-release]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:togglebotdevmode_$authorID:false}}]


$let[pre-release;$advancedReplaceText[$getVar[pre_release];on;Enabled;off;Disabled]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botdevmode;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
        `},{
        type: "interaction",
        prototype: "button",
        code: `$ifAwaited[$getVar[pre_release]==on;{execute:Enable-pre-release};{execute:Disable-pre-release}]
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Pre-release}{description:
   This option allows you on whether or not the current build used should be marked as development build. By default, it is commonly enabled for development builds as expected.

Disabling this will cause the build to identify itself as a "Stable" build with development build warnings being absent as well!
}{field:**Current Setup**:
**Pre-release**#COLON# \`$get[pre-release]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:togglebotdevmode_$authorID:false}}]


$let[pre-release;$advancedReplaceText[$getVar[pre_release];on;Enabled;off;Disabled]]

$let[resultmessage;$advancedReplaceText[$checkCondition[$getVar[pre_release]==on];true;Pre-release mode will now be enabled!;false;Pre-release mode will now no longer be enabled!]]
  $setVar[pre_release;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getVar[pre_release]==on];true;off;false;on]]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]

        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglebotdevmode;]
        `},{
            type: "interaction",
            prototype: "selectMenu",
            code: `$interactionUpdate[{newEmbed:{title:Startup}{description:
This option let's you set a channel for the bot to inform users that it became online to use.
}{field:**Current Setup**:
* **Startup**#COLON# \`$get[startupfeature]\`
* **Startup channel**#COLON# $get[startupchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botstartuptoggle_$authorID:false:🔄}{button:Set Channel:2:setbotstartupchannel_$authorID:false}}]
    
    
    $let[startupfeature;$advancedReplaceText[$checkCondition[$getVar[startupchannelsystem]==on];true;Enabled;false;Disabled]]
        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]
    
    
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
    {interaction}]
        $onlyIf[$getSelectMenuValues[all]==botstartup;]
            $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
            `},{
            type: "interaction",
            prototype: "button",
            code: `$interactionFollowUp[$get[resultmessage];true]
    $interactionUpdate[{newEmbed:{title:Startup}{description:
This option let's you set a channel for the bot to inform users that it became online to use.
}{field:**Current Setup**:
* **Startup**#COLON# \`$get[startupfeature]\`
* **Startup channel**#COLON# $get[startupchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botstartuptoggle_$authorID:false:🔄}{button:Set Channel:2:setbotstartupchannel_$authorID:false}}]
    
    
    $let[startupfeature;$advancedReplaceText[$checkCondition[$getVar[startupchannelsystem]==on];true;Enabled;false;Disabled]]
        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]
    
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getVar[startupchannelsystem]==on];true;Startup has been enabled!;false;Startup has been disabled!]]
      $setVar[startupchannelsystem;$get[newtoggledsetting]]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getVar[startupchannelsystem]==on];true;off;false;on]]
    
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
    {interaction}]
            $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botstartuptoggle;]
            `},{
            type: "interaction",
            prototype: "button",
            code: `
    
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Startup messages to be sent in. Use the select menu below for the channel to use!
        
**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[startupchannel]
}{color:Yellow}}{actionRow:{selectMenu:botstartupchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:startupbotpage_$authorID:false:↩️}{button:Reset:2:startupresetchannel_$authorID}}]
        
        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]
    
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
    {interaction}]
            $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setbotstartupchannel;]
    `
        },{
            type: "interaction",
            prototype: "selectMenu",
            code: `
    
    $interactionFollowUp[Successfully set <#$getSelectMenuValues[all]> as the startup channel!;true]
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Startup messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[startupchannel]
}{color:Yellow}}{actionRow:{selectMenu:botstartupchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:startupbotpage_$authorID:false:↩️}{button:Reset:2:startupresetchannel_$authorID}}]
        
        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]
    
    $setVar[startupchannel;$getSelectMenuValues[all]]
    
    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
        \`ViewChannel\`
        \`SendMessages\`
        {ephemeral}
        {interaction}
        ]
        
        $onlyIf[$getSelectMenuValues[all]!=$getVar[startupchannel];
        This channel is already used for Error messages. Please, set a different channel instead.
        {ephemeral}
        {interaction}
        ]
        
        $onlyIf[$channelType[$getSelectMenuValues[all]]==text;We only support Text Channels for now.
        Make sure to set an Text channel instead.
        {ephemeral}
        {interaction}
        ]
        
        $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
        Please set a valid channel which exists inside this server.
        {ephemeral}
        {interaction}
        ]
        
    
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
        {ephemeral}
        {interaction}
        ]
     $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botstartupchannelmenusetup;]
    `
        },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Startup messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[startupchannel]
}{color:Yellow}}{actionRow:{selectMenu:botstartupchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:startupbotpage_$authorID:false:↩️}{button:Reset:2:startupresetchannel_$authorID}}]

        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]

    $deleteVar[startupchannel;;main]

    $onlyIf[$getVar[startupchannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==startupresetchannel;]

    `
    },{
            type: "interaction",
            prototype: "button",
            code: `$interactionUpdate[{newEmbed:{title:Startup}{description:
    This option let's you set a channel for the bot to inform users that it became online to use.
}{field:**Current Setup**:
* **Startup**#COLON# \`$get[startupfeature]\`
* **Startup channel**#COLON# $get[startupchannel]
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botstartuptoggle_$authorID:false:🔄}{button:Set Channel:2:setbotstartupchannel_$authorID:false}}]
    
    
    $let[startupfeature;$advancedReplaceText[$checkCondition[$getVar[startupchannelsystem]==on];true;Enabled;false;Disabled]]
        $let[startupchannel;$advancedReplaceText[$checkCondition[$getVar[startupchannel]==none];true;none;false;<#$getVar[startupchannel]> (\`$getVar[startupchannel]\`)]]
    
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
    {interaction}]
            $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==startupbotpage;]
            `},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Show build info}{description:
This option allows you to either enable or disable "Build Info" page seen in \`--buildinfo\` flag of \`version\` command.

When enabled, information such as branch, version codename, it's current progress, etc will be shown.
}{field:**Current Setup**:
**Show build info**#COLON# \`$get[showbuildinfo]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:showbuildinfotoggle_$authorID:false:🔄}}]


$let[showbuildinfo;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Enabled;false;Disabled]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==showbuildinfo;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
`
},{
        type: "interaction",
        prototype: "button",
        code: `
$interactionFollowUp[$get[resultmessage];true]

$interactionUpdate[{newEmbed:{title:Show build info}{description:
This option allows you to either enable or disable "Build Info" page seen in \`--buildinfo\` flag of \`version\` command.

When enabled, information such as branch, version codename, it's current progress, etc will be shown.
}{field:**Current Setup**:
**Show build info**#COLON# \`$get[showbuildinfo]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:showbuildinfotoggle_$authorID:false:🔄}}]


$let[showbuildinfo;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Enabled;false;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Build information will be now be shown;false;Build information will no longer be shown!]]
$setVar[showbuildinfo;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;off;false;on]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==showbuildinfotoggle;]

        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Member requirement}{description:
   This option let's you configure how many members are needed for a server so that the bot can join there.

When the requirement is not met, the bot will simply leave the server.
}{field:**Current requirement**:
* \`$getVar[servermemberrequirement]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set requirement:2:setmemberrequirement_$authorID:false}{button:Reset:2:resetmemberrequirement_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==memberrequirement;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
        `},{
        type: "interaction",
        prototype: "button",
        code: `

$interactionModal[Set requirement;memberrequirementsetresult;
{actionRow:
    {textInput:Number to require:1:numberInput:true:e.g, 50:0:100:$getVar[servermemberrequirement]}
  }]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you. {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setmemberrequirement;]
`
    },{
        name: "memberrequirementsetresult",
        type: "interaction",
        prototype: "modal",
        code: `$interactionFollowUp[\`$get[input]\` will now be used as the requirement for new servers!;true]
$interactionUpdate[{newEmbed:{title:Member requirement}{description:
   This option let's you configure how many members are needed for a server so that the bot can join there.

When the requirement is not met, the bot will simply leave the server.
}{field:**Current requirement**:
* \`$getVar[servermemberrequirement]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set requirement:2:setmemberrequirement_$authorID:false}{button:Reset:2:resetmemberrequirement_$authorID:false}}]

$setVar[servermemberrequirement;$get[input]]


$onlyIf[$isInteger[$get[input]]==true;
Number must not be integer.
{ephemeral}
{interaction}
]

$onlyIf[$isNumber[$get[input]]==true;
Please enter a actual number to proceed.
{ephemeral}
{interaction}
]

$let[input;$excludeSpecialChars[$textInputValue[numberInput]]]

`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Requirement has been reset!;true]
$interactionUpdate[{newEmbed:{title:Member requirement}{description:
   This option let's you configure how many members are needed for a server so that the bot can join there.

When the requirement is not met, the bot will simply leave the server.
}{field:**Current requirement**:
* \`$getVar[servermemberrequirement]\`
}{color:Yellow}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set requirement:2:setmemberrequirement_$authorID:false}{button:Reset:2:resetmemberrequirement_$authorID:false}}]

    $deleteVar[servermemberrequirement;;main]

    $onlyIf[$getVar[servermemberrequirement]!=0;
    The requirement is already set to \`0\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==resetmemberrequirement;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `

        $interactionModal[Leave a server;leaveservermodalresult;
        {actionRow:
            {textInput:Server ID:1:numberInput:true:e.g, $guildRandomID:0:160}
        }]


        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
        {ephemeral}
        {interaction}
        ]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leaveserverbutton;]
        `
    },{
        name: "leaveservermodalresult",
        type: "interaction",
        prototype: "modal",
        code: `
        $let[hidetext;$clientLeave[$get[input]]]
        $interactionReply[Successfully left the server "$guildName[$get[input]]"!;all;true]

        $onlyIf[$checkContains[$guildIds;$get[input]]==true;
       I am not in the server you specified.

       To see which servers i'm currently in, run \`$getGuildVar[prefix]serverlist\` to do so!
       {ephemeral}
       {interaction}
        ]

        $onlyIf[$guildExists[$get[input]]==true;
        Please enter a valid server id to proceed.

-# This error can also happen if the server specified is not cached
        {ephemeral}
        {interaction}
        ]

        $onlyIf[$isNumber[$get[input]]==true;
        Please enter a actual number to proceed.
        {ephemeral}
        {interaction}
        ]

        $let[input;$textInputValue[numberInput]]

        `
    }]
    
