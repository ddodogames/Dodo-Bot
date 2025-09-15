module.exports = {
    name: "nokia",
    info: {
        description: "Puts your/user's profile picture on a nokia phone.",
        usage: "`nokia (user)`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    code: `$attachment[$get[apilink];nokia.png;URL]
$onlyIf[$IsValidImageLink[$get[apilink]]==true;Looks like there are issues with processing the image. Please try again later if possible.]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[apilink;https://api.popcat.xyz/nokia?image=$get[pfphandler]]
$let[pfphandler;$advancedReplaceText[$userAvatar[$mentioned[1;true]];.webp;.png;.gif;.png]]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;nokia;$authorID];$dateStamp];1000]]:R>]`
    }
