module.exports = {
name: "wordle",
info: {
        description: "Starts a game of Wordle.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
code: `$userCooldown[wordlecmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[wordlecmd]];1000]]:R>]


$!djsEval[const { Wordle } = require('discord-gamecord');

const Game = new Wordle({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Wordle',
    color: '$getGlobalVar[embedcolor]',
  },
  customWord: null,
  timeoutTime: 60000,
  winMessage: 'You won! The word was **{word}**.',
  loseMessage: 'You lost! The word was **{word}**.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]

`
}
