module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Setup Logs}{description:Select the log you want to setup using the dropdown menu below!}{color:$getVar[embedcolor]}}

        {actionRow:{selectMenu:setuplogsmenu_$authorID:Select a log type:1:1:false:{stringInput:Message Delete:msgdeletelog:Setup Message Delete logs:false}{stringInput:Message Edit:msgeditlog:Setup Message Edit logs:false}{stringInput:Ban:banlogs:Setup Ban logs:false}{stringInput:Unban:unbanlogs:Setup Unban logs:false}{stringInput:Integration:integration:Setup Integration logs:false}}}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogshomebutton;]

    `
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{author:Message Delete:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msgdeletelogchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgdeletelogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgdeletelogresetchannel_$authorID:false}}]


$let[msgdeletelogchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogdeletedchannel]==none];true;none;false;<#$getGuildVar[msglogdeletedchannel]> (\`$getGuildVar[msglogdeletedchannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==msgdeletelog;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogsmenu;]

    `
},{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Message Delete logs!;true]

$interactionUpdate[{newEmbed:{author:Message Delete:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msgdeletelogchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgdeletelogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgdeletelogresetchannel_$authorID:false}}]

    $let[msgdeletelogchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogdeletedchannel]==none];true;none;false;<#$getGuildVar[msglogdeletedchannel]> (\`$getGuildVar[msglogdeletedchannel]\`)]]

    $setGuildVar[msglogdeletedchannel;$getSelectMenuValues[all]]

    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[msglogdeletedchannel];
    This channel is already used for Message Delete logs. Please, set a different channel instead.
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

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgdeletelogchannelsetupmenu;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

$interactionUpdate[{newEmbed:{author:Message Delete:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msgdeletelogchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgdeletelogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgdeletelogresetchannel_$authorID:false}}]

    $let[msgdeletelogchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogdeletedchannel]==none];true;none;false;<#$getGuildVar[msglogdeletedchannel]> (\`$getGuildVar[msglogdeletedchannel]\`)]]

    $deleteVar[msglogdeletedchannel;$guildID;main]

    $onlyIf[$getGuildVar[msglogdeletedchannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgdeletelogresetchannel;]

    `
    },{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{author:Message Edit:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msglogeditchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgeditloglogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgeditlogresetchannel_$authorID:false}}]


$let[msglogeditchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogeditchannel]==none];true;none;false;<#$getGuildVar[msglogeditchannel]> (\`$getGuildVar[msglogeditchannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==msgeditlog;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogsmenu;]

    `
},{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Message Edit logs!;true]

$interactionUpdate[{newEmbed:{author:Message Edit:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msglogeditchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgeditloglogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgeditlogresetchannel_$authorID:false}}]

    $let[msglogeditchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogeditchannel]==none];true;none;false;<#$getGuildVar[msglogeditchannel]> (\`$getGuildVar[msglogeditchannel]\`)]]

    $setGuildVar[msglogeditchannel;$getSelectMenuValues[all]]

    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[msglogeditchannel];
    This channel is already used for Message Edit logs. Please, set a different channel instead.
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

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgeditloglogchannelsetupmenu;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

