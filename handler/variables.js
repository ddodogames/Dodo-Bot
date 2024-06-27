const config = require("../config.json");
module.exports = {
  // Games variables
  trivia_type: "multiple",
  trivia_difficulty: "medium",
  flood_difficulty: 13,
  wyr: {upvotes: 0, downvotes: 0},
  // Bot variables (do not touch)
  autopingreply: "off",
  includebots: "on",
  version: "2.1.0",
  versionCodename: "Tower Valley",
  buildStatus: "Incomplete",
  buildDate: "1719438293386",
  buildType: "Official Stable",
  buildBranch: "main",
  buildRevision: "0",
  embedcolor: "#2A3759",
  buildNumber: "2095",
  release_type: "Pre-release",
  prefix: config.prefix,
  originalprefix: config.prefix,
  // Feature variables
  suggestionchannel: "none",
  pollchannel: "none",
  welcomemessage: "Welcome to the server <username>!",
  welcomechannel: "none",
  welcometype: "text",
  welcomemessageembedcolor: "#1F8B4C",
  welcomesystem: "off",
  leavechannel: "none",
  leavesystem: "off",
  leavetype: "text",
  leavemessageembedcolor: "#ED4245",
  leavemessage: "Goodbye <username>! We now have <server.totalMembers> members left!",
  msglogdeletedchannel: "none",
  msglogeditchannel: "none",
  banneduserschannel: "none",
  unbanneduserschannel: "none",
  anonymous: "off",
  betacommands: "off",
  betaserver: "off",
  levelsystem: "off",
  level: "1",
  previouslevel: "0",
  xp: "0",
  xpLimit: "10",
  levelmessage: "<username> has leveled UP! Their new level is now <level>!",
  levelingmessagechannel: "none",
  levelmessagefeature: "off",
  levelleaveonreset: "off",
  islevelingreset: "no",
  // Developer variables
  errorchannel: "none",
  errorsystem: "off",
  startupchannel: "none",
  startupchannelsystem: "off",
  pre_release_mode: "on",
  gitbuildscheck: "on",
  botgreeting: "on",
  
}
