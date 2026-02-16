module.exports = [{
    name: "Userapps support",
    type: "clientReady",
    code: `$ifAwaited[$getVar[userapps]==true;{execute:createuserapps}]`
},{
    name: "createuserapps",
    type: "awaited",
    code: `
$createApplicationCommand[global;randomcolor;Returns a random color that you can use.;;user;all;slash]
$createApplicationCommand[global;invite;Returns a link to invite the bot;;user;all;slash]
$createApplicationCommand[global;report;Returns a link to report issues on Dodo-Bot's GitHub repo;;user;all;slash]
$createApplicationCommand[global;about;Returns information about Dodo-Bot;;user;all;slash]
$createApplicationCommand[global;ping;Returns the bot's Latency;;user;all;slash]


$createApplicationCommand[global;banner;Returns your/users profile banner.;;user;all;slash;[
  {
    "type": 6,
    "name": "user",
    "description": "User to select to view banner",
    "required": false
  }
]]


$createApplicationCommand[global;avatar;Returns your/users profile picture.;;user;all;slash;[
  {
    "type": 6,
    "name": "user",
    "description": "User to select to view avatar",
    "required": false
  }
]]


$createApplicationCommand[global;reverse;Let's you reverse text!;;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to reverse",
    "required": true
  }
]]

$createApplicationCommand[global;owoify;Makes text OWOifed;;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to owoify",
    "required": true
  }
]]

$createApplicationCommand[global;8ball;Ask a question to 8ball;;user;all;slash;[
  {
    "type": 3,
    "name": "question",
    "description": "The question to ask 8ball about",
    "required": true
  }
]]

$djsEval[const chalk = require('chalk')

console.log(chalk.green("Successfully created user apps! Add the bot to your Discord account to see them!"))
]

$setVar[isuserappsalreadysetup;yes]
$onlyIf[$getVar[isuserappsalreadysetup]==no;]`
}]
