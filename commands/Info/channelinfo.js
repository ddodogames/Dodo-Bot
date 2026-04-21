module.exports = {
    name: "channelinfo",
    type: "messageCreate",
    info: {
        description: "Returns information about the specified channel.",
        usage: "`channelinfo <channel>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
    },
    aliases: ["channel", "chi"],
    code: `$userCooldown[channelinfocmd;3s;Cooldown has been triggered! Please wait!
    Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[channelinfocmd]];1000]]:R>]

$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userDefaultAvatar[$clientID];false;$guildIcon]]
$let[channel;$findChannel[$message;false]]

$onlyIf[$get[channel]!=;Please specify a channel (via mention, ID, or name) to view its information.
-# For private threads to work, ensure i'm a member in them.
]

$onlyIf[$guildChannelExists[$guildID;$get[channel]]==true;Please mention a valid channel that exists in this server.]

$let[nsfw;$advancedReplace[$checkCondition[$channelNSFW[$get[channel]]==true];true;Yes;false;No]]
$let[channeltype;$advancedReplace[$#channelType[$get[channel]];GuildText;Text;GuildVoice;Voice;GuildCategory;Category;GuildAnnouncement;Announcement;AnnouncementThread;Announcement (Thread);GuildStageVoice;Stage;GuildForum;Forum;GuildMedia;Media;GuildDirectory;Directory;GuildNews;News;GuildNewsThread;News (Thread);GuildPublicThread;Threads (public);GuildPrivateThread;Threads (private)]]
$let[manageable;$advancedReplace[$checkCondition[$channelManageable[$get[channel]]==true];true;Yes;false;No]]
$let[voicechanneljoinlimit;$advancedReplace[$checkCondition[$channelUserLimit[$get[channel]]==0];true;Infinite;false;$channelUserLimit[$get[channel]]]]

$author[About this channel;$get[servericon];$get[servericon]]
$title[$channelName[$get[channel]]]
$addField[**General**;
* **ID:** $get[channel]
* **Type:** $get[channeltype]
* **NSFW:** $get[nsfw]
* **Created on:** <t:$trunc[$divide[$channelCreatedAt[$get[channel]];1000]]:f>
;true]
$addField[**Other**;
* **Managed by Discord:** $get[manageable] $if[$channelCategoryID[$get[channel]]!=;
* **Belongs to:** $channelName[$channelCategoryID[$get[channel]]]] $if[$get[channeltype]==Voice;
* **User limit:** $get[voicechanneljoinlimit]
]
;true]
$color[$getGlobalVar[embedcolor]]
    `
}
