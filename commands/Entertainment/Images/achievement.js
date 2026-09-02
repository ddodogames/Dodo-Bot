module.exports = [{
    name: "achievement",
    info: {
        description: "Generates a Minecraft-style achievement popup with your own text.",
        usage: "`achievement <text>`",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    type: "messageCreate",
    aliases: ["mcachievement", "mc-achievement"],
    code: `$userCooldown[achievementcmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[achievementcmd]];1000]]:R>]

$onlyIf[$message!=;Please provide a text.]
$onlyIf[$channelHasPerms[$channelID;$clientID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[apilink;https://api.popcat.xyz/v2/achievement?text=$encodeURI[$message]]
$let[status;$httpRequest[$get[apilink];get]]
$onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please try again later.]
$onlyIf[$charCount[$message]<=86;Your text can't be longer than 86 characters!]
$attachment[$get[apilink];achievement.png]

    `
}]
