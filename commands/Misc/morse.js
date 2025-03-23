module.exports = {
    name: "morse",
    info: {
        description: "Converts provided text to morse code!",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;morse]
    $createObject[api;$nonEscape[$get[jsonresponse]]]
    $onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to generate the output. Please try again later.]
    $let[jsonresponse;$httpRequest[https://api.popcat.xyz/texttomorse?text=$uri[$message;encode];GET;;;dead]]
    $onlyIf[$message!=;Please provide a text.]
    $cooldown[3s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;morse;$authorID];$dateStamp];1000]]:R>]
    $disableMentionType[all]`
}
