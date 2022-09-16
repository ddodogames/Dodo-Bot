# important
the [main](https://github.com/DodoGames7/Dodo-Bot/tree/main) github branch has been deprecated due to stablity problems of the bot, for more info see this [issue](https://github.com/DodoGames7/Dodo-Bot/issues/3)

# disclaimer
to use dodo bot now you must enable Message Privileged Intent from discord developer portal, this breaking change is done by discord in order to force verified bots to migrate to slash commands

# Dodo-Bot
a discord multipurpose aoi.js bot that aims to be improving user experience with discord servers

# self hosting
before running the bot by self hosting the bot, you agree to not to:

1. sell the code

2. reproduce the code, and claiming that you made it (i know you want to flex on your friends but at least give credit to the original work done by me)

3. using it for bad purposes

4. advertising the bot on any platforms such as top.gg, discordbotlist, etc, as i will be taken them down by reporting them to bot list staff

however you are allowed to:

1. give credits if you've used my commands

2. reporting bugs in the bot

# Requirements
- have node.js v16 installed (at least version 16.6.0 or later to run Dodo Bot)
- an host that let's your project have an url (at least for the panel compatibility)
- have an hosting to run Dodo Bot (which must follow the other shown requirements below), local host is fine

# running the bot
this bot supports both glitch and replit, you can also deploy it to [Railway](https://railway.app) or heroku to make the bot running 24 hours online, before doing any of these, you should know on how to use glitch or replit or Railway, otherwise there will be no support for non-related issue there,

reminder: if you have deployed the bot to railway or heroku, then be aware that any data the bot stored it (such as custom prefix, etc) will be reseted automatically next time the bot code is redeployed, you can use hosts like glitch or replit to avoid this, optionally, you could also run `(prefix)eval $readFile[database/main/main_scheme_1.sql]` to view database data, so you can backup your stuff before re deploying

if you're using glitch, replit:

when cloning the bot code from this repo, add a variable named `TOKEN` to .env file, you can also change the custom prefix in the variables file, in fact you're free to change anything in the bot code as long as you know what are you doing

if you're using railway:

Dodo Bot supports Railway as well as a template to the bot, you can click here if you don't want to manually do steps and host it

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/O6clYk?referralCode=88DGWn)


NOTE: if you replaced `process.env.TOKEN` with your token, then you're risking having your bot hacked by a random users, to prevent this, do not remove it, you do not need to do this if your hosting the bot locally on your computer with something like VSC

# reporting bugs
if you have a problem or some broken stuff you found, then you're welcome to open a pull request, before opening, make sure to double check if your fix is working, and if everything works fine then you can go ahead to open a pr request (i will also give credits if you got approved)

# Dashboard Setup
as of v1.7-beta, dodo bot now has support for dashboard for bot developers to manage their bot commands and variables, to get started, fill in the required details using `process.env`:

`process.env.username`: username for dashboard

`process.env.password`: password for logging into dashboard using username, strong password is very likely recommended

`process.env.secret`: session secret, e.g `AOIJSOP`

once you're done, restart the project and you will be greeted with an url where you can login in there and manage your bot through panel features


# branches
* **canary** - a branch with lot of experiments, not meant for public either and shouldn't be used (likely unrecommended due to issues)
* **main** - deprecated, should not be used
* **beta** - a branch which prepares upcoming versions of the bot, usually had bugs but a preview of new features, fixes, etc
* **v1** - actively maintained and up to date with aoi.js changes
* **v2** - the major release of the bot, with support for aoi.js v6!

# Packages

[discord-gamecord](https://www.npmjs.com/package/discord-gamecord)

[leaf-utils](https://www.npmjs.com/package/leaf-utils)

[discord.js-akinator](https://www.npmjs.com/package/discord.js-akinator)

[@akarui/panel](https://github.com/AkaruiDevelopment/panel)

[aoi.db](https://github.com/Leref/aoi.db)



