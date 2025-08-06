module.exports = {
name: "findemoji",
info: {
  description: "Starts a game of Find Emoji.",
  perms: ["`SendMessages`"]
},
aliases: "find-emoji",
code: `$djsEval[const { FindEmoji } = require('discord-gamecord');

const Game = new FindEmoji({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Find Emoji',
    color: '$getVar[embedcolor]',
    description: 'Remember the emojis from the board below.',
    findDescription: 'Find the {emoji} emoji before the time runs out.'
  },
  timeoutTime: 60000,
  hideEmojiTime: 5000,
  buttonStyle: 'SECONDARY',
  emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
  winMessage: 'You won! You selected the correct emoji. {emoji}',
  loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
  timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;findemoji;$authorID];$dateStamp];1000]]:R>]
`
}
