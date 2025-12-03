module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewcmdflags;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[cmdname;$advancedTextSplit[$customID;_;2]]


$interactionReply[
$title[Flags of this command]
$description[The command has the following flags:

$callFunction[commandflags;$get[cmdname]]
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewbotperms;]

$let[botID;$advancedTextSplit[$customID;_;1]]

$onlyIf[$memberExists[$guildID;$get[botID]]==true;
$interactionReply[This bot is no longer in this server.
$ephemeral
]]

$onlyIf[$memberPerms[$guildID;$get[botID];, ]!=;
$interactionReply[This bot does not seem to have any permissions added to it.
$ephemeral
]]

$interactionReply[
$title[Permissions of this bot]
$description[**$username[$get[botID]]** has the following permissions:


$codeBlock[$memberPerms[$guildID;$get[botID]];markdown]
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
$addActionRow
$addButton[permslistuncompactbutton_$get[botID];Uncompact;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==permslistuncompactbutton;]

    $let[botID;$advancedTextSplit[$customID;_;1]]

    $onlyIf[$memberExists[$guildID;$get[botID]]==true;
    $interactionReply[This bot is no longer in this server.
    $ephemeral
    ]]

    $onlyIf[$memberPerms[$guildID;$get[botID];, ]!=;
    $interactionReply[This bot does not seem to have any permissions added to it.
    $ephemeral
    ]]

    $interactionUpdate[
        $title[Permissions of this bot]
        $description[**$username[$get[botID]]** has the following permissions:


        $callFunction[autoListText;$memberPerms[$guildID;$get[botID]];, ]
        ]
        $color[$getGlobalVar[embedcolor]]
        $addActionRow
        $addButton[permslistcompactbutton_$get[botID];Compact;Secondary]
    ]
    `
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==permslistcompactbutton;]

    $let[botID;$advancedTextSplit[$customID;_;1]]

    $onlyIf[$memberExists[$guildID;$get[botID]]==true;
    $interactionReply[This bot is no longer in this server.
    $ephemeral
    ]]

    $onlyIf[$memberPerms[$guildID;$get[botID];, ]!=;
    $interactionReply[This bot does not seem to have any permissions added to it.
    $ephemeral
    ]]

    $interactionUpdate[
        $title[Permissions of this bot]
        $description[**$username[$get[botID]]** has the following permissions:


        $codeBlock[$memberPerms[$guildID;$get[botID]];markdown]
        ]
        $color[$getGlobalVar[embedcolor]]
        $addActionRow
        $addButton[permslistuncompactbutton_$get[botID];Uncompact;Secondary]
    ]
    `
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewserverdescription;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$guildDescription!=;
$interactionReply[
This server does not have description set.
$ephemeral
]]

$interactionReply[
$title[Description]
$description[The server's description reads:

$guildDescription
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==whynoadminperm;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionReply[
$title[Why this exists?]
$description[Administrator permission is generally dangerous and should only be given to people you trust. It is always a good idea to only select the required permissions, which is why \`perms\` command exists to raise awareness about this.

This is also to reduce the chances of raiding in case the bot gets hacked by having less dangerous permissions.
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
}]
