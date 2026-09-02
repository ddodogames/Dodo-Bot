module.exports = [{
name: "comment",
info: {
        description: "Generates a parody image of YouTube comment with your username and profile picture.",
        usage: "`comment <text>`",
        perms: ["`SendMessages`", "`AttachFiles`"]
},
type: "messageCreate",
aliases: ["ytcomment"],
code: `$userCooldown[commentcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[commentcmd]];1000]]:R>]

$onlyIf[$message!=;Please provide a text.]
$onlyIf[$channelHasPerms[$channelID;$clientID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[author;$authorID]
$let[apilink;https://some-random-api.com/canvas/misc/youtube-comment?username=$username&avatar=$userAvatar[$get[author];4096;png]&comment=$encodeURI[$message]]
$let[status;$httpRequest[$get[apilink];get]]
$onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please try again later.]
$onlyIf[$charCount[$message]<=56;Your text can't be longer than 56 characters!]
$attachment[$get[apilink];comment.png]

`
}]
