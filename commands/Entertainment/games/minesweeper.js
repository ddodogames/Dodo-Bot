module.exports = {
name: "minesweeper",
info: {
        description: "Starts a minesweeper game.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
code: `$userCooldown[minesweepercmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[minesweepercmd]];1000]]:R>]
$!djsEval[const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Minesweeper',
    color: '$getGlobalVar[embedcolor]',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'You won the Game! You successfully avoided all the mines.',
  loseMessage: 'You lost the Game! Beaware of the mines next time.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]`
}
