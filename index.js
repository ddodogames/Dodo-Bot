const { AoiClient, LoadCommands, Util} = require("aoi.js");

const bot = new AoiClient({
  token: process.env.TOKEN, // token is private by using env method
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system.
  intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages"], // discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate"], // mostly for making the bot interactions work
  aoiLogs: false, // don't show aoi.js default console message
  aoiWarning: true, // disable aoi.js update warning
  guildOnly: false // don't limit commands to server only
});


const loader = new LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


bot.variables(require("./handler/variables.js"));

// parser support
const { parse, createAst } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}
 