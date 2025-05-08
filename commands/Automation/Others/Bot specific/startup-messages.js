module.exports = [{
  name: "Startup Message (Console)",
  type: "ready",
  channel: "",
  code: `
$djsEval[const chalk = require('chalk')

console.log(chalk.cyan("Invite Your bot using this link: $getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]"))
]
$djsEval[const chalk = require('chalk')

console.log(chalk.yellow("Tip: Found an issue? Report it here: https://github.com/ddodogames/Dodo-Bot/issues/new/choose"))
]
$log[Dodo-Bot v$getVar[version]$if[$getVar[pre_release]==on; (build $getVar[buildNumber])]$if[$getVar[buildRevision]!=0; (Revision $getVar[buildRevision])] is ready to be used on the client $userTag[$clientID]!]
$wait[2s]
$ifAwaited[$getVar[pre_release]==on;{execute:showdevwarning}]
`
},{
 name: "Startup Message (Channel)",
 type: "ready",
 channel: "",
 code: `
$title[Ready!]
$description[$username[$clientID] is now running!]
$color[DarkGreen]
$useChannel[$getVar[startupchannel]]

$onlyIf[$hasPermsInChannel[$getVar[startupchannel];$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$channelExists[$getVar[startupchannel]]==true;]
$onlyIf[$getVar[startupchannel]!=none;]
$onlyIf[$getVar[startupchannelsystem]==on;]
`
},{
  name: "showdevwarning",
  type: "awaited",
  code: `$djsEval[const chalk = require('chalk')

console.log(chalk.redBright("Development build detected!\\nUsing Development builds are not recommended for public usage as they may contain bugs and as such, it is advised to try them for testing purposes only!"))]
`
}]
