module.exports = [{
name: "rock-paper-scissors",
info: {
  description: "Play rps with your opponent (or optionally play against yourself)!",
  perms: ["`SendMessages`"]
},
aliases: "rps",
code: `$ifAwaited[$mentioned[1;false]==$authorID;{execute:rpsoneplayer};{execute:rpstwoplayer}]


$onlyIf[$isBot[$mentioned[1;true]]==false;You cannot play with bots!]
$onlyIf[$mentioned[1;false]!=undefined;Please mention a opponent to play with!

**Tip:** Want to play against yourself? Mention yourself to do so!
]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;rock-paper-scissors;$authorID];$dateStamp];1000]]:R>]
`
},{
  name: "rpsoneplayer",
  type: "awaited",
  code: `
$awaitComponents[$channelID;$get[messageID];$authorID;rpsrockbutton,rpspaperbutton,rpsscissorsbutton;rpsgameresults1,rpsgameresults2,rpsgameresults3;rpstimeout;1;30s]

$let[messageID;$sendMessage[{newEmbed:{title:Rock Paper Scissors}{description:The game has started!, What will you choose?}{color:$getVar[embedcolor]}}

{actionRow:{button:Rock:2:rpsrockbutton:false:🌑}{button:Paper:2:rpspaperbutton:false:📰}{button:Scissors:2:rpsscissorsbutton:false:✂️}}
;true]]
`
},{
  name: "rpstwoplayer",
  type: "awaited",
  code: `$djsEval[const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: "Rock Paper Scissors",
    color: "$getVar[embedcolor]",
    description: "Press a button below to make a choice."
  },
  buttons: {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors"
  },
  emojis: {
    rock: "🌑",
    paper: "📰",
    scissors: "✂️"
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: "SECONDARY",
  pickMessage: "You choose {emoji}.",
  winMessage: "**{player}** won the Game! Congratulations!",
  tieMessage: "The Game tied! No one won the Game!",
  timeoutMessage: "The Game went unfinished! No one won the Game!",
  playerOnlyMessage: "Only {player} and {opponent} can use these buttons."
});

Game.startGame()
]`
}]
