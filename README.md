<div align="center">
  
# Dodo-Bot
A personal bot project made in ForgeScript aiming to both entertain and provide users some features to use.

</div>

# What is this
Dodo-Bot is a personal project that started in late 2021. It was mainly made for entertainment with some features added to it. It is mostly made with the goal mindset of reducing the number of bots needed to do each stuff.

This version of the bot aka v3 is based on the (now abandoned and silently discontinued) CupcakeX codebase albeit with improvements and new stuff for the sake of learning.

# What does it include?
* Simple leveling system 
* Fun commands (text, images and games like tictactoe for example)
* Welcomer/Leave system
* Suggestion and Polls
* Logging stuff (like ban logs)

# History of v3
Before late 2023, v3 was initially just a thought to find a way to not rely on aoi.js. This included private test builds for this version that led to nowhere as there was no clear vision at all at the time except for the main idea of killing reliance on aoi.

It wasn't until towards the final months of 2023 that i discovered a fitting alternative for aoi.js called "ForgeScript" and i went ahead to start working on test builds with it which eventually became v3 after it initially evolved into "Rebase" (which is explained below).

During the early days of development (while at the same time 2.1.0 was being worked on), v3 was originally going to replace v2 once it's released but this was later delayed and it got renamed to "Rebase". This was finally reversed around the release of 3.0.2 as it became clear that things had to eventually change.

The purpose of this version is to keep Dodo-Bot alive without relying on aoi.js given that it's pretty much now in "not so good" state. Being based on ForgeScript, advanced stuff can finally be done in the bot as it was previously not possible in v2 and older.

This bot purely exists just because i got sick of some verified bot but you can use this project and also learn from it if you happen to be using ForgeScript!

### What about v2?
When aoi.js was originally announced to be EOL on 3th December 2025 by one of it's devs, v3 became the default version as a way to make the bot not fall in the dead list.

Apparently however, this was reversed later on 27th December of the same year above by the main owner of aoi.js which seemed pretty weird to me. As someone who saw aoi.js in a dying state constantly, i began to notice a weird pattern where it's like it desperately tries to stay alive while at the same time it fails doing so. By then, it was already too late for me to reverse my decision on making v3 the default version.

Also, if aoi.js revival actually led to anywhere then it would have still contained breaking changes from say, some major version (like v7) that would make it still useless to maintain Dodo-Bot v2 because it relies on aoi.js v6 to offer the bot's features to users.

Despite this however, v2 will be temporarily maintained for a period of time since apparently the migration to other alternatives were not instant.


# Versions
| Release | Description | Status |
| :------- | :------: | -------: |
| [**v1**](https://github.com/ddodogames/Dodo-Bot/tree/v1)  | The discontinued version of Dodo-Bot. It had a bad start with bunch of bugs due to me being newbie in aoi.js at the time.  | Discontinued  |
| [**v2**](https://github.com/ddodogames/Dodo-Bot/tree/v2)  | The version 2 of the bot. Based on aoi.js v6!  | Maintained, sorta of (in LTS state)  |
| [**v3 (current)**](https://github.com/ddodogames/Dodo-Bot/tree/v3)  | The current version of the bot. Gets both fixes and improvements!  | Maintained  |
| [**canary**](https://github.com/ddodogames/Dodo-Bot/tree/canary)  | Development builds of v3. Not recommended for general use. More information can be found [here](https://ddodogames.github.io/dodo-bot-site/advanced/canary/).  | Maintained  |

# Requirements
You can host v3 on any host as long as you meet the following Requirements:
* Node.js v20 or later is required as older versions are not supported
* A host ready to handle features of the bot (obviously)

# Configuration
Dodo-Bot allows you to change some options before turning it on. To do this, check out the `config.example.js` file present in the source code itself which contains available options to change from! Make sure to make a duplicate of the file as `config.js` to be able to set up the bot.

If you're confused about the options, here is a description about what each option does:
| Option | Description | Default |
| :------- | :------: | -------: |
| prefix  | Prefix to use to execute any bot command.  | `d!`  |
| prefixCaseInsensitive  | Whether or not to type prefix as case-insensitive (e.g `d!` can be also typed as `D!` if this is enabled).   | `true`  |
| BotToken  | Token of the bot to use to run the project.   | none (obviously)  |
| Embedcolor  | Color to use for the majority of commands returning embed.   | `#5484D8` or `#FEE75C` for Canary  |
| MobileStatus  | Sets the online icon of the bot to the mobile variant whenever it starts.   | `false`  |
| disableConsoleErrors  | Whether or not disable console errors.   | `false`  |
| AllowBotMembers  | Allows members from developer portal to see the special commands (and use them for `Admin` and `Developer`) if set to `true`.   | `false`  |
| respondOnEdit  | Allow responding to edited messages.   | `false`  |

# Credits
Most of the code and stuff belongs to me (besides the ones credited in credits command). You can also credit me using my discord username: "dodogames".

In case of using my code for development purposes, you may agree to not claim that you made the bot; otherwise, I may ask you for credit. Further information about the use of source code is explained in the credits command.
