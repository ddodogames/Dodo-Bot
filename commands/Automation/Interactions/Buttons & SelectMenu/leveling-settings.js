module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingtoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[levelingsystem]==on];true;off;false;on]]
$setGuildVar[levelingsystem;$get[settingdecide];$guildID]
$let[levelingsystem;$advancedReplace[$getGuildVar[levelingsystem];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[levelingsystem]==on];true;Successfully enabled Leveling!;false;Successfully disabled Leveling!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[levelingsystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingtoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingsettings_$authorID;Settings;Danger]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingsettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[levelupmessagechannel;$guildID]!=];true;<#$getGuildVar[levelupmessagechannel;$guildID]> (\`$getGuildVar[levelupmessagechannel;$guildID]\`);false;No channel set]]
$let[levelingmessagefeature;$advancedReplace[$getGuildVar[levelingmessagefeature];off;Disabled;on;Enabled]]
$let[levelingresetonleave;$advancedReplace[$getGuildVar[levelingresetonleave];off;Disabled;on;Enabled]]

$interactionReply[
$title[Leveling Settings]
$description[Welcome to Leveling settings! Select an option to change.
]
$addField[Current Setup;
* **Level up channel:** $get[currentchannel]
* **Level up message:** $get[levelingmessagefeature]
* **Reset on Leave:** $get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[levelingextraoptionsmenu;More options;false;1;1]
$addOption[Exclusions;What to exclude from gaining XP;exclusionsoption;;false]
$addOption[Reset on Leave;Whether or not to reset user's level upon leaving the server;resetonleaveoption;;false]
$addActionRow
$addButton[levelingchannelsetup;Channel;Secondary]
$addButton[levelingmessagecategory;Message;Secondary]
$addButton[levelingplaceholderlist;Placeholders;Secondary]
$addButton[levelingresetbutton;Reset;Danger;⚠️]
$ephemeral
]
`
},{ // for "Return to main settings page" functionality
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingsettingshome;]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[levelupmessagechannel;$guildID]!=];true;<#$getGuildVar[levelupmessagechannel;$guildID]> (\`$getGuildVar[levelupmessagechannel;$guildID]\`);false;No channel set]]
$let[levelingmessagefeature;$advancedReplace[$getGuildVar[levelingmessagefeature];off;Disabled;on;Enabled]]
$let[levelingresetonleave;$advancedReplace[$getGuildVar[levelingresetonleave];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[Leveling Settings]
$description[Welcome to Leveling settings! Select an option to change.
]
$addField[Current Setup;
* **Level up channel:** $get[currentchannel]
* **Level up message:** $get[levelingmessagefeature]
* **Reset on Leave:** $get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[levelingextraoptionsmenu;More options;false;1;1]
$addOption[Exclusions;What to exclude from gaining XP;exclusionsoption;;false]
$addOption[Reset on Leave;Whether or not to reset user's level upon leaving the server;resetonleaveoption;;false]
$addActionRow
$addButton[levelingchannelsetup;Channel;Secondary]
$addButton[levelingmessagecategory;Message;Secondary]
$addButton[levelingplaceholderlist;Placeholders;Secondary]
$addButton[levelingresetbutton;Reset;Danger;⚠️]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingresetbutton;]

    $interactionReply[
    $ephemeral
    $title[How do you want to reset?]
    $description[Choose any of the 2 buttons below.]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[levelingfullresetoption;Full Reset;Secondary]
    $addButton[levelingresetspecificusers;Only for specific users;Secondary]
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingfullresetoption;]

    $interactionUpdate[
        $title[Reset for everyone?]
        $description[Once you click "Yes", there will be no way to recover the progress for everyone.]
        $color[$getGlobalVar[embedcolor]]
        $addActionRow
        $addButton[levelingfullresetconfirm;Yes;Secondary]
        $addButton[levelingfullresetdeny;No;Secondary]
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingfullresetconfirm;]

    $deleteRecords[level;;member;;$guildID]
    $deleteRecords[previouslevel;;member;;$guildID]
    $deleteRecords[xp;;member;;$guildID]
    $deleteRecords[xpLimit;;member;;$guildID]

    $interactionUpdate[
    Successfully reset progress for everyone!
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingfullresetdeny;]

    $interactionUpdate[
    Alright, all users will keep their progress then.
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingresetspecificusers;]

    $interactionUpdate[$title[Reset for specific users]
    $description[Select the users to reset using the menu below.

    You can select up to 20 users to reset their progress.
    ]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addUserSelectMenu[levelingresetspecificusersmenu;Select users to reset;1;20;false]
    $addActionRow
    $addButton[levelingresetusermanuallywithID;Reset manually with ID;Secondary]
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
    $onlyIf[$customID==levelingresetspecificusersmenu;]

    $arrayLoad[users;, ;$selectMenuValues]

    $onlyIf[$arrayEvery[users;selectedIDs;$checkCondition[$isBot[$env[selectedIDs]]==false]];$interactionReply[You cannot select bots!
    $ephemeral
    ]]

    $arrayForEach[users;IDs;
    $deleteMemberVar[level;$env[IDs]]
    $deleteMemberVar[previouslevel;$env[IDs]]
    $deleteMemberVar[xp;$env[IDs]]
    $deleteMemberVar[xpLimit;$env[IDs]]
    ]

    $interactionReply[Successfully reset the progress of selected users!
    $ephemeral
    ]

    `
    },{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$customID==levelingresetusermanuallywithID;]

    $showModal
    $modal[levelingresetuserIDmodal;Reset for specific user]
    $addTextInput[idInput;Id of the user to reset;Short;true;e.g. $authorID;;0;200]
    `
    },{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `
    $onlyIf[$customID==levelingresetuserIDmodal;]
    $let[input;$input[idInput]]

    $onlyIf[$userExists[$get[input]]==true;$interactionReply[Please provide a valid user ID.
    $ephemeral
    ]]

    $onlyIf[$isBot[$get[input]]==false;$interactionReply[Bots do not have any leveling data.
    $ephemeral
    ]]

    $jsonLoad[datachecker;$searchDB[xp;$get[input];member;;$guildID]]

    $onlyIf[$env[datachecker;0;value]!=;$interactionReply[This user does not seem to have leveling data in this server.
    $ephemeral
    ]]

    $deleteMemberVar[level;$get[input]]
    $deleteMemberVar[previouslevel;$get[input]]
    $deleteMemberVar[xp;$get[input]]
    $deleteMemberVar[xpLimit;$get[input]]

    $interactionReply[Successfully reset the progress of $username[$get[input]]!
    $ephemeral
    ]
        `
    },{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingchannelsetup;]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[levelupmessagechannel;$guildID]!=];true;<#$getGuildVar[levelupmessagechannel;$guildID]> (\`$getGuildVar[levelupmessagechannel;$guildID]\`);false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Select a channel for sending level up messages. Use the select menu below to choose your preferred channel.

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==levelingchannelselectmenusetup;]


$onlyIf[$getGuildVar[levelupmessagechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for level up messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for level up messages, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[levelupmessagechannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[levelupmessagechannel;$guildID]!=];true;<#$getGuildVar[levelupmessagechannel;$guildID]> (\`$getGuildVar[levelupmessagechannel;$guildID]\`);false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for level up messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingmsgchannelreset;]

$onlyIf[$getGuildVar[levelupmessagechannel;$guildID]!=;$interactionReply[
There's no channel currently set to reset.
$ephemeral]]

$deleteGuildVar[levelupmessagechannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[levelupmessagechannel;$guildID]!=];true;<#$getGuildVar[levelupmessagechannel;$guildID]> (\`$getGuildVar[levelupmessagechannel;$guildID]\`);false;No channel set]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingchannelselectmenusetup;Select a channel to use;1;1;false]
$setChannelType[GuildText;GuildAnnouncement]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingmessagecategory;]

$let[levelingmessagefeature;$advancedReplace[$getGuildVar[levelingmessagefeature];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify.]
$addField[Current Setup;* **Level up message:** $get[levelingmessagefeature]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingmessagefeaturetoggle;Toggle;Secondary;🔄]
$addButton[levelingmessagesetup;Set Message;Secondary]
$addButton[levelingmessagepreview;Preview Message;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingmessagefeaturetoggle;]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[levelingmessagefeature]==on];true;off;false;on]]
$setGuildVar[levelingmessagefeature;$get[settingdecide];$guildID]
$let[levelingmessagefeature;$advancedReplace[$getGuildVar[levelingmessagefeature];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[levelingmessagefeature]==on];true;Successfully enabled level up message!;false;Successfully disabled level up message!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];* **Level up message:** $get[levelingmessagefeature]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingmessagefeaturetoggle;Toggle;Secondary;🔄]
$addButton[levelingmessagesetup;Set Message;Secondary]
$addButton[levelingmessagepreview;Preview Message;Secondary]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingmessagesetup;]

$showModal
$modal[levelingmessagemodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;e.g. <user.username> has leveled up!;$getGuildVar[levelingmessage];0;200]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==levelingmessagemodalsetup;]
$setGuildVar[levelingmessage;$input[messageInput]]
$interactionReply[Successfully set the leveling message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingmessagepreview;]


$interactionReply[
$callFunction[Levelingmessage;$getGuildVar[levelingmessage]]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==levelingextraoptionsmenu;$selectMenuValues==resetonleaveoption]==true;]

$let[levelingresetonleave;$advancedReplace[$getGuildVar[levelingresetonleave];off;Disabled;on;Enabled]]

$interactionUpdate[
$title[Reset on Leave]
$description[This option lets you decide whether or not the user who leaves this server will have their level progress erased. By default, it is disabled, but you can choose to enable it.]
$addField[Current Setup;
$get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingresetonleavetoggle;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingresetonleavetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGuildVar[levelingresetonleave]==on];true;off;false;on]]
$setGuildVar[levelingresetonleave;$get[settingdecide];$guildID]
$let[levelingresetonleave;$advancedReplace[$getGuildVar[levelingresetonleave];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGuildVar[levelingresetonleave]==on];true;Members who leave will now have their level reset!;false;Members who leave will no longer have their level reset!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingresetonleavetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu", "button"],
    code: `
$if[$selectMenuValues==;
$onlyIf[$customID==levelingexclusionpage;]
;
$onlyIf[$and[$customID==levelingextraoptionsmenu;$selectMenuValues==exclusionsoption]==true;]
]

$interactionUpdate[
$title[Exclusions]
$description[In this category, you can choose what should be excluded from allowing members to gain XP by default.

To manage a specific option, click on one of the buttons below dedicated to this category, such as "Roles" for example.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
$addButton[levelingexclusionroles;Roles;Secondary]
$addButton[levelingexclusionchannels;Channels;Secondary]
$addButton[levelingexclusionchannelcategories;Categories;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingexclusionroles;]

$interactionUpdate[$title[Exclude Roles]
$description[Use the menu below to select roles to exclude from XP. You can select up to 10 roles within the menu.]
$addField[Current Role(s);
$callFunction[autoListroles;$getGuildVar[levelingexcludedroles];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addRoleSelectMenu[levelingexcluderolesetupmenu;Select roles to exclude;1;10;false]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedroles;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==levelingexcluderolesetupmenu;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]
$setGuildVar[levelingexcludedroles;$selectMenuValues]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListroles;$getGuildVar[levelingexcludedroles];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addRoleSelectMenu[levelingexcluderolesetupmenu;Select roles to exclude;1;10;false]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedroles;Reset;Secondary]
]

$interactionFollowUp[Successfully saved changes!
$ephemeral
]

`},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingresetexcludedroles;]

$onlyIf[$getGuildVar[levelingexcludedroles;$guildID]!=none;$interactionReply[
There's nothing to reset.
$ephemeral]]

$deleteGuildVar[levelingexcludedroles;$guildID]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListroles;$getGuildVar[levelingexcludedroles];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addRoleSelectMenu[levelingexcluderolesetupmenu;Select roles to exclude;1;10;false]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedroles;Reset;Secondary]
]

$interactionFollowUp[Current setup has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingexclusionchannels;]

$interactionUpdate[$title[Exclude Channels]
$description[Use the menu below to select channels to exclude from XP. You can select up to 10 channels within the menu.]
$addField[Current Channel(s);
$callFunction[autoListchannels;$getGuildVar[levelingexcludedchannels];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludechannelsetupmenu;Select channels to exclude;1;10;false]
$setChannelType[GuildText]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedchannels;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==levelingexcludechannelsetupmenu;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$setGuildVar[levelingexcludedchannels;$selectMenuValues]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListchannels;$getGuildVar[levelingexcludedchannels];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludechannelsetupmenu;Select channels to exclude;1;10;false]
$setChannelType[GuildText]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedchannels;Reset;Secondary]
]

$interactionFollowUp[Successfully saved changes!
$ephemeral
]

`},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingresetexcludedchannels;]

$onlyIf[$getGuildVar[levelingexcludedchannels;$guildID]!=none;$interactionReply[
There's nothing to reset.
$ephemeral]]

$deleteGuildVar[levelingexcludedchannels;$guildID]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListchannels;$getGuildVar[levelingexcludedchannels];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludechannelsetupmenu;Select channels to exclude;1;10;false]
$setChannelType[GuildText]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedchannels;Reset;Secondary]
]

