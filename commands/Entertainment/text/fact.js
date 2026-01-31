module.exports = {
  name: "fact",
  info: {
    description: "Returns random facts.",
    perms: ["`SendMessages`"]
},
  code: `$getObjectProperty[api;message.fact]
  $createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;$get[error]]
$let[jsonresponse;$httpRequest[https://api.popcat.xyz/v2/fact;GET;;;$get[error]]]
$let[error;Unable to fetch data for fact. Please try again later.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;fact;$authorID];$dateStamp];1000]]:R>]`
}
