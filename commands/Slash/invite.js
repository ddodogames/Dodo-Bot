module.exports = {
name: "invite",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns a link to invite the bot."
},
code: `$interactionReply[{newEmbed:{title:invite Dodo-Bot}{description:To invite the bot into a server, press the button below.}{color:$getVar[embedcolor]}}{actionRow:{button:Invite:5:$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]]:false}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
