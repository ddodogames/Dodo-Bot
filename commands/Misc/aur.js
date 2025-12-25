module.exports = {
    name: "aur",
    info: {
        description: "Search packages in AUR (for Arch Linux).",
        usage: "`aur <package-name>`",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    aliases: ["aur-search", "aursearch"],
    code: `$userCooldown[aurcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[aurcmd]];1000]]:R>]


$onlyIf[$message!=;Please type a package name to search in AUR.]
$let[status;$httpRequest[https://aur.archlinux.org/rpc/v5/info?arg%5B%5D=$message;get]]
$onlyIf[$get[status]==200;Unable to search a package in AUR. Please try again later.]
$onlyIf[$httpResult[resultcount]!=0;Cannot find that package.]

$attachment[./assets/archlinux.png;archlinux.png]
$let[keywords;$if[$djsEval[$httpResult[results;0;Keywords].join(", ")]!=;$djsEval[$httpResult[results;0;Keywords].join(", ")];None]]
$let[submitter;$if[$httpResult[results;0;Submitter]!=;$httpResult[results;0;Submitter];none]]

$author[Arch User Repository;attachment://archlinux.png;https://aur.archlinux.org/]
$title[$httpResult[results;0;Name] $get[outdatedindicator];https://aur.archlinux.org/packages/$httpResult[results;0;Name]]
$description[$httpResult[results;0;Description]]
$addField[General;
* **Maintainer and Submitter**: $httpResult[results;0;Maintainer] & $get[submitter]
* **License**: $djsEval[$httpResult[results;0;License].join(", ")]
* **Version**: $httpResult[results;0;Version]
* **First submitted on**: <t:$httpResult[results;0;FirstSubmitted]:f>
* **Last updated on**: <t:$httpResult[results;0;LastModified]:f> $if[$httpResult[results;0;OutOfDate]!=null;
* **Marked outdated on**: <t:$httpResult[results;0;OutOfDate]:f>]
]
$addField[Dependencies;
* **Depends on**: $djsEval[$httpResult[results;0;Depends].join(", ")] $if[$httpResult[results;0;OptDepends]!=;
* **Optional**: $djsEval[$httpResult[results;0;OptDepends].join(", ")]]
]
$addField[Keywords;$get[keywords]]
$footer[Note: These are user-submitted packages, use them at your own risk.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=$httpResult[results;0;Name];View PKGBUILD;Link]
$addButton[https://aur.archlinux.org/cgit/aur.git/snapshot/$httpResult[results;0;Name].tar.gz;Download Snapshot;Link]

`
}
