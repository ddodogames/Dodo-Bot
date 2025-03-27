module.exports = {
    name: "lulcat",
    info: {
        description: "Makes your text look cursed using lul cat language.",
        usage: "lulcat <text>",
        perms: ["`SendMessages`"]
    },
    aliases: "lolcat",
    code: `$getObjectProperty[api;text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to generate the output. Please try again later.]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/lulcat?text=$uri[$message;encode];GET;;;dead]]
$onlyIf[$message!=;Please provide a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;lulcat;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
