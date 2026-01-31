module.exports = {
    name: "mock",
    info: {
        description: "Makes a text seem like mockery.",
        usage: "`mock <text>`",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;message.text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/mock?text=$uri[$message;encode];GET;;;$get[error]]]
$let[error;Unable to generate the output. Please try again later.]
$onlyIf[$message!=;Please provide a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;mock;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
