module.exports = {
name: "about",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns information about Dodo-Bot."
},
code: `$interactionReply[{newEmbed:{title:About Dodo-Bot}{description:Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time providing a couple of useful features (e.g, the Welcomer feature)! It is basically a bot made in aoi.js v6!

The project has existed since late 2021 and to this day, it continues to be developed with new improvements along with other type of updates as well!}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/dodo-bot-logo.png}{color:$getVar[embedcolor]}}

{actionRow:{button:Source Code:5:https#COLON#//github.com/ddodogames/Dodo-Bot:false}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
