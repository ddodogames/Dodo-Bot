module.exports = {
  name: "minesweeper",
  info: {
    description: "Starts a random minesweeper game.",
    perms: ["`SendMessages`"]
  },
  code: `$djsEval[const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Minesweeper',
    color: '$getVar[embedcolor]',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'You won the Game! You successfully avoided all the mines.',
  loseMessage: 'You lost the Game! Be aware of the mines next time.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;minesweeper;$authorID];$dateStamp];1000]]:R>]`
}
