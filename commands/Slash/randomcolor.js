module.exports = {
name: "randomcolor",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns a random color that you can use."
},
code: `$interactionReply[{newEmbed:{title:Random Color}{field:**Hex Code**:#$randomColor}{color:#$randomColor}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
