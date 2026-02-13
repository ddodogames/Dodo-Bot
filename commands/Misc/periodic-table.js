module.exports = {
    name: "periodic-table",
    info: {
        description: "Returns random periodic table.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    type: "messageCreate",
    aliases: ["pt"],
    code: `$userCooldown[periodictablecmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[periodictablecmd]];1000]]:R>]
$let[status;$httpRequest[https://api.popcat.xyz/v2/periodic-table/random;get]]
$onlyIf[$get[status]==200;Unable to fetch data for periodic table. Please try again later.]

$title[$httpResult[message;name]]
$description[
**About $httpResult[message;name]**
$httpResult[message;summary]
]
$addField[General;
* **Phase**: $httpResult[message;phase]
* **atomic number**: $httpResult[message;atomic_number]
* **atomic mass**: $httpResult[message;atomic_mass]
;true]
$addField[Other;
* **Symbol**: $httpResult[message;symbol]
* **Period**: $httpResult[message;period]
* **Discovered by**: $httpResult[message;discovered_by]
;true]
$thumbnail[$httpResult[message;image]]
$color[$getGlobalVar[embedcolor]]

    `
}
