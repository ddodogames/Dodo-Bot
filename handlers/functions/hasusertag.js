module.exports = [{
    name: "hasusertag",
    params: [{
        'name': 'userID',
        'type': 'String',
        'required': false
    }],
    code: `
    $let[user;$findUser[$env[userID];true]]
    $let[result;$checkCondition[$charCount[$discriminator[$get[user]]]!=1]]

    $return[$get[result]]
    `
}]
