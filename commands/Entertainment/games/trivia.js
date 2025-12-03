module.exports = {
name: "trivia",
info: {
        description: "Starts a game of Trivia (pass the flag `--settings` to open the settings).",
        usage: "`trivia (flag)`",
        perms: ["`SendMessages`"],
        flags: ["`--settings`"]
},
aliases: ["triv"],
type: "messageCreate",
code: `$userCooldown[trivcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[trivcmd]];1000]]:R>]

$if[$checkContains[$message;--settings;—settings]==true;
$title[Trivia settings]
$description[Welcome to Trivia's settings! Select a option to change!]
$addField[Current Setup;
**Type:** $toTitleCase[$getUserVar[trivia_type]]
**Difficulty:** $toTitleCase[$getUserVar[trivia_difficulty]]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the game should be?;triviadifficultyoption;;false]
;
$!djsEval[const { Trivia } = require('discord-gamecord');

const Game = new Trivia({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Trivia',
    color: '$getGlobalVar[embedcolor]',
    description: 'You have 60 seconds to guess the answer.'
  },
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  trueButtonStyle: 'SUCCESS',
  falseButtonStyle: 'DANGER',
  mode: '$getUserVar[trivia_type]',  
  difficulty: '$getUserVar[trivia_difficulty]',  
  winMessage: 'You won! The correct answer is {answer}.',
  loseMessage: 'You lost! The correct answer is {answer}.',
  errMessage: 'Unable to fetch question data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
]

`
}
