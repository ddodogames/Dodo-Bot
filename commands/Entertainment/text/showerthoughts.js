module.exports = {
    name: "showerthoughts",
    info: {
        description: "Get random Shower Thoughts!",
        perms: ["`SendMessages`"]
    },
    code: `
    $author[Shower Thoughts]
    $title[From $getObjectProperty[api;message.author]]
    $description[$getObjectProperty[api;message.result]]
    $color[$getVar[embedcolor]]
    $createObject[api;$nonEscape[$get[jsonresponse]]]
    $onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
    $let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/showerthoughts;GET;;;$get[error]]]
    $let[error;Unable to fetch data for Shower Thoughts. Please try again later.]
    $cooldown[3s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;showerthoughts;$authorID];$dateStamp];1000]]:R>]
    `
}
