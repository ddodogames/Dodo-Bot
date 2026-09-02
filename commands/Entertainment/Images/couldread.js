module.exports = [{
    name: "couldread",
    info: {
        description: "Make your own meme of a King of the Hill cutscene.",
        usage: "`couldread <text>`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    type: "messageCreate",
    code: `$userCooldown[couldreadcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[couldreadcmd]];1000]]:R>]

$onlyIf[$message!=;Please provide a text.]
$onlyIf[$channelHasPerms[$channelID;$clientID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[apilink;https://api.popcat.xyz/v2/couldread?text=$encodeURI[$message]]
$let[status;$httpRequest[$get[apilink];get]]
$onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please try again later.]
$onlyIf[$charCount[$message]<=86;Your comment can't be longer than 86 characters!]
$attachment[$get[apilink];couldread.png]

    `
}]
