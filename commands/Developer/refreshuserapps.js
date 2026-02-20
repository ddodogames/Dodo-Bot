module.exports = {
    name: "refreshuserapps",
    info: {
        description: "Updates user apps to the latest change done to them.",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["restartslash", "refreshslash", "refreshapps", "restartuserapps", "restartapps"],
    code: `
    $editMessage[$get[messageID];Successfully refreshed user apps!]
    $awaitExecute[createuserapps]
    $wait[2s]
    $deleteVar[isuserappsalreadysetup;;main]
    $let[messageID;$sendMessage[Refreshing user apps...;true]]
    $onlyIf[$getVar[isuserappsalreadysetup]==yes;Make sure user apps are created already.]
    $onlyIf[$getVar[userapps]==true;You must have the setup option \`EnableUserApps\` enabled in order to use this.]
    $cooldown[2s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;refreshuserapps;$authorID];$dateStamp];1000]]:R>]
    $onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
}
