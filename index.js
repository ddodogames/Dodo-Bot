const { AoiClient } = require("aoi.js"); // Define aoi.js client
const config = require("./config.js"); // Load the setup options from config
require('@dotenvx/dotenvx').config({path: ['.env.local', '.env'], ignore: ['MISSING_ENV_FILE'], strict: false, quiet: true, opsOff: true}) // Enable env support in local hosting

// Needed for variables handler
const vars = require('./handlers/variables.js');


// Setting up Client
const client = new AoiClient({
  token: process.env.BotToken || config.BotToken, // Enter the bot token either via env or config
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system (default prefix used: d!).
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildModeration", "GuildEmojisAndStickers"], // Discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave", "onMessageDelete", "onMessageUpdate", "onBanAdd", "onBanRemove", "onGuildJoin", "onFunctionError"], // Setup aoi.js events
  aoiLogs: false, // Don't show aoi.js default console message
  aoiWarning: false, // Disable aoi.js update warning
  aoiAutoUpdate: false, // Do not autoupdate aoi.js (this is dealt with via new Dodo-Bot releases instead)
  database: { // Use aoi.db as the default database for storing data
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"], // Tables for the database, "main" is used for everything by default.
    securityKey: config.DBsecurityKey || process.env.DBsecurityKey // Security Key with either config or env
  },
  disableFunctions: ["$clientToken"], // For safety reasons
  mobilePlatform: config.MobileStatus, // Whether or not to enable mobile status
  debugs: {
   interpreter: config.EnableDebugMode // Whether or not to enable aoi.js debug mode
  },
  respondOnEdit: {
   commands: config.respondOnEdit.Enabled, // Whether or not to enable responding to edited messages
   time: config.respondOnEdit.RespondUntil // Time limit for responding to edited messages before they become ignored.
  },
  suppressAllErrors: config.DisableAllErrors // Whether or not to disable errors from aoi.js
});


// Handlers
client.loadCommands("./commands/", config.LogCommands);

Object.keys(vars).forEach((t) =>
  client.variables(vars[t], t)
)

client.functionManager.createFunction(...require('./handlers/functions.js'))

 
