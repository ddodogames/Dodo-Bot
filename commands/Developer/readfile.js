module.exports = {
name: "readfile",
info: {
    description: "Returns the contents of a file.",
    usage: "`readfile <path>`",
    perms: ["`SendMessages`", "`AttachFiles`"],
    dev: "true"
},
aliases: ["viewfile"],
type: "messageCreate",
code: `$callFunction[botDevsOnly]
$onlyIf[$message!=;Please enter the file path.]
$onlyIf[$fileExists[$message]==true;You must specify a file that exists!]
$if[$charCount[$readFile[$message]]>=2000;
$attachment[$readFile[$message];output.js;true]
;
$codeBlock[$readFile[$message];js]
]
`
}
