module.exports = {
name: "report",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns a link to report issues on Dodo-Bot's GitHub repo."
},
code: `$interactionReply[{newEmbed:{title:Reporting bugs}{description:Even though the bot might not appear to be buggy, it is worth noting that it may contain bugs, and as such, it is recommended to report bugs through the Github repo.

To get started, be sure to have a Github account first, then press the button below to open an issue.}{color:$getVar[embedcolor]}}

{actionRow:{button:Open a issue:5:https#COLON#//github.com/ddodogames/Dodo-Bot/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D:false}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
