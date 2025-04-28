module.exports = {
name: "avatar",
type: "interaction",
prototype: "slash",
info: {
 description: "Returns your/users profile picture."
},
code: `$interactionReply[{newEmbed:{title:$get[username]'s Avatar}{image:$userAvatar[$get[user]]}{color:$getVar[embedcolor]}}

{actionRow:{button:PNG:5:$nonEscape[$userAvatar[$get[user];4096;true;png]]:false}{button:JPG:5:$nonEscape[$userAvatar[$get[user];4096;true;jpg]]:false}{button:WEBP:5:$nonEscape[$userAvatar[$get[user];4096;true;webp]]:false}};all;true]

$let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[user;$advancedReplaceText[$checkCondition[$slashOption[user]==];true;$authorID;false;$slashOption[user]]]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
