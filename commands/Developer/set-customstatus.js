module.exports = {
name: "set-customstatus",
info: {
    description: "Allows you to set custom status for the bot!",
    usage: "`set-customstatus <text or flag>`",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["setstatus", "set-status", "setcustomstatus", "scs"],
type: "messageCreate",
code: `$callFunction[botDevsOnly]
$onlyIf[$message!=;Please enter a text to be used for the status!

To reset the status, run \`$getGuildVar[prefix]set-customstatus --reset\` to do so.]
$onlyIf[$charCount[$message]<=128;You can only have up to 128 characters for each custom status you set.]
$if[$startsWith[$message;--reset;—reset]==true;
$setStatus[online;Custom;]
Status has been reset!
;
$setStatus[online;Custom;$message]
Status has been set! You can remove it by passing the flag \`--reset\` at the start of your message.
]
`
}

