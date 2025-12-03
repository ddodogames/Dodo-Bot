module.exports = {
    name: "jseval",
    info: {
        description: "Executes codes for testing (in djs only).",
        usage: "`jseval <code>`",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["djseval"],
    type: "messageCreate",
    code: `$callFunction[Devsonly]
    $onlyIf[$message!=;Please provide a code.]
    $djsEval[$message]`
}
