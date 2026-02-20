module.exports = {
name: "about",
info: {
    description: "Returns information about Dodo-Bot.",
    perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["info", "botinfo"],
code: `
$title[About Dodo-Bot]
$description[Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time providing a couple of useful features (e.g, the Welcomer feature)! It is basically a bot made in aoi.js v6!

The project has been ongoing since late 2021, and it continues to be developed with new improvements along with other types of updates to this day!
]
$color[$getVar[embedcolor]]
$addButton[1;Source Code;5;https://github.com/ddodogames/Dodo-Bot;false]
$thumbnail[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/dodo-bot-logo.png]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;about;$authorID];$dateStamp];1000]]:R>]
`
}
