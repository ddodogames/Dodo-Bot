module.exports = {
    name: "whereiseveryone",
    info: {
        description: "Starts a short recreation of cut-scene from Shrek movie.",
        perms: ["`SendMessages`"]
    },
    code: `$title["It's quiet..."]
$image[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part1.png]
$editIn[5s;{newEmbed:{title:"Too quiet..."}{image:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part2.jpg}};{newEmbed:{title:"Where is Everyone?"}{image:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part3.jpg}}]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;whereiseveryone;$authorID];$dateStamp];1000]]:R>]
    `
    }
