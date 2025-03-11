module.exports = {
  name: "fact",
  info: {
    description: "Returns random facts.",
    perms: ["`SendMessages`"]
},
  code: `$getObjectProperty[api;fact]
  $createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for fact. Please, try again later.]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/fact;GET;;;dead]]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;fact;$authorID];$dateStamp];1000]]:R>]`
}
