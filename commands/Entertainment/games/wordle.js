module.exports = {
    name: "wordle",
    info: {
    description: "Starts a game of wordle.",
    perms: ["`SendMessages`"]
},
    code: `
    $djsEval[const { Wordle } = require("discord-gamecord");

const Game = new Wordle({
  message: message,
  isSlashGame: false,
  embed: {
    title: "Wordle",
    color: "$getVar[embedcolor]",
  },
  customWord: null,
  timeoutTime: 60000,
  winMessage: "You won! The word was {word}.",
  loseMessage: "You lost! The word was {word}.",
  playerOnlyMessage: "Only {player} can use these buttons."
});

Game.startGame();
]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;wordle;$authorID];$dateStamp];1000]]:R>]

`
}
