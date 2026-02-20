module.exports = [{
  name: "say",
  info: {
    description: "Makes the bot say whatever you want (alongside with optional embed mode).",
    usage: "`say <text> (flag)`\n\n-# Execute the command first before specifying parameters.",
    perms: ["`SendMessages`", "`EmbedLinks` (if using `--embed` flag)"],
    flags: ["`--embed`"]
},
aliases: ["talk","repeat"],
  code: `$awaitMessages[$channelID;$authorID;30s;everything;awaitedsay;Time ran out! You didn't make me say anything!]
What do you want me to say?

**Tip:** To use embed mode, make sure your message contains the flag \`--embed\` to do so.
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;say;$authorID];$dateStamp];1000]]:R>]
  `
},{
    name: "awaitedsay",
    $if: "old",
    type: "awaited",
    code: `
$if[$checkContains[$message;--embed;—embed]==true||$charCount[$message]>=2000]
$author[$username;$userAvatar;$userURL[$authorID]]
$title[Say Cmd!;$nonEscape[$get[links]]]
$description[$get[content]]
$color[#$randomColor]
$addTimeStamp
$else
$message

- From [\`$username\`](<$userURL[$authorID]>)
$endif
$disableMentionType[all]
$onlyIf[$get[content]!=;You cannot activate embed mode without providing a text first.]
$let[content;$removeContains[$message;--embed;—embed]]
$let[links;$randomText[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog;embedlinks];https://www.youtube.com/watch?v=dQw4w9WgXcQ]]
`
}]
