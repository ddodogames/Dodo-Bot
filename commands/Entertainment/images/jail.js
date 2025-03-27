module.exports = {
    name: "jail",
    info: {
        description: "Puts your/user's profile picture behind the bars.",
        usage: "`jail (user)`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    code: `$attachment[$get[apilink];jail.png;URL]
$onlyIf[$IsValidImageLink[$get[apilink]]==true;It looks like there're issues with processing the image. Please, try again later if possible.]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[apilink;https://api.popcat.xyz/jail?image=$get[pfphandler]]
$let[pfphandler;$advancedReplaceText[$userAvatar[$mentioned[1;true]];.webp;.png;.gif;.png]]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;jail;$authorID];$dateStamp];1000]]:R>]`
    }
