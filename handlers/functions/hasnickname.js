module.exports = [{
    name: "hasnickname",
    params: [{
        'name': 'guildID',
        'type': 'String',
        'required': false
    },{
        'name': 'userID',
        'type': 'String',
        'required': false
    }],
    brackets: false,
    code: `
    $let[user;$findUser[$env[userID];true]]
    $let[serverID;$advancedReplace[$checkCondition[$env[guildID]==];true;$guildID;false;$env[guildID]]]
    $let[result;$checkCondition[$nickname[$get[serverID];$get[user]]!=$userDisplayName[$get[user]]]]

    $return[$get[result]]
    `
}]
