module.exports = {
name: "connect4",
info: {
        description: "Starts a connect4 game.",
        usage: "`connect4 <user>`",
        perms: ["`SendMessages`"]
},
aliases: ["c4", "connectfour"],
type: "messageCreate",
code: `$userCooldown[c4cmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[c4cmd]];1000]]:R>]
$onlyIf[$mentioned[0]!=;Please mention a opponent to play with.]
$onlyIf[$isBot[$mentioned[0]]==false;You cannot play with bots!]
$onlyIf[$mentioned[0]!=$authorID;You cannot play with yourself.]
$!djsEval[const { Connect4 } = require('discord-gamecord');

const Game = new Connect4({
  message: ctx.message,
  isSlashGame: false,
  opponent: ctx.message.mentions.users.first(),
  embed: {
    title: 'Connect4 Game',
    statusTitle: 'Status',
    color: '$getGlobalVar[embedcolor]'
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
]`
}
