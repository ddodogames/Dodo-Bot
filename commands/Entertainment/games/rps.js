module.exports = {
name: "rps",
info: {
        description: "Start a rps match with your opponent (you can also ping yourself to play against the bot).",
        usage: "`rps <user or ping yourself>`",
        perms: ["`SendMessages`", "`EmbedLinks`"]
},
aliases: ["rock-paper-scissors"],
type: "messageCreate",
code: `$userCooldown[rpscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[rpscmd]];1000]]:R>]
$onlyIf[$mentioned[0]!=;Please mention a opponent to play with.

**Tip:** You can also play without any opponent by mentioning yourself.]
$onlyIf[$isBot[$mentioned[0]]==false;You cannot play with bots!]

$if[$mentioned[0]==$authorID;
$title[RPS]
$description[The game has been started. What are you going to choose against the bot?]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;false]
$addButton[paper_$authorID;Paper;Secondary;📰;false]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;false]

;
$!djsEval[const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: ctx.message,
  isSlashGame: false,
  opponent: ctx.message.mentions.users.first(),
  embed: {
    title: 'Rock Paper Scissors',
    color: '$getGlobalVar[embedcolor]',
    description: 'Press a button below to make a choice.'
  },
  buttons: {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
  },
  emojis: {
    rock: '🌑',
    paper: '📰',
    scissors: '✂️'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  pickMessage: 'You choose {emoji}.',
  winMessage: '**{player}** won the Game! Congratulations!',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
});

Game.startGame();
]
]
`
}
