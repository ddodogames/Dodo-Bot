module.exports = {
name: "dev-panel",
info: {
    description: "Allows you to access Developer panel!",
    perms: ["`SendMessages`", "`EmbedLinks`"],
    dev: "true"
},
aliases: ["devpanel", "developer-panel", "dev-settings"],
type: "messageCreate",
code: `$callFunction[botDevsOnly]
$title[Developer panel]
$description[Welcome to Developer panel! This panel allows you to change some stuff in the bot!

To change anything, use the select menu below.]
$color[Yellow]
$attachment[./assets/devsettings.png;devsettings.png]
$thumbnail[attachment://devsettings.png]
$addActionRow
$addStringSelectMenu[devmenu_$authorID;Select a option;false;1;1]
$addOption[Bot Invitation Message;Whether or not to greet servers the bot gets added to;botinvitationmessageoption;👋;false]
$addOption[Error logging;Log errors to specific channel;errorloggingoption;📢;false]
$addOption[Embed color;Change the current embed color used in all cmds;embedcoloroption;🎨;false]
$addOption[Pre-release;Whether or not to mark the current build as Pre-release;prereleaseoption;⚠️;false]
$addOption[Startup;Send messages that the bot is ready to specific channel;startupoption;🚦;false]
$addOption[Show build info;Whether or not to display build info in version cmd;showbuildinfooption;🛠️;false]
$addOption[Member requirement;How much members are required for new servers;memberrequirementoption;📋;false]
$addActionRow
$addButton[generatedatabasebackup_$authorID;Backup Database;Secondary]
$addButton[leaveaserverbutton_$authorID;Leave a server;Secondary]
`
}
