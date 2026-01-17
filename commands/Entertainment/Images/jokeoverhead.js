module.exports = [{
    name: "jokeoverhead",
    info: {
        description: "Creates a silly image of jokeoverhead with user's pfp put over it.",
        usage: "`jokeoverhead (user)`",
        perms: ["`SendMessages`","`AttachFiles`"]
    },
    type: "messageCreate",
    code: `$userCooldown[jokeoverheadcmd;3s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[jokeoverheadcmd]];1000]]:R>]
    $onlyIf[$channelHasPerms[$channelID;$clientID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
    $let[user;$findUser[$message[0];true]]
    $let[apilink;https://api.popcat.xyz/v2/jokeoverhead?image=$userAvatar[$get[user];4096;png]]
    $let[status;$httpRequest[$replace[$get[apilink];?size=4096;];get]]
    $onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please, try again later.]
    $attachment[$get[apilink];jokeoverhead.png]

    `
}]
