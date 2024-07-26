module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==packages_$authorID;]

$interactionUpdate[$title[Packages]
$description[
* **@tryforge/forgescript:** The entire project basically! Dodo-Bot is made in fs!
* **@tryforge/forge.db:** For enabling variables in fs.
* **fsgames:** For the new \`tictactoe\` design!
* **discord-gamecord:** Most of the game commands were made using this package
* **sqlite3:** Database used in the bot.
* **dotenv:** For enabling environment variables support in local hosting
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Home;Secondary;🏠]
]`

},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==useofsourcecode_$authorID;]

$interactionUpdate[
$title[Use of Source code]
$addField[For public bots;If creating a modified instance of Dodo-Bot that is public, then it is recommended to give credit to the original work done by me in this project. 

While that may not stop you from claiming that the work is supposedly done by yours, it would be respectful for me as a person spending his time coding on his personal project.]
$addField[For private bots;If you're going to host Dodo-Bot (or have a modified instance) for specific private servers, then giving credit is optional as private bots aren't a big deal to me (using the project for also learning is fine). 

You may still give credit in cases where you claim it's your work.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[credits_$authorID;Home;Secondary;🏠]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==credits_$authorID;]

$interactionUpdate[$title[Dodo-Bot Credits]
$description[
* $username[632607624742961153] - Developer of the bot
* $username[431749535656837130] - Inspiration to improve some commands
* $username[769525910164471821] - For some ideas
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[packages_$authorID;Packages;Secondary]
$addButton[useofsourcecode_$authorID;Use of Source Code;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==info_$authorID;]

$let[quotes;$callFunction[quotes]]
$attachment[./handler/assets/dodo-bot-logo.png;dodobot-logo.png]

$interactionUpdate[
$title[About Dodo-Bot]
    $description[$get[quotes]

Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time provide a couple of useful features! It is basically a bot made in ForgeScript (at least for rebase version)!

The project has existed since late 2021 and to this day, it continues to be developed with new improvements along with other type of updates as well!
]
    $color[$getGlobalVar[embedcolor]]
$thumbnail[attachment://dodobot-logo.png]
$addActionRow
$addButton[dodobotrebase_$authorID;Rebase;Secondary;;false]
$addButton[https://github.com/DodoGames7/Dodo-Bot;Source code;Link]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==dodobotrebase_$authorID;]

$attachment[./handler/assets/dodo-bot-logo.png;dodobot-logo.png]

$interactionUpdate[$title[About rebase]
$description[Rebase is a special version of Dodo-Bot acting as a backup. It is based on $hyperlink[CupcakeX;https://github.com/dodoGames7/CupcakeX] codebase albeit being improved and having additions compared to the current build of it featuring new techniques and stuff.

As the name implies, it mostly acts as a emergency build in case if aoi.js suddenly died one day. It's also used for learning new stuff.]
$color[$getGlobalVar[embedcolor]]
$thumbnail[attachment://dodobot-logo.png]
$addActionRow
$addButton[info_$authorID;Home;Secondary;🏠]
]

`
}]