$interactionUpdate[{newEmbed:{author:Message Edit:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[msglogeditchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:msgeditloglogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:msgeditlogresetchannel_$authorID:false}}]

    $let[msglogeditchannel;$advancedReplaceText[$checkCondition[$getGuildVar[msglogeditchannel]==none];true;none;false;<#$getGuildVar[msglogeditchannel]> (\`$getGuildVar[msglogeditchannel]\`)]]

    $deleteVar[msglogeditchannel;$guildID;main]

    $onlyIf[$getGuildVar[msglogeditchannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgeditlogresetchannel;]

    `
    },{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{author:Ban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[banneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:banlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:banlogresetchannel_$authorID:false}}]


$let[banneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[banneduserschannel]==none];true;none;false;<#$getGuildVar[banneduserschannel]> (\`$getGuildVar[banneduserschannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==banlogs;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogsmenu;]

    `
},{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Ban logs!;true]

$interactionUpdate[{newEmbed:{author:Ban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[banneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:banlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:banlogresetchannel_$authorID:false}}]

    $let[banneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[banneduserschannel]==none];true;none;false;<#$getGuildVar[banneduserschannel]> (\`$getGuildVar[banneduserschannel]\`)]]

    $setGuildVar[banneduserschannel;$getSelectMenuValues[all]]

    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[banneduserschannel];
    This channel is already used for Ban logs. Please, set a different channel instead.
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

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==banlogchannelsetupmenu;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

$interactionUpdate[{newEmbed:{author:Ban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[banneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:banlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:banlogresetchannel_$authorID:false}}]

    $let[banneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[banneduserschannel]==none];true;none;false;<#$getGuildVar[banneduserschannel]> (\`$getGuildVar[banneduserschannel]\`)]]

    $deleteVar[banneduserschannel;$guildID;main]

    $onlyIf[$getGuildVar[banneduserschannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==banlogresetchannel;]

    `
    },{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{author:Unban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[unbanneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:unbanlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:unbanlogresetchannel_$authorID:false}}]


$let[unbanneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[unbanneduserschannel]==none];true;none;false;<#$getGuildVar[unbanneduserschannel]> (\`$getGuildVar[unbanneduserschannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==unbanlogs;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogsmenu;]

    `
},{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Unban logs!;true]

$interactionUpdate[{newEmbed:{author:Unban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[unbanneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:unbanlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:unbanlogresetchannel_$authorID:false}}]

    $let[unbanneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[unbanneduserschannel]==none];true;none;false;<#$getGuildVar[unbanneduserschannel]> (\`$getGuildVar[unbanneduserschannel]\`)]]

    $setGuildVar[unbanneduserschannel;$getSelectMenuValues[all]]

    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[unbanneduserschannel];
    This channel is already used for Unban logs. Please, set a different channel instead.
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

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==unbanlogchannelsetupmenu;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

$interactionUpdate[{newEmbed:{author:Unban:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[unbanneduserschannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:unbanlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:unbanlogresetchannel_$authorID:false}}]

    $let[unbanneduserschannel;$advancedReplaceText[$checkCondition[$getGuildVar[unbanneduserschannel]==none];true;none;false;<#$getGuildVar[unbanneduserschannel]> (\`$getGuildVar[unbanneduserschannel]\`)]]

    $deleteVar[unbanneduserschannel;$guildID;main]

    $onlyIf[$getGuildVar[unbanneduserschannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==unbanlogresetchannel;]

    `
    },{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{author:Integration:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[Integrationchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:Integrationlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:Integrationlogresetchannel_$authorID:false}}]


$let[Integrationchannel;$advancedReplaceText[$checkCondition[$getGuildVar[Integrationchannel]==none];true;none;false;<#$getGuildVar[Integrationchannel]> (\`$getGuildVar[Integrationchannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==integration;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setuplogsmenu;]

    `
},{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Integration logs!;true]

$interactionUpdate[{newEmbed:{author:Integration:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[Integrationchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:Integrationlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:Integrationlogresetchannel_$authorID:false}}]

    $let[Integrationchannel;$advancedReplaceText[$checkCondition[$getGuildVar[Integrationchannel]==none];true;none;false;<#$getGuildVar[Integrationchannel]> (\`$getGuildVar[Integrationchannel]\`)]]

    $setGuildVar[Integrationchannel;$getSelectMenuValues[all]]

    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[Integrationchannel];
    This channel is already used for Integration logs. Please, set a different channel instead.
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

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Integrationlogchannelsetupmenu;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

$interactionUpdate[{newEmbed:{author:Integration:$clientAvatar}{title:Channel Setup}{description:Select a channel using the menu below for this log type.

**Tip#COLON#** Can't find the channel you're looking for? Try typing the channel name into the menu instead.
}{field:**Current Channel**:
* $get[Integrationchannel]
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:Integrationlogchannelsetupmenu_$authorID:Select a channel to use:1:1:false:{channelInput:Text}}}{actionRow:{button:Home:2:setuplogshomebutton_$authorID:false:🏠}{button:Reset:2:Integrationlogresetchannel_$authorID:false}}]

    $let[Integrationchannel;$advancedReplaceText[$checkCondition[$getGuildVar[Integrationchannel]==none];true;none;false;<#$getGuildVar[Integrationchannel]> (\`$getGuildVar[Integrationchannel]\`)]]

    $deleteVar[Integrationchannel;$guildID;main]

    $onlyIf[$getGuildVar[Integrationchannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Integrationlogresetchannel;]

    `
    }]
