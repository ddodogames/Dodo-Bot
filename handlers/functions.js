module.exports = [{
    name: "randomtopic",
    params: [],
    code: `
$let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]]

    $return[$get[topics]]
    `
  },{
    name: "commandperms",
    params: ["name"],
    code: `$jsonLoad[perms;$commandInfo[messageCreate;$env[name];info;perms]]
$let[check;$advancedReplace[$checkCondition[$arrayJoin[perms;, ]==];true;$commandInfo[messageCreate;$env[name];info;perms];false;$arrayJoin[perms;, ]]]
    $return[$get[check]]
    `
  },{
    name: "commandaliases",
    params: ["name"],
    code: `$jsonLoad[aliases;$commandInfo[messageCreate;$env[name];aliases]]
$let[check;$advancedReplace[$checkCondition[$arrayJoin[aliases;, ]==];true;$commandInfo[messageCreate;$env[name];aliases];false;$arrayJoin[aliases;, ]]]
    $return[$get[check]]
    `
  },{
    name: "commandflags",
    params: ["name"],
    code: `$jsonLoad[flags;$commandInfo[messageCreate;$env[name];info;flags]]
$let[check;$advancedReplace[$checkCondition[$arrayJoin[flags;, ]==];true;$commandInfo[messageCreate;$env[name];info;flags];false;$arrayJoin[flags;, ]]]
    $return[$get[check]]
    `
  },{
    name: "sayembedmodefilter",
    params: ["content"],
    code: `
$let[message;$replace[$replace[$env[content];--embed;];—embed;]]

    $return[$get[message]]
    `
  },{
    name: "hasusertag",
    params: ["query"],
    code: `
$let[user;$findUser[$env[query];true]]
$let[result;$checkCondition[$charCount[$discriminator[$get[user]]]!=1]]

    $return[$get[result]]
    `
  },{
    name: "hasnickname",
    params: ["guildID", "query"],
    code: `
$let[user;$findUser[$env[query];true]]
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
    name: "8ballanswers",
    params: [],
    code: `$let[Answers;$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]]

    $return[$get[Answers]]
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
                $return[* <@&$trim[$env[element]]>]
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
                $return[* <#$trim[$env[element]]>]
            ]

        ;result]

        $return[$arrayJoin[result;\n]]
    `
},{
   name: "userURL",
   params: ["userID"],
   code: `
   $return[https://discord.com/users/$env[userID]]`
  },{
    name: 'isImageLink',
    params: ['url', 'method'],
    code: `
        $djsEval[
            const { fetch } = require("undici");
            (async () => {
                const res = await fetch("$env[url]", {
                    ...ctx.http,
                    method: "$env[method]",
                    body: ctx.http.body ?? ctx.http.form
                });
                const headers = res.headers;
                const header = headers.get("Content-Type").split(/;/g).at(0);

                ctx.setEnvironmentKey("gotHeader", header);
            })();
        ]

        $return[$env[gotHeader]]
    `
},{
   name: "fallbackAttachment",
   params: ["url", "fallbacktoUse"],
   code: `
$let[condition;$or[$isImageLink[$env[url];get]==image/jpeg;$isImageLink[$env[url];get]==image/png;$isImageLink[$env[url];get]==image/webp]]
$let[result;$replace[$replace[$checkCondition[$get[condition]==true];true;$env[url]];false;$env[fallbacktoUse]]]

   $return[$get[result]]
`
  }]