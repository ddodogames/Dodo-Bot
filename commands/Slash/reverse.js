module.exports = {
name: "reverse",
type: "interaction",
prototype: "slash",
info: {
 description: "Let's you reverse text!."
},
code: `$interactionReply[$nonEscape[$reverse[$slashOption[text]]];users;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
