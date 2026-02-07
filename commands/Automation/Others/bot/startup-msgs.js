module.exports = [{
    name: "Startup message (Console)",
    type: "clientReady",
    code: `$if[$getGlobalVar[pre_release]==on;
$chalkLog[Development build detected!
Using Development builds are not recommended for public usage as they may contain bugs and as such, it is advised to try them for testing purposes only!;bold;red]
]
$wait[2000]
$let[version;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;$getGlobalVar[versionString];false;$getGlobalVar[version]]]
$log[Dodo-Bot v$get[version]$if[$getGlobalVar[showbuildinfo]==on; (build $getGlobalVar[buildNumber])] is ready to be used on the client $userTag[$clientID]!]

$chalkLog[Tip: Found an issue? Report it here: https://github.com/ddodogames/Dodo-Bot/issues/new/choose;yellow]

$chalkLog[Invite your bot here: $clientInvite[52416];cyan]
`
},{
name: "Startup message (Channel)",
type: "clientReady",
code: `$onlyIf[$getGlobalVar[startupsystem]==on;]
$onlyIf[$getGlobalVar[startupchannel]!=;]
$onlyIf[$channelExists[$getGlobalVar[startupchannel]]==true;]
$onlyIf[$channelHasPerms[$getGlobalVar[startupchannel];$clientID;ViewChannel;SendMessages]==true;]
$sendMessage[$getGlobalVar[startupchannel];
$title[Ready!]
$description[$username[$clientID] is now online!]
$color[DarkGreen]
]

`
}]
