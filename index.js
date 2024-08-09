const config = require("./config.json");
const functions = require("./handler/functions.js");

const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")
require('dotenv').config() // Enable env support in local hosting



// Client initialization
   const client = new ForgeClient({
    "intents": [ // intents
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "MessageContent",
        "GuildPresences",
        "GuildModeration"
    ],
    "prefixes": [ // Custom prefix system
        "$getGuildVar[prefix]"
    ],
    "events": [ // Events used
        "ready",
        "error",
        "interactionCreate",
        "messageCreate",
        "messageDelete",
        "messageUpdate",
        "guildMemberAdd",
        "guildMemberRemove",
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate"
    ],
    "extensions": [ // Load extensions
        new ForgeDB({database: "./database/forge.db"})
    ],
   mobile: config.MobileStatus
})

// Handlers
   client.commands.load("commands")
ForgeDB.variables(require("./handler/variables.js"));
functions.forEach((func) => client.functions.add(func));
// Your bot token
   client.login(process.env.BotToken || config.BotToken);

 
