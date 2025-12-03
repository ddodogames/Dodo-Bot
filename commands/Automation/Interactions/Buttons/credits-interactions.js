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
* **discord-gamecord** - Most of the game commands were made using this package
* **better-sqlite3** - Database used in the bot.
* **@dotenvx/dotenvx** - For enabling environment variables support in local hosting
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
$addField[For public bots;If creating a modified instance of Dodo-Bot that is public, then it is recommended to give credit to the original work done by me in this project. 

While that may not stop you from claiming that the work is supposedly done by yours, it would be respectful for me as a person spending his time coding on his personal project.]
$addField[For private bots;If you're going to host Dodo-Bot (or have a modified instance) for specific private servers, then giving credit is optional as private bots aren't a big deal to me (using the project for also learning is fine). 

You may still give credit in cases where you claim it's your work.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Main Credits;Secondary;;false]
$addButton[packages_$authorID;Packages;Secondary;;false]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary;;true]
]
`
}]
