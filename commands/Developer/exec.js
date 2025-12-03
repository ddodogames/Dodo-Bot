module.exports = {
name: "execute",
info: {
    description: "Runs terminal commands directly in Discord.",
    usage: "`execute <command>`",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["exec"],
type: "messageCreate",
code: `$callFunction[Devsonly]
$onlyIf[$message!=;Please provide a command.]
$if[$charCount[$exec[$message]]>=2000;
$attachment[$exec[$message];output.txt;true]
;
$codeBlock[$exec[$message]]
]`
}
