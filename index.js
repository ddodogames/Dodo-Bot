const config = require("./config.js");

const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")
require('@dotenvx/dotenvx').config({path: ['.env.local', '.env'], ignore: ['MISSING_ENV_FILE'], strict: false, quiet: true, opsOff: true}) // Enable env support in local hosting

// Client initialization
   const client = new ForgeClient({
    intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent", "GuildPresences", "GuildModeration"], // Intents
    prefixes: ["$getGuildVar[prefix]"], // Custom prefix system
    events: ["clientReady", "error", "interactionCreate", "messageCreate", "messageDelete", "messageUpdate", "guildMemberAdd", "guildMemberRemove", "guildBanAdd", "guildBanRemove", "guildCreate"], // Setup ForgeScript events
    extensions: [ // Load extensions
    new ForgeDB({ // Setup database with better-sqlite3
    type: "better-sqlite3"
    })
    ],
   mobile: config.MobileStatus, // Mobile status
   disableConsoleErrors: config.disableConsoleErrors, // Console errors option
   prefixCaseInsensitive: config.prefixCaseInsensitive, // Whether or not prefix should be case sensitive
   respondOnEdit: config.respondOnEdit // Whether or not to respond to message edits triggering commands
})

// Handlers
client.functions.load("./handlers/functions/");
client.commands.load("./commands/")
ForgeDB.variables(require("./handlers/variables.js"));
// Your bot token
client.login(process.env.BotToken || config.BotToken);

 
