module.exports = {
name: "connect4",
info: {
  description: "Play connect4 with your opponent!",
  usage: "`connect4 <user>`",
  perms: ["`SendMessages`"]
},
aliases: ["c4", "connectfour"],
code: `$djsEval[const { Connect4 } = require('discord-gamecord');

const Game = new Connect4({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Connect4 Game',
    statusTitle: 'Status',
    color: '$getVar[embedcolor]'
  },
  emojis: {
    board: '⚪',
    player1: '🔴',
    player2: '🟡'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{player}** won the Connect4 Game.',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
});
Game.startGame();
]
$onlyIf[$isBot[$mentioned[1;true]]==false;You cannot play with bots!]
$onlyIf[$mentioned[1;true]!=$authorID;Please mention a opponent to play with!]
$cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;connect4;$authorID];$dateStamp];1000]]:R>]
`
}
