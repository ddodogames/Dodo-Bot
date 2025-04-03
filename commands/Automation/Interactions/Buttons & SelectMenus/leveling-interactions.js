module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    
    $interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.
    
    To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.
    
    **Current Setup**
    * $get[levelingsystem]
    }{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleveling_$authorID:false:🔄}{button:Settings:1:levelingsettings_$authorID:false}}]
    
    
    $let[levelingsystem;$advancedReplaceText[$getGuildVar[levelsystem];off;Disabled;on;Enabled]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelinghomepage;]
    
    `
    },{
    type: "interaction",
    prototype: "button",
    code: `$interactionFollowUp[$get[resultmessage];true]
    
    $interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.
    
    To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.
    
    **Current Setup**
    * $get[levelingsystem]}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleveling_$authorID:false:🔄}{button:Settings:1:levelingsettings_$authorID:false}}]
    
    
    $let[levelingsystem;$advancedReplaceText[$getGuildVar[levelsystem];off;Disabled;on;Enabled]]
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;Successfully enabled Leveling!;false;Successfully disabled Leveling!]]

    $setGuildVar[levelsystem;$get[newtoggledsetting];$guildID]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==toggleleveling;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{title:Reset Leveling?}{description:Are you sure you want to reset Leveling in this server? All members (including the ones who left the server) will lose their progress.}{color:Red}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png}}{actionRow:{button:Yes:2:levelingresetconfirm:false}{button:No:2:levelingresetdeny:false}};all;true]

$onlyIf[$getGuildVar[levelsystem]==on;
Leveling must be enabled first.
{ephemeral}
{interaction}
    ]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingreset;]
`
    },{
        name: "levelingresetconfirm",
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[Leveling has been reset!]
$awaitExecute[resetleveling]

$onlyIf[$getGuildVar[islevelingreset]==no;Leveling is already reset in this server.
{ephemeral}
{interaction}
    ]
`
    },{
        name: "levelingresetdeny",
        type: "interaction",
        prototype: "button",
        code: `
$interactionUpdate[The current progress for all members will remain then.]

`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Leveling settings}{description:Welcome to Leveling settings! Select a option to change.


 }{field:**Current Setup**:
**Level up channel#COLON#** $get[levelupchannel]
**Level up message#COLON#** \`$get[levelupmessage]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingotheroptionsmenu_$authorID:Other options:1:1:false:{stringInput:Reset on Leave:resetonleave:Reset user's progress when they leave:false}{stringInput:Exclusions:exclusions:Choose what to exclude from allowing xp:false}}}

    {actionRow:{button:Home:2:levelinghomepage_$authorID:false:🏠}{button:Message:2:levelingsettingmessage_$authorID:false}{button:Placeholders:2:levelingmsgplaceholders_$authorID:false}{button:Reset:4:levelingreset_$authorID:false:⚠️}}
]
    
    

    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagefeature]==on];true;Enabled;false;Disabled]]

    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsettings;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Level up Message}{description:This option is dedicated to changing current options for level up message. Choose an option to change.
    
Press the "Toggle" button to enable/disable the Level up Message or use the other options alternatively to manage level up message settings.}{field:**Current Setup**:
* **Level up channel#COLON#** $get[levelupchannel]
* **Level up message#COLON#** \`$get[levelupmessage]\`
}{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagefeature]==on];true;Enabled;false;Disabled]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsettingmessage;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[$get[resultmessage];true]
    $interactionUpdate[{newEmbed:{title:Level up Message}{description:This option is dedicated to changing current options for level up message. Choose an option to change.

Press the "Toggle" button to enable/disable the Level up Message or use the other options alternatively to manage level up message settings.}{field:**Current Setup**:
* **Level up channel#COLON#** $get[levelupchannel]
* **Level up message#COLON#** \`$get[levelupmessage]\`
}{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagefeature]==on];true;Enabled;false;Disabled]]
    
    
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagefeature]==on];true;From now on, Level up messages will be sent by the bot!;false;From now on, Level up messages will no longer be sent by the bot]]
    $setGuildVar[levelupmessagefeature;$get[newtoggledsetting]]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagefeature]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enablelevelingmessage;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Set Message;levelingsetmsgresult;
    {actionRow:
        {textInput:Message to use:2:textInput:true:e.g, <username> has Leveled up!:0:200:$getGuildVar[levelupmessage]}
      }]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsetmsgmodal;]
    `
    },{
        name: "levelingsetmsgresult",
        type: "interaction",
        prototype: "modal",
        code: `$setGuildVar[levelupmessage;$textInputValue[textInput]]
    $interactionReply[Successfully set the Level up message!;all;true]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!
    
