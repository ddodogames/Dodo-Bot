module.exports = [{
  name:"findtheflag",
  info: {
    description: "Starts a game of Find the flag.",
    perms: ["`SendMessages`"]
  },
aliases:"ftf",
code:`
$awaitComponents[$channelID;$get[messageID];$authorID;ftf1,ftf2,ftf3;ftfresults1,ftfresults2,ftfresults3;ftftimeout;1;30s]

$let[messageID;$sendMessage[{newEmbed:{title:🚩 | Find the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:$getVar[embedcolor]}}

{actionRow:{button::2:ftf1:false:1️⃣}{button::2:ftf2:false:2️⃣}{button::2:ftf3:false:3️⃣}}
;true]]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;findtheflag;$authorID];$dateStamp];1000]]:R>]`
}]
