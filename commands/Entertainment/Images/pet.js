module.exports = [{
    name: "pet",
    info: {
        description: "Creates a pet GIF meme using user's profile picture.",
        usage: "`pet (user)`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    type: "messageCreate",
    code: `$userCooldown[petcmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[petcmd]];1000]]:R>]
    $onlyIf[$channelHasPerms[$channelID;$clientID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
    $let[user;$findUser[$message[0];true]]
    $let[apilink;https://api.popcat.xyz/v2/pet?image=$userAvatar[$get[user];4096;png]]
    $let[status;$httpRequest[$get[apilink];get]]
    $onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please, try again later.]
    $attachment[$get[apilink];pet.gif]

    `
}]
