module.exports = {
name: "findemoji",
info: {
        description: "Starts a game of Find Emoji.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
aliases: ["find-emoji", "fe"],
code: `$userCooldown[findemojicmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[findemojicmd]];1000]]:R>]


$!djsEval[const { FindEmoji } = require('discord-gamecord');

const Game = new FindEmoji({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Find Emoji',
    color: '$getGlobalVar[embedcolor]',
    description: 'Remember the emojis from the board below.',
    findDescription: 'Find the {emoji} emoji before the time runs out.'
  },
  timeoutTime: 60000,
  hideEmojiTime: 5000,
  buttonStyle: 'SECONDARY',
  emojis: \\['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'\\],
  winMessage: 'You won! You selected the correct emoji. {emoji}',
  loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
  timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]

`
}
