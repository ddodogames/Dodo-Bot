module.exports = {
name: "would-you-rather",
info: {
    description: "Starts a game of two options to choose from.",
    usage: "`would-you-rather (flag)`",
    perms: ["`SendMessages`", "`AddReactions` (if using `--usereactions` flag)"],
    flags: ["`--usereactions`"]
},
$if: "old",
aliases: "wyr",
code: `$title[Would you rather...]
$addField[**Option 2**;$getObjectProperty[api;message.ops2]]
$addField[**Option 1**;$getObjectProperty[api;message.ops1]]
$color[$getVar[embedcolor]]

$if[$checkContains[$message;--usereactions;—usereactions]==true]
$addClientReactions[1️⃣;2️⃣]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;addreactions]==true;
I do not have permissions to add reactions to my message in this channel. Please either grant me \`AddReactions\` permission or use buttons instead.
]
$else
$addButton[1;0;2;wyr2-votebutton;false;2️⃣]
$addButton[1;0;2;wyr1-votebutton;false;1️⃣]
$endif

$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/wyr;GET;;;$get[error]]]
$let[error;Unable to fetch question data for wyr. Please try again later.]
$cooldown[4s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;would-you-rather;$authorID];$dateStamp];1000]]:R>]
`
}
