module.exports = {
    name: "reverse",
    info: {
        description: "Reverses provided text.",
        usage: "`reverse <text>`",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/reverse?text=$uri[$message;encode];GET;;;$get[error]]]
$let[error;Unable to generate the output. Please try again later.]
$onlyIf[$message!=;Please provide a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;reverse;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
}
