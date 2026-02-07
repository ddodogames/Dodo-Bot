module.exports = {
    name: "say",
    info: {
        description: "Makes the bot say whatever you want.",
        usage: "`say <text> (flag)`\n\n-# Execute the command first before specifying parameters.",
        perms: ["`SendMessages`", "`EmbedLinks` (if using `--embed` flag)"],
        flags: ["`--embed`"]
    },
    type: "messageCreate",
    disableConsoleErrors: true,
    code: `
$userCooldown[saycmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[saycmd]];1000]]:R>]

$disableAllMentions
$sendMessage[$channelID;What do you want me to say?

**Tip**: To use embed mode, make sure your message contains the flag \`--embed\` to do so.]
$let[id;$awaitMessage[$channelID;msg;$authorID==$getMessage[$channelID;$env[msg];authorID];30s]]
$onlyIf[$get[id]!=;Time ran out! You didn't make me say anything!]
$let[content;$getMessage[$channelID;$get[id];content]]
$let[clearembedmodewords;$callFunction[filterembedflag;$get[content]]]

$let[links;$randomText[https://www.youtube.com/watch?v=dQw4w9WgXcQ;$clientInvite[52416]]]
$onlyIf[$get[clearembedmodewords]!=;You cannot activate embed mode without providing a text first.]

$sendMessage[$channelID;$if[$or[$checkContains[$get[content];--embed;—embed]==true;$charCount[$get[content]]>=2000];
$author[$username;$userAvatar;$callFunction[userURL;$authorID]]
$title[Say cmd;$get[links]]
$description[$get[clearembedmodewords]]
$color[$callFunction[randomColor]]
;$get[clearembedmodewords]

From $hyperlink[\`$username\`;<$callFunction[userURL;$authorID]>]
]]
    `
}
