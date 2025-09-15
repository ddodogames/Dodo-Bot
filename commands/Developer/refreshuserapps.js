module.exports = {
    name: "refreshuserapps",
    info: {
        description: "Updates user apps to the latest change done to them",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["restartslash", "refreshslash", "refreshapps", "restartuserapps", "restartapps"],
    code: `
    $editMessage[$get[messageID];Successfully refreshed user apps!]
    $deleteVar[isuserappsalreadysetup;;main]
    $awaitExecute[createuserapps]
    $wait[2s]
    $setVar[isuserappsalreadysetup;no]
    $let[messageID;$sendMessage[Refreshing user apps...;true]]
    $onlyIf[$getVar[isuserappsalreadysetup]==yes;User apps must be created already.]
    $onlyIf[$getVar[userapps]==true;You must have the setup option \`EnableUserApps\` enabled in order to use this.]
    $onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
}
