module.exports = {
    name: "showerthoughts",
    info: {
        description: "Get random Shower Thoughts!",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    code: `$userCooldown[showerthoughtscmd;3s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[showerthoughtscmd]];1000]]:R>]
    $let[status;$httpRequest[https://api.popcat.xyz/v2/showerthoughts;get]]
    $onlyIf[$get[status]==200;Unable to fetch data for Shower Thoughts. Please try again later.]
    $author[Shower Thoughts]
    $title[From $httpResult[message;author]]
    $description[$httpResult[message;result]]
    $color[$getGlobalVar[embedcolor]]
    `
}
