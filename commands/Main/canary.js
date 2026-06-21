module.exports = {
    name: "canary",
    info: {
        description: "Returns information about Pre-release builds and how to try them.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["devbuilds", "canarybuilds", "dev", "unstable"],
    type: "messageCreate",
    code: `$userCooldown[canarycmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[canarycmd]];1000]]:R>]
$title[About Canary]
$addField[Introduction;Canary is the unstable branch for developing upcoming versions of Dodo-Bot before they're eventually released as a stable version.

Builds released from this branch are incomplete and may have bugs as a result, so it is not recommended to use them for normal usage.
]
$addField[How to test?;For those who want to run the latest build on their bots. Check out the instructions $hyperlink[here;https://dodo-bot-project.github.io/advanced/canary].

Alternatively, you can invite the official Canary bot by clicking the button below to do so.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=52416;Invite the Canary bot;Link]
`
}
