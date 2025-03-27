module.exports = {
name: "comment",
info: {
    description: "Generates a parody image of YouTube comment with your username and profile picture.",
    usage: "comment <text>",
    perms: ["`SendMessages`", "`AttachFiles`"]
},
aliases: "ytcomment",
code: `$attachment[$get[apilink];comment.png;URL]
$onlyIf[$IsValidImageLink[$get[apilink]]==true;It looks like there're issues with processing the image. Please, try again later if possible.]
$onlyIf[$charCount[$message]<=56;Your comment can't be longer than 56 characters!]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[apilink;https://some-random-api.com/canvas/misc/youtube-comment?username=$uri[$username;encode]&avatar=$get[pfphandler]&comment=$uri[$message;encode]]
$let[pfphandler;$advancedReplaceText[$authorAvatar;.webp;.png;.gif;.png]]
$onlyIf[$message!=;Please Type something.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;comment;$authorID];$dateStamp];1000]]:R>]
`
}
