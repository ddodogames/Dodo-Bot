# Dodo-Bot
A personal bot project made in ForgeScript aiming to both entertain and provide users some features to use.


# What is this
Dodo-Bot is a personal project that existed since late 2021. It was mainly made for entertainment and such. It is mostly made with the goal mindset of reducing the number of bots needed to do each stuff.

This version of the bot aka v3 is based on the (now abandoned and silently discontinued) CupcakeX codebase albeit with improvements and new stuff for the sake of learning.

# What does it include?
* Simple leveling system 
* Fun commands (text, images and games like tictactoe for example)
* Welcomer/Leave system
* Suggestion and Polls
* Logging setup (like ban logs)

# History of v3
During the early days of the development (while at the same time 2.1.0 was being worked on), v3 was originally going to replace v2 once it's released but this was later delayed and it got renamed to "Rebase". This was finally reversed in 3.0.2 as it became clear that things had to eventually change.

The purpose of this version is to keep Dodo-Bot alive without relying on aoi.js given that it's pretty much now in eol state. Being based on ForgeScript, advanced stuff can finally be done on the bot as it was previously not possible in v2 and older.

This bot purely exists just because i got sick of some verified bot but you can use this project and also learn from it if you happen to be using ForgeScript!

### What about v2?
V2 has been discontinued following the eol of aoi.js because there doesn't seem to be a good reason to still maintain it if the package it's relying on is left to rot. It just creates issues nobody wants and it means missing out on improvements and fixes for any breaking changes caused by Discord itself.

You can still use it because nothing is stopping you from doing so but being discontinued means it won't be updated and any bugs will remain unfixed. It can also eventually break in the future since outdated stuff do break by some major changes.

# Versions
| Release | Description | Status |
| :------- | :------: | -------: |
| [**v1**](https://github.com/ddodogames/Dodo-Bot/tree/v1)  | The discontinued version of Dodo-Bot. It had a bad start with bunch of bugs due to me being newbie in aoi.js at the time.  | Discontinued  |
| [**v2**](https://github.com/ddodogames/Dodo-Bot/tree/v2)  | The version 2 of the bot. Based on aoi.js v6!  | Discontinued  |
| [**v3 (current)**](https://github.com/ddodogames/Dodo-Bot/tree/v3)  | The current version of the bot. Gets both fixes and improvements!  | Maintained  |
| [**canary**](https://github.com/ddodogames/Dodo-Bot/tree/canary)  | Development builds of v3. Not recommended for general use. More information can be found [here](https://ddodogames.github.io/dodo-bot-site/advanced/canary/).  | Maintained  |

# Requirements
You can host v3 on any host as long as you meet the following Requirements:
* Node.js v18 or later is required as older versions are not supported
* A host ready to handle Bot's Features (Obviously)

# Configuration
Dodo-Bot allows you to change some options before turning it on. To do this, check out the `config.js` file present in the source code itself which contains available options to change from!

If you're confused about the options, here is a description about what each option does:
| Option | Description | Default |
| :------- | :------: | -------: |
| prefix  | Prefix to use to execute any bot command.  | `d!`  |
| prefixCaseInsensitive  | Whether or not to type prefix as case-insensitive (e.g `d!` can be also typed as `D!` if this is enabled).   | `true`  |
| BotToken  | Token of the bot to use to run the project.   | none (obviously)  |
| Embedcolor  | Color to use for the majority of commands returning embed.   | `#404060`  |
| MobileStatus  | Sets the online icon of the bot to the mobile variant whenever it starts.   | `false`  |
| disableConsoleErrors  | Whether or not disable console errors.   | `false`  |
| AllowBotManagers  | Allows `Admin` and `Developer` members from developer portal to manage the bot if set to `true`.   | `false`  |
| respondOnEdit  | Allow responding to edited messages.   | `false`  |

# Credits
Most of code belongs to me (besides the ones credited in credits command). You can also credit me using my discord username: "dodogames".

In case of using my code for development purposes, you may agree to not claim that you made the bot; otherwise, I may ask you for credit. Further information about the use of source code is explained in the credits command.
