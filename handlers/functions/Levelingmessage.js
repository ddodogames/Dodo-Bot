module.exports = [{
    name: "Levelingmessage",
    params: [{
        'name': 'text',
        'type': 'String',
        'required': true
    }],
    code: `
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]

    $let[content;$advancedReplace[$env[text];<user.mention>;<@$authorID>;<user.username>;$username;<oldlevel>;$getMemberVar[previouslevel];<newlevel>;$getMemberVar[level];<user.displayname>;$userDisplayname;<user.globalname>;$get[globalname]]]

    $return[$get[content]]
    `
}]
