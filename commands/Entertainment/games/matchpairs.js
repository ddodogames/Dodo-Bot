module.exports = {
name: "matchpairs",
info: {
        description: "Starts a game of Match Pairs.",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
type: "messageCreate",
aliases: ["match-pairs", "mp"],
code: `$userCooldown[matchpairscmd;3s;Cooldown has been triggered! Please wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[matchpairscmd]];1000]]:R>]


$!djsEval[const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Match Pairs',
    color: '$getGlobalVar[embedcolor]',
    description: '**Click on the buttons to match emojis with their pairs.**'
  },
  timeoutTime: 60000,
  emojis: \\['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'\\],
  winMessage: '**You won the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  loseMessage: '**You lost the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]

`
}
