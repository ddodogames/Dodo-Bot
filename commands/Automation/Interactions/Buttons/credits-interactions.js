module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==credits;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$title[Dodo-Bot Credits]
$description[
* $username[632607624742961153] - Developer of the bot
* $username[431749535656837130] - Inspiration to improve some commands
* $username[769525910164471821] - For some ideas
* BotForge server - For a lot of help
* $username[1096717977304453160] - For the Dodo-Bot logo
* $hyperlink[discotools.xyz;https://discotools.xyz/icons-editor] - For most of the icons used in commands
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Main Credits;Secondary;;true]
$addButton[packages_$authorID;Packages;Secondary]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==packages;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Packages]
$description[
* **@tryforge/forgescript** - The entire project basically! Dodo-Bot is made in fs!
* **@tryforge/forge.db** - For enabling variables in fs.
* **discord-gamecord** - Most of the game commands were made using this package.
* **better-sqlite3** - Database used in the bot.
* **@dotenvx/dotenvx** - For enabling environment variables support in local hosting.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Main Credits;Secondary;;false]
$addButton[packages_$authorID;Packages;Secondary;;true]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary;;false]
]`

},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==useofsourcecode;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Use of Source code]
$description[As long as credit is given, I have no problems with people looking at my code and taking stuff from it.

Even though there's nothing stopping you from claiming it is your work, it would be respectable to credit the original work done by me in this project.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Main Credits;Secondary;;false]
$addButton[packages_$authorID;Packages;Secondary;;false]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary;;true]
]
`
}]
