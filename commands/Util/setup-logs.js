module.exports = {
    name: "setup-logs",
    info: {
        description: "Setup Logs available of the bot.",
        perms: ["`SendMessages`"]
    },
    code: `$title[Setup Logs]
$description[Select the log you want to setup using the dropdown menu below!]
$color[$getVar[embedcolor]]
$addSelectMenu[1;string;setuplogsmenu_$authorID;Select a log type;1;1;false;Message Delete:Setup Message Delete logs:msgdeletelog:false;Message Edit:Setup Message Edit logs:msgeditlog:false;Ban:Setup Ban logs:banlogs:false;Unban:Setup Unban logs:unbanlogs:false;Integration:Setup Integration logs:integration:false]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;setup-logs;$authorID];$dateStamp];1000]]:R>]
`
}
