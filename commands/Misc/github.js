module.exports = {
    name: "github",
    info: {
        description: "Get info on a github user just by entering their username!",
        usage: "`github <username>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    type: "messageCreate",
    code: `$userCooldown[githubcmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[githubcmd]];1000]]:R>]


$onlyIf[$message!=;Please include the language you want to use for translation.]
$let[message;$toLowerCase[$message]]
$let[status;$httpRequest[https://api.popcat.xyz/v2/github/$encodeURI[$get[message]];get]]
$onlyIf[$get[status]==200;Unable to check the profile. The reasons are either:
1. The account with that username could not be found. Check if you have typed the username correctly
2. The URL for checking the accounts is currently down. Please try again later.
]

$let[githubblog;$advancedReplace[$checkCondition[$httpResult[message;blog]==None];true;None;false;$hyperlink[click here;$httpResult[message;blog]]]]

$attachment[./assets/github.png;github.png]
$author[GitHub;attachment://github.png]
$title[$httpResult[message;name];$httpResult[message;url]]
$addField[General;
* **Public repos:** $httpResult[message;public_repos]
* **Public gists:** $httpResult[message;public_gists]
* **Type:** $httpResult[message;account_type]
* **Followers:** $httpResult[message;followers]
* **Created at:** <t:$trunc[$divide[$unparseDate[$httpResult[message;created_at]];1000]]:f>
;true]
$addField[Other;
* **Public email:** $httpResult[message;email]
* **Blog:** $get[githubblog]
* **Company:** $httpResult[message;company]
* **Following:** $httpResult[message;following]
;true]
$thumbnail[$httpResult[message;avatar]]
$color[$getGlobalVar[embedcolor]]

`
}
