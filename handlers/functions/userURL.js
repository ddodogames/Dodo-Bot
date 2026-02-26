module.exports = [{
    name: "userURL",
    params: [{
        'name': 'userID',
        'type': 'String',
        'required': false
    }],
    brackets: false,
    code: `$let[ID;$advancedReplace[$checkCondition[$env[userID]==];true;$authorID;false;$env[userID]]]
    $return[https://discord.com/users/$get[ID]]`
}]
