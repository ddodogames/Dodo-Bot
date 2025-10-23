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
    $onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
}
