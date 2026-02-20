module.exports = [{
name: "hangman",
info: {
    description: "Starts a hangman game (pass the flag \`--themes\` to change the current theme).",
    usage: "`hangman (flag)`",
    perms: ["`SendMessages`", "`EmbedLinks`"],
    flags: ["`--themes`", "`--settings` (alias)"]
  },
aliases: "hm",
code: `$ifAwaited[$checkContains[$message;--themes;—themes;--settings;—settings]==true;{execute:hangmansettings};{execute:hangmanstart}]

$cooldown[4s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;hangman;$authorID];$dateStamp];1000]]:R>]
`
},{
    name: "hangmanstart",
    type: "awaited",
    code: `
    $djsEval[const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Hangman',
    color: '$getVar[embedcolor]'
  },
  hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
  customWord: null,
  timeoutTime: 60000,
  theme: '$getGlobalUserVar[hangman_theme]',
  winMessage: 'You won! The word was {word}.',
  loseMessage: 'You lost! The word was {word}.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]`
},{
  name: "hangmansettings",
  type: "awaited",
  code: `$title[Hangman Themes]
$description[Welcome to Hangman Themes! To select a theme to use, use the dropdown menu below!]
$addField[**Current theme**;
* \`$toLocaleUpperCase[$getGlobalUserVar[hangman_theme]]\`
]
$color[$getVar[embedcolor]]
$addSelectMenu[1;string;hangmansettings_$authorID;Select a theme;1;1;false;Nature:Sets the theme to Nature-related:nature:false;Sport:Sets the theme to Sport-related:sport:false;Color:Sets the theme to Color-related:color:false;Camp:Sets the theme to Camp-related:camp:false;Fruit:Sets the theme to Fruit-related:fruit:false;Discord:Sets the theme to Discord-related:discord:false;Winter:Sets the theme to Winter-related:winter:false;Pokemon:Sets the theme to Pokemon-related:pokemon:false]`
}]
