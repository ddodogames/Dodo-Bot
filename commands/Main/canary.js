module.exports = {
    name: "canary",
    info: {
        description: "Returns information about Pre-release builds and how to try them.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["devbuilds", "canarybuilds"],
    type: "messageCreate",
    code: `$userCooldown[canarycmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[canarycmd]];1000]]:R>]
$title[About Canary]
$addField[Introduction;Canary is a way to test pre-release builds of upcoming versions of Dodo-Bot before they're released as a stable version.

Builds released in this state are incomplete and may have bugs as a result, so it is not recommended to use them for production purposes.
]
$addField[How to test?;For those who want to host them on their bots. You can download the files from the $hyperlink[canary;https://github.com/ddodogames/Dodo-Bot/tree/canary] branch on GitHub.

Alternatively, you can invite the official development bot by clicking the button below to do so.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=52416;Invite Canary bot;Link]
`
}
