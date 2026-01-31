module.exports = {
    name: "credits",
    info: {
        description: "Returns a list of credits for things that were introduced in Dodo-Bot.",
        perms: ["`SendMessages`"]
    },
    code: `$title[Dodo-Bot Credits]
$description[
* $username[632607624742961153] - Developer of the bot
* $username[431749535656837130] - Inspiration to improve some commands
* $username[738856854892839022] - For Leveling setup
* $username[769525910164471821] - For \`guess-the-pokemon\` code (and some ideas as well)
* $username[1096717977304453160] - For the Dodo-Bot logo
* aoi.js server - For a lot of help
* [discotools.xyz](https://discotools.xyz/icons-editor) - For most of the icons used in commands
]
$color[$getVar[embedcolor]]
$addButton[1;Use of source code;2;useofsource_$authorID;false]
$addButton[1;Packages used;2;packagesused_$authorID;false]
$addButton[1;Main Credits;2;maincredits_$authorID;true]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;credits;$authorID];$dateStamp];1000]]:R>]
`
}
