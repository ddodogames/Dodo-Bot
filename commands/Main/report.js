module.exports = {
    name: "report",
    info: {
        description: "Returns a link to report issues on Dodo-Bot's GitHub repo.",
        perms: ["`SendMessages`"]
    },
    aliases: "bugreport",
    code: `$title[Reporting bugs]
$description[Even though the bot might not appear to be buggy, it is worth noting that it may contain bugs, and as such, it is recommended to report bugs through the Github repo.

To get started, be sure to have a Github account first, then press the button below to open an issue.
]
$color[$getVar[embedcolor]]
$addButton[1;Open a issue;5;https://github.com/ddodogames/Dodo-Bot/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D;false]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;report;$authorID];$dateStamp];1000]]:R>]
    `
}
