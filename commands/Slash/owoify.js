module.exports = {
name: "owoify",
type: "interaction",
prototype: "slash",
info: {
 description: "Makes text OWOifed.",
},
code: `$interactionReply[$owoify[$slashOption[text]];users;true]

$onlyIf[$getVar[userapps]==true;User apps are currently unavailable.
{ephemeral}
{interaction}
]
`
}
