module.exports = {
name: "tictactoe",
info: {
  description: "Play tictactoe with your opponent!",
  usage: "`tictactoe <user>`",
  perms: ["`SendMessages`"]
},
aliases: "ttt",
code: `$djsEval[const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: '$getVar[embedcolor]',
    statusTitle: 'Status',
    overTitle: 'Game Over'
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'SECONDARY',
  oButtonStyle: 'SECONDARY',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
});

Game.startGame();
]
$onlyIf[$isBot[$mentioned[1;true]]==false;You cannot play with bots!]
$onlyIf[$mentioned[1;true]!=$authorID;Please mention a opponent to play with!]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;tictactoe;$authorID];$dateStamp];1000]]:R>]
`
}
