module.exports = [{
    name: "Welcomemessage",
    params: [{
        'name': 'text',
        'type': 'String',
        'required': true
    }],
    code: `
    $let[globalname;$advancedReplaceText[$checkCondition[$userGlobalName[$authorID]==];true;$username[$authorID];false;$userGlobalName[$authorID]]]
    $let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$authorID]==true];true;$userTag[$authorID];false;$username[$authorID]]]

    $let[content;$advancedReplace[$env[text];<user.username>;$get[username];<user.mention>;<@$authorID>;<user.id>;$authorID;<owner.username>;$guildOwnerID;<owner.id>;$guildOwnerID;<server.name>;$serverName;<server.id>;$guildID;<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>;<server.totalMembers>;$guildMemberCount;<user.position>;$ordinal[$memberJoinPosition];<user.displayname>;$userDisplayname;<user.globalname>;$get[globalname]]]

    $return[$get[content]]
    `
}]
