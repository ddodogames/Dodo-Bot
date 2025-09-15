module.exports = {
  name: "match-pairs",
  info: {
    description: "Starts a random matchpairs game.",
    perms: ["`SendMessages`"]
  },
  aliases: "matchpairs",
  code: `$djsEval[const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Match Pairs',
    color: '$getVar[embedcolor]',
    description: '**Click on the buttons to match emojis with their pairs.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**You won the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  loseMessage: '**You lost the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;match-pairs;$authorID];$dateStamp];1000]]:R>]
`
}