$interactionFollowUp[Current setup has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingexclusionchannelcategories;]

$interactionUpdate[$title[Exclude Categories]
$description[Use the menu below to select channel categories to exclude from XP. You can select up to 10 categories within the menu.]
$addField[Current Categories;
$callFunction[autoListcategories;$getGuildVar[levelingexcludedcategories];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludecategoriessetupmenu;Select categories to exclude;1;10;false]
$setChannelType[GuildCategory]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedcategories;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==levelingexcludecategoriessetupmenu;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$setGuildVar[levelingexcludedcategories;$selectMenuValues]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListcategories;$getGuildVar[levelingexcludedcategories];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludecategoriessetupmenu;Select categories to exclude;1;10;false]
$setChannelType[GuildCategory]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedcategories;Reset;Secondary]
]

$interactionFollowUp[Successfully saved changes!
$ephemeral
]

`},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingresetexcludedcategories;]

$onlyIf[$getGuildVar[levelingexcludedcategories;$guildID]!=none;$interactionReply[
There's nothing to reset.
$ephemeral]]

$deleteGuildVar[levelingexcludedcategories;$guildID]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$callFunction[autoListcategories;$getGuildVar[levelingexcludedcategories];, ]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[levelingexcludecategoriessetupmenu;Select categories to exclude;1;10;false]
$setChannelType[GuildCategory]
$addActionRow
$addButton[levelingexclusionpage;Go Back;Secondary;↩️]
$addButton[levelingresetexcludedcategories;Reset;Secondary]
]

$interactionFollowUp[Current setup has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==levelingplaceholderlist;]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make the leveling message unique! Below are the available options you can use.]
$addField[Member-related;
\`<user.username>\` - Returns the member's username
\`<user.mention>\` - Pings the member
\`<user.displayname>\` - Returns the member's display name
\`<user.globalname>\` - Returns the member's global name (or username if there isn't any)
]
$addField[Leveling-related;
\`<newlevel>\` - Returns the member's new level
\`<oldlevel>\` - Returns the level the member once had
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettingshome;Go Back;Secondary;↩️]
]`
}]
