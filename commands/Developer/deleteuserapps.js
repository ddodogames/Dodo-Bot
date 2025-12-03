module.exports = {
    name: "deleteuserapps",
    info: {
        description: "Deletes user apps for good until they're recreated again.",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["destroyuserapps", "destroyslash", "destroyapps"],
    code: `

    $editMessage[$get[messageID];Successfully deleted user apps!]
    $awaitExecute[deleteuserapps]
    $wait[2s]
    $deleteVar[isuserappsalreadysetup;;main]
    $let[messageID;$sendMessage[Deleting user apps...;true]]
    $cooldown[2s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;deleteuserapps;$authorID];$dateStamp];1000]]:R>]
    $onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]`

}
