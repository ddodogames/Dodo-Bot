const config = require("../config.json");

module.exports = {
// Main variables (don't touch unless you know what you're doing)
version: "1.2.5",
versionCodename: "Night sky",
libraryversiondevcheck: "on",
release_type: "Stable",
DevReleaseTypeToSet: "Pre-release",
pre_release: "on",
buildNumber: "2360",
buildStatus: "Incomplete",
buildBranch: "rebase",
buildRevision: "0",
buildDate: "1735793743286",
showbuildinfo: "on",
AllowBotMembers: config.AllowBotMembers,
prefix: config.prefix,
botinvitationmessage: "on",
startupsystem: "off",
startupchannel: "",
errorlogging: "off",
errorchannel: "",
servermemberrequirement: "0",
embedcolor: config.Embedcolor,
originalembedcolor: config.Embedcolor,
// Game variables
trivia_type: "multiple",
trivia_difficulty: "medium",
flood_difficulty: 13,
wyr: {upvotes: 0, downvotes: 0},
hangman_theme: "nature",
// Feature variables
suggestionchannel: "",
msglogdeletechannel: "",
msglogeditchannel: "",
banlogschannel: "",
unbanlogschannel: "",
integrationlogchannel: "",
welcomermessage: "Welcome to the server <member.username>!",
welcomerchannel: "",
welcomertype: "text",
welcomermessageembedcolor: "#1F8B4C",
welcomersystem: "off",
leavechannel: "",
leavesystem: "off",
leavetype: "text",
leavemessageembedcolor: "#ED4245",
leavemessage: "Goodbye <member.username>! We now have <server.totalMembers> members left!",
levelingsystem: "off",
level: "1",
previouslevel: "0",
xp: "0",
xpLimit: "10",
levelingmessage: "<member.username> has leveled UP! Their level is now <newlevel>!",
levelingmessagechannel: "",
levelingmessagefeature: "off",
levelingresetonleave: "off",
levelingexcludedchannels: "none",
levelingexcludedcategories: "none",
levelingexcludedroles: "none",
autoreplyping: "off",
anonymous: "off",
includebots: "on"
}
