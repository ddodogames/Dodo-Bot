module.exports = {
    name: "guess-the-pokemon",
    info: {
        description: "Starts a game of Guess The Pokemon. (currently disabled)",
        perms: ["`SendMessages`"]
    },
    type: "messageCreate",
    disableConsoleErrors: true,
    aliases: ["gtp"],
    code: `
    $userCooldown[gtpcmd;3s;Cooldown has been triggered! Please, wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[gtpcmd]];1000]]:R>]

    $let[status;$httpRequest[https://api-gamecord-e0cd45547eef.herokuapp.com/pokemon;get]]
    $onlyIf[$get[status]==200;Unable to fetch data for Pokemon. Please try again later.]

    $let[questionMessage;$sendMessage[$channelID;Loading... Please wait...;true]]
    $wait[3000]
    $!editMessage[$channelID;$get[questionMessage];
    $author[$username;$userAvatar]
    $title[Who's the Pokemon?]
    $addField[Types;$djsEval[$httpResult[data;types].join(", ")];true]
    $addField[Abilities;$djsEval[$httpResult[data;abilities].join(", ")];true]
    $attachment[$httpResult[data;questionImage];questionImage.png]
    $image[attachment://questionImage.png]
    $footer[Height: $httpResult[data;height] | Weight: $httpResult[data;weight]]
    $color[$getGlobalVar[embedcolor]]
    ]

    $let[id;$awaitMessage[$channelID;msg;$authorID==$getMessage[$channelID;$env[msg];authorID];60s]]
    $onlyIf[$get[id]!=;$!editMessage[$channelID;$get[questionMessage];Better luck next time! It was a $httpResult[data;name]]]


    $if[$getMessage[$channelID;$get[id];content]==$httpResult[data;name];
    $!editMessage[$channelID;$get[questionMessage];
    You guessed it right! It was a $httpResult[data;name].
    $author[$username;$userAvatar]
    $title[Who's the Pokemon?]
    $addField[Types;$djsEval[$httpResult[data;types].join(", ")];true]
    $addField[Abilities;$djsEval[$httpResult[data;abilities].join(", ")];true]
    $attachment[$httpResult[data;answerImage];answerImage.png]
    $image[attachment://answerImage.png]
    $footer[Height: $httpResult[data;height] | Weight: $httpResult[data;weight]]
    $color[$getGlobalVar[embedcolor]]
    ]
    ;
    $!editMessage[$channelID;$get[questionMessage];Better luck next time! It was a $httpResult[data;name]]
    ]

    `
}
