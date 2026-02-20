module.exports = {
  name: "2048",
  info: {
    description: "Starts a random game of 2048.",
    perms: ["`SendMessages`", "`EmbedLinks`"]
  },
  code: `$djsEval[const { TwoZeroFourEight } = require('discord-gamecord');

const Game = new TwoZeroFourEight({
  message: message,
  isSlashGame: false,
  embed: {
    title: '2048',
    color: '$getVar[embedcolor]'
  },
  emojis: {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;2048;$authorID];$dateStamp];1000]]:R>]
`
}
