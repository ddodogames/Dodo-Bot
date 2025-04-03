module.exports = [{
    name: "$clientAvatar",
    type: "aoi.js",
    params: [],
    code: `$userAvatar[$clientID]`
},{
    name: "$randomTopic",
    type: "aoi.js",
    params: [],
    code: `$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]`
},{
    name: "$8ballanswers",
    type: "aoi.js",
    params: [],
    code: `$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]`
  },{
    name: "$hasUserTag",
    type: "aoi.js",
    params: ["userID"],
    code: `$checkCondition[$charCount[$discriminator[$get[userInput]]]!=1]

$let[userInput;{userID}]`
  },{
   name: "$userURL",
   type: "aoi.js",
   params: ["userID"],
   code: `https://discord.com/users/{userID}`
  },{
    name: "$commandExists",
    type: "aoi.js",
    params: ["name"],
    code: `$checkCondition[$commandInfo[$toLowerCase[{name}];name]!=]`
  },{
    name: "$autoList",
    type: "aoi.js",
    params: ["text", "seperator", "type"],
    code: `$arrayMap[returnlist;{type};
;{}]
$createArray[returnlist;$nonEscape[$get[createlist]]]
$let[createlist;$advancedReplaceText[{text};{seperator};#SEMI#]]`
  },{
    name: "$welcomerMessage",
    type: "aoi.js",
    params: ["content"],
    code: `$advancedReplaceText[$get[content];<server.totalMembers>;$membersCount;<username>;$get[username];<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<Displayname>;$userDisplayName;<globalname>;$get[globalname]]

    $let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$authorID]==false];true;$username[$authorID];false;$userTag[$authorID]]]
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[content;{content}]
    `
  },{
    name: "$leaveMessage",
    type: "aoi.js",
    params: ["content"],
    code: `$advancedReplaceText[$get[content];<server.totalMembers>;$membersCount;<username>;$get[username];<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:f>;<Displayname>;$userDisplayName;<globalname>;$get[globalname]]

    $let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$authorID]==false];true;$username[$authorID];false;$userTag[$authorID]]]
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[content;{content}]
    `
  },{
    name: "$levelUpMessage",
    type: "aoi.js",
    params: ["content"],
    code: `$advancedReplaceText[$get[content];<newlevel>;$getUserVar[level];<mention>;<@$authorID>;<username>;$username;<oldlevel>;$getUserVar[previouslevel];<Displayname>;$userDisplayName;<globalname>;$get[globalname]]

    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[content;{content}]
    `
  },{
  name: "$createProgressBar",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [value, max, barLength = 15] = data.inside.splits;

    function createBar(value, max, barLength) {
      const progress = Math.round((Math.max(value, 0) / max) * barLength);
      const progressText = "=".repeat(progress) + "-".repeat(barLength- progress);
      return progressText;
    }

    data.result = createBar(Number(value), Number(max), Number(barLength));
    return {
      code: d.util.setCode(data)
    }
  }
},{
  name: "$excludeSpecialChars",
  type: "aoi.js",
  params: ["text"],
  code: `$removeContains[{text};+;-;/;%;&;!;?;@;^;*;<;>;$;#;.;_;=;~;|;';,]`
},{
  name: "$randomColor", // Exclusive to user apps for now
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);

    const hex = Math.floor(Math.random() * 16777215).toString(16);
    data.result = `${hex.padStart(6, "0")}`;

    return {
      code: d.util.setCode(data)
    }
  }
},{
  name: "$owoify",
  type: "aoi.js",
  params: ["text"],
  code: `$replaceTextWithRegex[$replaceTextWithRegex[{text};/r|l/;g;w];/R|L/;g;W]`
},{ // credit goes to https://github.com/aoijs/aoi.js/pull/678 for the original code
  name: "$messageAttachments",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [sep = ', '] = data.inside.splits;

    data.result = d.message.attachments.map(x => x?.url).join(sep);
    return {
        code: d.util.setCode(data)
    }
  }
}]



/* Disabled

{
name: "$dodoAvatar",
type: "aoi.js",
params: [],
code: `$userAvatar[632607624742961153]`
},{
name: "$fallbackAttachment",
type: "aoi.js",
params: ["url", "fallbacktoUse"],
code: `$advancedReplaceText[$checkCondition[$IsValidImageLink[$get[Input]]==true];true;$get[Input];false;$get[FallbackInput]]
$let[FallbackInput;{fallbacktoUse}]
$let[Input;{url}]`
}

*/
