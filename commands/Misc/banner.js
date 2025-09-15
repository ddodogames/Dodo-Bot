module.exports = {
    name: "banner",
    info: {
        description: "Returns your/users profile banner.",
        usage: "`banner (user)`",
        perms: ["`SendMessages`"]
    },
    aliases: ["userbanner","usrbanner"],
    code: `$title[$get[username]'s Banner]
    $image[$userBanner[$get[user]]]
    $color[$getVar[embedcolor]]
    $addButton[1;Download;5;$nonEscape[$userBanner[$get[user]]];false]
    $onlyIf[$userBanner[$get[user]]!=null;$get[error]]

    $let[error;$advancedReplaceText[$checkCondition[$get[user]==$authorID];true;You don't have a banner.;false;This user does not have a banner attached to their profile.]]
    $let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
    $let[user;$findUser[$message[1];true]]

    $cooldown[3s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;avatar;$authorID];$dateStamp];1000]]:R>]
    `
}
