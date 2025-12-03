module.exports = {
    name: "couldread",
    info: {
        description: "Make your own meme of a King of the Hill cutscene.",
        usage: "`couldread <text>`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    code: `$attachment[$get[apilink];couldread.png;URL]
    $onlyIf[$IsValidImageLink[$get[apilink]]==true;Looks like there are issues with processing the image. Please try again later if possible.]
    $onlyIf[$charCount[$message]<=86;Your message can't be longer than 86 characters!]
    $onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
    $let[apilink;https://api.popcat.xyz/v2/couldread?text=$uri[$message;encode]]
    $onlyIf[$message!=;Please Type something.]
    $cooldown[5s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;couldread;$authorID];$dateStamp];1000]]:R>]`
    }
