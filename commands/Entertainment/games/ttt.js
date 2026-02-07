module.exports = {
name: "tictactoe",
info: {
        description: "Starts a tictactoe match with your opponent.",
        usage: "`tictactoe <user>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["ttt"],
type: "messageCreate",
code: `$userCooldown[tttcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[tttcmd]];1000]]:R>]
$onlyIf[$mentioned[0]!=;Please mention a opponent to play with.]
$onlyIf[$isBot[$mentioned[0]]==false;You cannot play with bots!]
$onlyIf[$mentioned[0]!=$authorID;You cannot play with yourself.]

$!djsEval[const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: ctx.message,
  isSlashGame: false,
  opponent: ctx.message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: '$getGlobalVar[embedcolor]',
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
]`
}
