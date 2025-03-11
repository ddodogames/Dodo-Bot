module.exports = [{
  name: "trivia",
  info: {
    description: "Starts a random Trivia game (pass the flag \`--settings\` to open up the settings).",
    perms: ["`SendMessages`"],
    flags: ["`--settings`"]
  },
  aliases: "triv",
  code: `$ifAwaited[$checkContains[$message;--settings;—settings]==true;{execute:triviasettings};{execute:triviastart}]

  $cooldown[4s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;trivia;$authorID];$dateStamp];1000]]:R>]`
},{
  name: "triviastart",
  type: "awaited",
  code: `$djsEval[const { Trivia } = require('discord-gamecord');

const Game = new Trivia({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Trivia',
    color: '$getVar[embedcolor]',
    description: 'You have 60 seconds to guess the answer.'
  },
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  trueButtonStyle: 'SUCCESS',
  falseButtonStyle: 'DANGER',
  mode: '$getGlobalUserVar[trivia_type]',
  difficulty: '$getGlobalUserVar[trivia_difficulty]',
  winMessage: 'You won! The correct answer is {answer}.',
  loseMessage: 'You lost! The correct answer is {answer}.',
  errMessage: 'Unable to fetch question data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]`
},{
  name: "triviasettings",
  type: "awaited",
  code: `$title[Trivia Settings]
$description[Welcome to Trivia settings! To select a option to change, use the dropdown menu below!]
$addField[**Current Setup**;
**Type#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_type]]\`
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
]
$color[$getVar[embedcolor]]
$addSelectMenu[1;string;triviasettings_$authorID;Select a option;1;1;false;Type:How the game should start?:triviatype:false;Difficulty:How hard the game will be?:triviadifficulty:false]`
}]

