module.exports = {
name: "eval",
info: {
    description: "Executes codes for testing (in ForgeScript only).",
    usage: "`eval <code>`",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["e"],
type: "messageCreate",
code: `$callFunction[Devsonly]
$onlyIf[$message!=;Please provide a code.]
$eval[$message;true]`
}
