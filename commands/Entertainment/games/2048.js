module.exports = {
name: "2048",
info: {
        description: "Starts a random game of 2048.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
code: `$userCooldown[2048cmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[2048cmd]];1000]]:R>]
$!djsEval[const { TwoZeroFourEight } = require('discord-gamecord');

const Game = new TwoZeroFourEight({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: '2048',
    color: '$getGlobalVar[embedcolor]'
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
]`
}
