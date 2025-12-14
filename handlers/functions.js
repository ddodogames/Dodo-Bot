module.exports = [{
    name: "randomtopic",
    params: [],
    code: `
$let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?;Are you afraid of the future?;What are you looking forward to in the future?;What year do you miss the most and wish to go back to it?]]

    $return[$get[topics]]
    `
  },{
    name: "8ballanswers",
    params: [],
    code: `$let[answers;$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]]

    $return[$get[answers]]
`
  },{
    name: "filterembedflag",
    params: ["text"],
    code: `
$let[message;$advancedReplace[$env[text];--embed;;—embed;]]
    $return[$get[message]]
    `
  },{
    name: "hasusertag",
    params: ["userID"],
    code: `
$let[user;$findUser[$env[userID];true]]
$let[result;$checkCondition[$charCount[$discriminator[$get[user]]]!=1]]

    $return[$get[result]]
    `
  },{
    name: "hasnickname",
    params: ["guildID", "userID"],
    code: `
$let[user;$findUser[$env[userID];true]]
$let[result;$checkCondition[$nickname[$env[guildID];$get[user]]!=$userDisplayName[$get[user]]]]

    $return[$get[result]]
    `
  },{
    name: "excludespecialchars",
    params: ["content"],
    code: `
$let[message;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$env[content];+;];-;];/;];%;];&;];$;];#;];^;];(;];);];*;];!;];?;]]

    $return[$get[message]]
    `
  },{
    name: "autoListroles",
    params: ["variable", "sep"],
    code: `
        $c[Let's create the array.]
        $arrayLoad[totalList;$env[sep];$env[variable]]

        $c[Let's map each element of the array.]
        $arrayMap[totalList;element;
            $c[Get the text based on the current array element.]
            $if[$env[element]==none;
                $return[None];
                $let[getroles;$if[$roleExists[$guildID;$env[element]];<@&$trim[$env[element]]>;\`Deleted Role\`]]
                $return[* $get[getroles]]
            ]

        ;result]

        $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListchannels",
    params: ["variable", "sep"],
    code: `
        $c[Let's create the array.]
        $arrayLoad[totalList;$env[sep];$env[variable]]

        $c[Let's map each element of the array.]
        $arrayMap[totalList;element;
            $c[Get the text based on the current array element.]
            $if[$env[element]==none;
                $return[None];
                $let[getchannels;$if[$guildChannelExists[$guildID;$env[element]];<#$trim[$env[element]]>;\`Deleted Channel\`]]
                $return[* $get[getchannels]]
            ]

        ;result]

        $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListcategories",
    params: ["variable", "sep"],
    code: `
        $c[Let's create the array.]
        $arrayLoad[totalList;$env[sep];$env[variable]]

        $c[Let's map each element of the array.]
        $arrayMap[totalList;element;
            $c[Get the text based on the current array element.]
            $if[$env[element]==none;
                $return[None];
                $let[getcategories;$if[$guildChannelExists[$guildID;$env[element]];**$channelName[$trim[$env[element]]]**;\`Deleted Category\`]]
                $return[* $get[getcategories]]
            ]

        ;result]

        $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListText",
    params: ["variable", "sep"],
    code: `
        $c[Let's create the array.]
        $arrayLoad[totalList;$env[sep];$env[variable]]

        $c[Let's map each element of the array.]
        $arrayMap[totalList;element;
            $c[Get the text based on the current array element.]
            $if[$env[element]==none;
                $return[None];
                $return[* $trim[$env[element]]]
            ]

        ;result]

        $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListServers",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $return[* $trim[$serverName[$env[element]] - $env[element]]]
    ;result]

    $return[$arrayJoin[result;\n]]
    `
},{
   name: "userURL",
   params: ["userID"],
   code: `$return[https://discord.com/users/$env[userID]]`
},{
    name: "randomColor",
    params: [],
    code: `$return[$djsEval[const hex = Math.floor(Math.random() * 16777215).toString(16)
    hex.padStart(6, "0")
    ]]`
},{
    name: "Welcomemessage",
    params: ["text"],
    code: `
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$authorID]==true];true;$userTag[$authorID];false;$username[$authorID]]]

    $let[content;$advancedReplace[$env[text];<user.username>;$get[username];<user.mention>;<@$authorID>;<user.id>;$authorID;<owner.username>;$guildOwnerID;<owner.id>;$guildOwnerID;<server.name>;$serverName;<server.id>;$guildID;<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>;<server.totalMembers>;$guildMemberCount;<user.position>;$ordinal[$memberJoinPosition];<user.displayname>;$userDisplayname;<user.globalname>;$get[globalname]]]

    $return[$get[content]]
    `
},{
    name: "Leavemessage",
    params: ["text"],
    code: `
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$authorID]==true];true;$userTag[$authorID];false;$username[$authorID]]]

    $let[content;$advancedReplace[$env[text];<user.username>;$get[username];<user.mention>;<@$authorID>;<user.id>;$authorID;<owner.username>;$guildOwnerID;<owner.id>;$guildOwnerID;<server.name>;$serverName;<server.id>;$guildID;<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>;<server.totalMembers>;$guildMemberCount;<user.position>;$ordinal[$memberJoinPosition];<user.displayname>;$userDisplayname;<user.globalname>;$get[globalname]]]

    $return[$get[content]]
    `
},{
    name: "Levelingmessage",
    params: ["text"],
    code: `
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]

    $let[content;$advancedReplace[$env[text];<user.mention>;<@$authorID>;<user.username>;$username;<oldlevel>;$getMemberVar[previouslevel];<newlevel>;$getMemberVar[level];<user.displayname>;$userDisplayname;<user.globalname>;$get[globalname]]]

    $return[$get[content]]
    `
},{
    name: "Devsonly",
    params: [],
    code: `
    $return[
    $if[$and[$getGlobalVar[AllowBotManagers]==true;$botTeamID!=];
    $arrayLoad[users;, ;$botTeamMembers[id]]
    $arrayLoad[roles;, ;$botTeamMembers[role]]
    $arrayLoad[membershipstate;, ;$botTeamMembers[membership]]

    $onlyIf[$checkContains[$arrayJoin[users;, ];$authorID]==true;]
    $onlyIf[$env[membershipstate;$arrayIndexOf[users;$authorID]]==Accepted;]
    $onlyIf[$env[roles;$arrayIndexOf[users;$authorID]]!=ReadOnly;]
    ;
    $onlyIf[$checkContains[$clientOwnerID[false];$authorID]==true;]
    ]
    ]


    `
}]
