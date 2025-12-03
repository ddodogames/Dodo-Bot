module.exports = {
    name: "about",
    info: {
        description: "Returns information about Dodo-Bot.",
        perms: ["`SendMessages`"]
    },
    aliases: ["info"],
    type: "messageCreate",
    code: `$userCooldown[aboutinfocmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[aboutinfocmd]];1000]]:R>]

$title[About Dodo-Bot]
$description[
Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time providing a couple of useful features (e.g., the Welcomer feature)! It is basically a bot made in ForgeScript (at least for v3)!

The project exists since late 2021 and to this day, it continues to be developed with new improvements along with other type of updates as well!
]
$color[$getGlobalVar[embedcolor]]
$attachment[./assets/dodo-bot-logo.png;dodobot-logo.png]
$thumbnail[attachment://dodobot-logo.png]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot;Source code;Link]
    `
}
