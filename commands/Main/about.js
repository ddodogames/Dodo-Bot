module.exports = {
    name: "about",
    info: {
        description: "Returns information about Dodo-Bot.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["info"],
    type: "messageCreate",
    code: `$userCooldown[aboutinfocmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[aboutinfocmd]];1000]]:R>]

$title[About Dodo-Bot]
$description[
Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time providing a couple of useful features! It is basically a bot made in ForgeScript!

The project has been ongoing since late 2021, and it continues to be developed with new improvements along with other types of updates to this day!
]
$color[$getGlobalVar[embedcolor]]
$attachment[./assets/dodo-bot-logo.png;dodobot-logo.png]
$thumbnail[attachment://dodobot-logo.png]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot;Source code;Link]
    `
}
