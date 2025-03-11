module.exports = [{
  name: "joke",
  info: {
    description: "Returns random jokes.",
    perms: ["`SendMessages`"]
},
  aliases: "jokes",
  code: `$ifAwaited[$getObjectProperty[api;joke]==;{execute:twopart};{execute:single}]
  $createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for jokes. Please, try again later.]
$let[jsonresponse;$httpRequest[https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode;GET;;;dead]]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;joke;$authorID];$dateStamp];1000]]:R>]`
},{
name: "twopart",
type: "awaited",
code: `
Setup: $getObjectProperty[api;setup]
Delivery: $getObjectProperty[api;delivery]
`
},{
name: "single",
type: "awaited",
code: `
$getObjectProperty[api;joke]
`
}]
