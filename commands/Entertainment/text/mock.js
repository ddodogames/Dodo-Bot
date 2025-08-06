module.exports = {
    name: "mock",
    info: {
        description: "Adds mockery style to your text.",
        usage: "`mock <text>`",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/mock?text=$uri[$message;encode];GET;;;$get[error]]]
$let[error;Unable to generate the output. Please try again later.]
$onlyIf[$message!=;Please provide a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;mock;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
