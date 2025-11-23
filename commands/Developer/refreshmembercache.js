module.exports = {
    name: "refreshmembercache",
    info: {
        description: "Updates member cache (useful to fix incorrect count).",
        perms: ["`SendMessages`"],
        dev: "true"
    },
    aliases: ["refreshusercache", "refreshguildcache", "refreshservercache"],
    code: `
    $editMessage[$get[messageID];Successfully refreshed member cache!]
    $forEachGuild[2s;{};refreshmembercache;]
    $wait[2s]
    $let[messageID;$sendMessage[Refreshing member cache...;true]]
    $cooldown[2s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;refreshmembercache;$authorID];$dateStamp];1000]]:R>]
    $onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
}
