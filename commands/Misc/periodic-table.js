module.exports = {
    name: "periodic-table",
    info: {
        description: "Returns random periodic table.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["pt"],
    code: `

    $title[$getObjectProperty[api;message.name]]
    $description[
    **About $getObjectProperty[api;message.name]**
    $getObjectProperty[api;message.summary]
    ]
    $addField[Other;
* **Symbol**: $getObjectProperty[api;message.symbol]
* **Period**: $getObjectProperty[api;message.period]
* **Discovered by**: $getObjectProperty[api;message.discovered_by]
    ;true]
    $addField[General;
* **Phase**: $getObjectProperty[api;message.phase]
* **atomic number**: $getObjectProperty[api;message.atomic_number]
* **atomic mass**: $getObjectProperty[api;message.atomic_mass]
    ;true]
    $thumbnail[$getObjectProperty[api;message.image]]
    $color[$getVar[embedcolor]]

    $createObject[api;$nonEscape[$get[jsonresponse]]]
    $onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
    $let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/periodic-table/random;GET;;;$get[error]]]
    $let[error;Unable to fetch data for periodic-table. Please try again later.]

    $cooldown[3s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;periodic-table;$authorID];$dateStamp];1000]]:R>]
    `
}
