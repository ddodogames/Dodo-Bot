module.exports = [{
    name: "welcomertextmodetest",
    type: "awaited",
    code: `
**This is a test welcome message! Please, ignore this.**
$get[content]
    
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]`
    },{
    name: "welcomerembedmodetest",
    type: "awaited",
    code: `
**This is a test welcome message! Please, ignore this.**
    $author[Member joined;$get[serverimage]]
    $description[
    $get[content]
    ]
    $thumbnail[$authorAvatar]
    $color[$getGuildVar[welcomemessageembedcolor]]
    
    $let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userDefaultAvatar[$clientID]]]
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]
    `
    },{
    name: "welcomertextmode",
    type: "awaited",
    code: `
    $get[content]
    
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]`
    },{
    name: "welcomerembedmode",
    type: "awaited",
    code: `
    $author[Member joined;$get[serverimage]]
    $description[
    $get[content]
    ]
    $thumbnail[$authorAvatar]
    $color[$getGuildVar[welcomemessageembedcolor]]
    
    $let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userDefaultAvatar[$clientID]]]
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]
    `
    }]
