module.exports = {
    name: "report",
    type: "messageCreate",
    info: {
        description: "Returns a link to report issues on Dodo-Bot's GitHub repo.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["bugreport"],
    code: `$userCooldown[reportbugcmd;2s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[reportbugcmd]];1000]]:R>]

$title[Reporting bugs]
$description[Even though the bot might not look buggy, it is possible that it may contain bugs undiscovered, and so it is recommended to report bugs through the GitHub repo.

To get started, make sure to have a GitHub account first and then press the button below to open an issue.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://github.com/ddodogames/Dodo-Bot/issues/new?template=bug_report.md;Report a bug;Link]
`
}