**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[levelupchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingchannelsetup;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Level up messages!;true]
    
    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[levelupchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]
    
    $setGuildVar[levelupmessagechannel;$getSelectMenuValues[all]]
    
    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[levelupmessagechannel];
    This channel is already used for Level up messages. Please, set a different channel instead.
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
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingchannelmenusetup;]
    
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel**:
* $get[levelupchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]

    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelupmessagechannel]==none];true;none;false;<#$getGuildVar[levelupmessagechannel]> (\`$getGuildVar[levelupmessagechannel]\`)]]

    $deleteVar[levelupmessagechannel;$guildID;main]

    $onlyIf[$getGuildVar[levelupmessagechannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingresetchannel;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `
    $interactionReply[Successfully sent the message to the Level up channel for testing!;all;true]
    $channelSendMessage[$getGuildVar[levelupmessagechannel];
    **This is a test Level up message! Please, ignore this!**
    $levelUpMessage[$nonEscape[$getGuildVar[levelupmessage]]]
    ]
    

    $onlyIf[$hasPermsInChannel[$getGuildVar[levelupmessagechannel];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[levelupmessagechannel]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelupmessagechannel]]==true;The channel used for Level up message seems to be deleted.
    Cancelled sending the message as a result. Please set a new channel to fix this.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getGuildVar[levelupmessagechannel]!=none;There is no channel set to test the Level up message.
    Please set a new channel first.
    {ephemeral}
    {interaction}
    ]
    
    $disableMentionType[roles]
    $disableMentionType[everyone]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingtestmessage;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Exclusions}{description:This category is dedicated to choosing on what should be excluded from allowing xp!

To manage a specific setting, use any of the buttons below to do so!
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Channels:2:levelingexcludechannelssetting_$authorID:false}{button:Categories:2:levelingexcludecategoriessetting_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    $onlyIf[$getSelectMenuValues[all]==exclusions;]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingotheroptionsmenu;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Exclusions}{description:This category is dedicated to choosing on what should be excluded from allowing xp!

To manage a specific setting, use any of the buttons below to do so!
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Channels:2:levelingexcludechannelssetting_$authorID:false}{button:Categories:2:levelingexcludecategoriessetting_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexclusionshome;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Channels}{description:Use the dropdown menu below to select channels to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel(s)**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedchannels]];, ;autoListChannels]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludechannelmenusetup_$authorID:Select channels.:1:10:false:{channelInput:Text}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludechannelreset_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludechannelssetting;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[Successfully updated the list!;true]

    $interactionUpdate[{newEmbed:{title:Channels}{description:Use the dropdown menu below to select channels to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel(s)**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedchannels]];, ;autoListChannels]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludechannelmenusetup_$authorID:Select channels.:1:10:false:{channelInput:Text}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludechannelreset_$authorID:false}}]

    $setGuildVar[levelingexcludedchannels;$getSelectMenuValues[all;, ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludechannelmenusetup;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Successfully reset the current list!;true]

    $interactionUpdate[{newEmbed:{title:Channels}{description:Use the dropdown menu below to select channels to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
}{field:**Current Channel(s)**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedchannels]];, ;autoListChannels]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludechannelmenusetup_$authorID:Select channels.:1:10:false:{channelInput:Text}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludechannelreset_$authorID:false}}]

    $deleteVar[levelingexcludedchannels;$guildID;main]

    $onlyIf[$getGuildVar[levelingexcludedchannels]!=none;
    There's nothing to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludechannelreset;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Categories}{description:Use the dropdown menu below to select channel categories to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the category you're looking for? Try typing the category name instead!
}{field:**Current Categories**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedcategories]];, ;autoListCategories]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludecategoriesmenusetup_$authorID:Select categories.:1:10:false:{channelInput:Category}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludecategoriesreset_$authorID:false}}]


    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludecategoriessetting;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[Successfully updated the list!;true]

    $interactionUpdate[{newEmbed:{title:Categories}{description:Use the dropdown menu below to select channel categories to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the category you're looking for? Try typing the category name instead!
}{field:**Current Categories**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedcategories]];, ;autoListCategories]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludecategoriesmenusetup_$authorID:Select categories.:1:10:false:{channelInput:Category}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludecategoriesreset_$authorID:false}}]

    $setGuildVar[levelingexcludedcategories;$getSelectMenuValues[all;, ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludecategoriesmenusetup;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Successfully reset the current list!;true]

    $interactionUpdate[{newEmbed:{title:Categories}{description:Use the dropdown menu below to select channel categories to exclude from xp. (You can add up to 10)!

**Tip#COLON#** Unable to find the category you're looking for? Try typing the category name instead!
}{field:**Current Categories**:
$autoList[$nonEscape[$getGuildVar[levelingexcludedcategories]];, ;autoListCategories]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingexcludecategoriesmenusetup_$authorID:Select categories.:1:10:false:{channelInput:Category}}}{actionRow:{button:Go back:2:levelingexclusionshome_$authorID:false:↩️}{button:Reset:2:levelingexcludecategoriesreset_$authorID:false}}]

    $deleteVar[levelingexcludedcategories;$guildID;main]

    $onlyIf[$getGuildVar[levelingexcludedcategories]!=none;
    There's nothing to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingexcludecategoriesreset;]

    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Reset on Leave}{description:This option let's you reset User's current level whenever they leave the server. 
    
    By default, this is disabled but you can choose to enable it if you want to do so.
}{field:**Current Setup**:
* **Reset on Leave#COLON#** \`$get[leaveonreset]\`
}{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Toggle:2:togglelevelingleaveonreset_$authorID:false:🔄}}]
    
    $let[leaveonreset;$advancedReplaceText[$getGuildVar[levelleaveonreset];on;Enabled;off;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    $onlyIf[$getSelectMenuValues[all]==resetonleave;]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingotheroptionsmenu;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[$get[resultmessage];true]
    $interactionUpdate[{newEmbed:{title:Reset on Leave}{description:This option let's you reset User's current level whenever they leave the server.

    By default, this is disabled but you can choose to enable it if you want to do so.
}{field:**Current Setup**:
* **Reset on Leave#COLON#** \`$get[leaveonreset]\`
}{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}{button:Toggle:2:togglelevelingleaveonreset_$authorID:false:🔄}}]
    
    $let[leaveonreset;$advancedReplaceText[$getGuildVar[levelleaveonreset];on;Enabled;off;Disabled]]
    
    
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelleaveonreset]==on];true;User's levels will now reset whenever they leave!;false;User's levels will no longer reset whenever they leave!]]
    $setGuildVar[levelleaveonreset;$get[newtoggledsetting]]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelleaveonreset]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglelevelingleaveonreset;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Level up message unique. Use the current ones available in this list!}{field:Member-related:
    \`<username>\` - Returns the member's username
    \`<Displayname>\` - Returns the member's displayname
    \`<globalname>\` - Returns the member's global name (or username if there isn't any)
    \`<mention>\` - Pings the member
    }{field:Leveling-related:
    \`<newlevel>\` - Returns the new level of the member
    \`<oldlevel>\` - Returns the previous level the member once had
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsettings_$authorID:false:↩️}}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingmsgplaceholders;]

    `
    }]
    
